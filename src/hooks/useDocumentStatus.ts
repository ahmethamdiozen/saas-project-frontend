import { useEffect, useRef } from 'react';

export interface DocumentStatusEvent {
  type: 'document_status';
  document_id: string;
  status: 'ready' | 'error';
  page_count: number | null;
  filename: string;
}

type WSEvent = DocumentStatusEvent;

const WS_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1')
  .replace(/^http/, 'ws')
  .replace(/\/api\/v1$/, '/api/v1/ws');

export function useDocumentStatus(onEvent: (event: WSEvent) => void) {
  const onEventRef = useRef(onEvent);
  useEffect(() => { onEventRef.current = onEvent; }, [onEvent]);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;
    let retries = 0;
    let stopped = false;

    const connect = () => {
      if (stopped) return;

      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        retries = 0;
      };

      ws.onmessage = (event) => {
        try {
          const data: WSEvent = JSON.parse(event.data);
          onEventRef.current(data);
        } catch {
          // ignore malformed messages
        }
      };

      ws.onclose = (event) => {
        if (stopped || event.code === 4001) return; // 4001 = unauthorized
        const delay = Math.min(1000 * Math.pow(2, retries), 30000);
        retries++;
        retryTimeout = setTimeout(connect, delay);
      };

      ws.onerror = () => {
        ws?.close();
      };
    };

    connect();

    return () => {
      stopped = true;
      if (retryTimeout) clearTimeout(retryTimeout);
      ws?.close(1000);
    };
  }, []);
}
