/** Configuration for the flying planes animation */
export interface PlaneConfig {
  maxPlanes: number;
  spawnInterval: number;
  minSpeed: number;
  maxSpeed: number;
  planeSize: number;
  opacity: number;
  color: string;
}

export const DEFAULT_CONFIG: PlaneConfig = {
  maxPlanes: 6,
  spawnInterval: 2500,
  minSpeed: 0.3,
  maxSpeed: 0.8,
  planeSize: 20,
  opacity: 0.15,
  color: "#e63946",
};

export const MOBILE_CONFIG: PlaneConfig = {
  maxPlanes: 3,
  spawnInterval: 3500,
  minSpeed: 0.2,
  maxSpeed: 0.5,
  planeSize: 14,
  opacity: 0.1,
  color: "#e63946",
};

interface Plane {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  opacity: number;
  maxOpacity: number;
  age: number;
  lifetime: number;
}

/** Manages the plane animation on a canvas element */
export class PlaneAnimator {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: PlaneConfig;
  private planes: Plane[] = [];
  private animationId: number | null = null;
  private lastSpawn = 0;

  constructor(canvas: HTMLCanvasElement, config: PlaneConfig) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.config = config;
  }

  start() {
    this.resize();
    this.tick(0);
  }

  stop() {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.canvas.offsetWidth * dpr;
    this.canvas.height = this.canvas.offsetHeight * dpr;
    this.ctx.scale(dpr, dpr);
  }

  updateConfig(config: PlaneConfig) {
    this.config = config;
  }

  private tick = (timestamp: number) => {
    this.animationId = requestAnimationFrame(this.tick);

    const w = this.canvas.offsetWidth;
    const h = this.canvas.offsetHeight;

    // Spawn new planes
    if (
      this.planes.length < this.config.maxPlanes &&
      timestamp - this.lastSpawn > this.config.spawnInterval
    ) {
      this.planes.push(this.createPlane(w, h));
      this.lastSpawn = timestamp;
    }

    // Clear
    this.ctx.clearRect(0, 0, w, h);

    // Update and draw
    this.planes = this.planes.filter((plane) => {
      plane.x += plane.vx;
      plane.y += plane.vy;
      plane.age++;

      // Fade in/out
      const fadeFrames = 60;
      if (plane.age < fadeFrames) {
        plane.opacity = (plane.age / fadeFrames) * plane.maxOpacity;
      } else if (plane.age > plane.lifetime - fadeFrames) {
        plane.opacity =
          ((plane.lifetime - plane.age) / fadeFrames) * plane.maxOpacity;
      } else {
        plane.opacity = plane.maxOpacity;
      }

      // Remove if off-screen or expired
      if (
        plane.age > plane.lifetime ||
        plane.x < -50 ||
        plane.x > w + 50 ||
        plane.y < -50 ||
        plane.y > h + 50
      ) {
        return false;
      }

      this.drawPlane(plane);
      return true;
    });
  };

  private createPlane(w: number, h: number): Plane {
    const edge = Math.floor(Math.random() * 4);
    let x: number, y: number;

    switch (edge) {
      case 0: x = -20; y = Math.random() * h; break;      // left
      case 1: x = w + 20; y = Math.random() * h; break;   // right
      case 2: x = Math.random() * w; y = -20; break;      // top
      default: x = Math.random() * w; y = h + 20; break;  // bottom
    }

    // Aim towards center area with some randomness
    const targetX = w * (0.3 + Math.random() * 0.4);
    const targetY = h * (0.3 + Math.random() * 0.4);
    const dx = targetX - x;
    const dy = targetY - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed =
      this.config.minSpeed +
      Math.random() * (this.config.maxSpeed - this.config.minSpeed);

    return {
      x,
      y,
      vx: (dx / dist) * speed,
      vy: (dy / dist) * speed,
      size: this.config.planeSize,
      angle: Math.atan2(dy, dx),
      opacity: 0,
      maxOpacity: this.config.opacity,
      age: 0,
      lifetime: Math.floor(dist / speed) + 120,
    };
  }

  /** Draw a simple paper plane shape */
  private drawPlane(plane: Plane) {
    const { x, y, size, angle, opacity } = plane;
    const ctx = this.ctx;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = Math.max(0, opacity);
    ctx.strokeStyle = this.config.color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Nose
    ctx.moveTo(size, 0);
    // Top wing
    ctx.lineTo(-size * 0.6, -size * 0.5);
    // Body notch
    ctx.lineTo(-size * 0.2, 0);
    // Bottom wing
    ctx.lineTo(-size * 0.6, size * 0.5);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
