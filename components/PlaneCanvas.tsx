"use client";

import { useEffect, useRef } from "react";
import {
  PlaneAnimator,
  DEFAULT_CONFIG,
  MOBILE_CONFIG,
} from "@/lib/planes";

export default function PlaneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animatorRef = useRef<PlaneAnimator | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 640;
    const config = isMobile ? MOBILE_CONFIG : DEFAULT_CONFIG;
    const animator = new PlaneAnimator(canvas, config);
    animatorRef.current = animator;
    animator.start();

    const onResize = () => {
      animator.resize();
      const mobile = window.innerWidth < 640;
      animator.updateConfig(mobile ? MOBILE_CONFIG : DEFAULT_CONFIG);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      animator.stop();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
