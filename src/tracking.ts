import { PostHog } from "posthog-js";
import { isProdMode } from "./utils";

type TrackingEvent = {
  name: string;
  properties?: {
    [prop: string]: any;
  };
};

export function getPosthog() {
  if (typeof window === "undefined") {
    return;
  }
  if (!(window as any).posthog) {
    return;
  }
  return (window as any).posthog as PostHog;
}

export function trackPosthogEvent(e: TrackingEvent) {
  getPosthog()?.capture(e.name, e.properties);
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
