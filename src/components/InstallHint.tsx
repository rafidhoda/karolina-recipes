"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "kr-install-hint-dismissed";

export function InstallHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari
      // @ts-expect-error legacy property
      window.navigator.standalone === true;
    if (standalone) return;

    const ua = window.navigator.userAgent;
    const isIos = /iPhone|iPad|iPod/.test(ua) && !/CriOS|FxiOS/.test(ua);
    if (!isIos) return;

    if (window.localStorage.getItem(DISMISS_KEY)) return;
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-2xl border border-amber-200 bg-amber-50/95 p-4 text-sm text-amber-900 shadow-lg backdrop-blur">
      <div className="flex items-start gap-3">
        <span className="text-xl">📱</span>
        <div className="flex-1">
          <p className="font-semibold">Install as an app</p>
          <p className="mt-1 text-amber-800/90">
            Tap{" "}
            <span className="inline-flex items-baseline gap-1 font-medium">
              Share <span aria-hidden>↑</span>
            </span>{" "}
            then <span className="font-medium">Add to Home Screen</span>.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(DISMISS_KEY, "1");
            setShow(false);
          }}
          className="rounded-full px-2 py-1 text-amber-700 hover:bg-amber-100"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
