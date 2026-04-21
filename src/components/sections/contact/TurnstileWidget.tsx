"use client";

import Script from "next/script";
import { useRef, useCallback, useEffect } from "react";

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  widgetIdRef: React.RefObject<string | null>;
}

export function TurnstileWidget({ onSuccess, onExpire, onError, widgetIdRef }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const render = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!,
      theme: "auto",
      callback: onSuccess,
      "expired-callback": onExpire,
      "error-callback": onError,
    });
  }, [onSuccess, onExpire, onError, widgetIdRef]);

  // Fallback: script already loaded before this component mounted
  useEffect(() => {
    if (window.turnstile && !widgetIdRef.current) {
      render();
    }
  }, [render, widgetIdRef]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={render}
      />
      <div ref={containerRef} />
    </>
  );
}
