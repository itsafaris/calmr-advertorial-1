import { posthog } from "posthog-js";

type TrackingEvent = {
  name: string;
  properties?: {
    [prop: string]: any;
  };
};

export function trackPosthogEvent(e: TrackingEvent) {
  posthog.capture(e.name, e.properties);
}

export function trackPixelEvent(e: TrackingEvent) {
  if (typeof window === "undefined") {
    return;
  }
  if (!(window as any).fbq) {
    return;
  }
  (window as any).fbq("track", e.name, e.properties);
}
