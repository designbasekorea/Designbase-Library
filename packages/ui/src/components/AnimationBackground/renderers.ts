/**
 * Canvas 렌더러: particles, stars, wave, pulse
 */

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 0, g: 0, b: 0 };
};

export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export interface Star {
    x: number;
    y: number;
    size: number;
    blinkSpeed: number;
    color: string;
}

export const drawParticles = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    particlesRef: { current: Particle[] },
    options: {
        count: number;
        colors: string[];
        size: number;
        mouse: { x: number; y: number };
        clickable: boolean;
    }
) => {
    if (particlesRef.current.length !== options.count) {
        particlesRef.current = Array.from({ length: options.count }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * options.size + 1,
            color: options.colors[Math.floor(Math.random() * options.colors.length)],
        }));
    }

    const particles = particlesRef.current;
    const interactionRadius = 150;

    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (options.clickable) {
            const dx = options.mouse.x - p.x;
            const dy = options.mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < interactionRadius) {
                const force = (interactionRadius - distance) / interactionRadius;
                p.vx += (dx / distance) * force * 0.5;
                p.vy += (dy / distance) * force * 0.5;
            }
            const maxSpeed = 3;
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed > maxSpeed) {
                p.vx = (p.vx / speed) * maxSpeed;
                p.vy = (p.vy / speed) * maxSpeed;
            }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = 1 - dist / 100;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    });
};

export const drawStars = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    starsRef: { current: Star[] },
    options: { count: number; colors: string[]; size: number; time: number }
) => {
    if (starsRef.current.length !== options.count) {
        starsRef.current = Array.from({ length: options.count }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * options.size,
            blinkSpeed: Math.random() * 0.05 + 0.01,
            color: options.colors[Math.floor(Math.random() * options.colors.length)],
        }));
    }

    starsRef.current.forEach(star => {
        star.y -= 0.05;
        if (star.y < 0) star.y = height;
        const opacity = 0.5 + Math.sin(options.time * star.blinkSpeed) * 0.5;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    });
};

export const drawWaves = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    options: { colors: string[]; offset: { current: number }; speedFactor: number }
) => {
    const { colors, offset, speedFactor } = options;
    offset.current += 0.02 * speedFactor;

    colors.forEach((color, i) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        const freq = 0.003 + i * 0.001;
        const amp = 30 + i * 20;
        const phase = offset.current + i * 2;
        for (let x = 0; x <= width; x += 10) {
            const y =
                height / 2 +
                Math.sin(x * freq + phase) * amp +
                Math.sin(x * 0.001 + phase * 0.5) * 50;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    });
};

export const drawPulse = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    options: {
        colors: string[];
        time: number;
        intensity: 'subtle' | 'medium' | 'vivid';
    }
) => {
    const { colors, time, intensity } = options;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.max(width, height) * 0.8;
    const intensityMap = { subtle: 0.5, medium: 1, vivid: 1.5 };
    const factor = intensityMap[intensity];

    colors.forEach((color, i) => {
        const t = time * 0.02 * factor + (i * (Math.PI * 2)) / colors.length;
        const radius = (Math.sin(t) * 0.2 + 0.5) * maxRadius;
        const alpha = (Math.sin(t + Math.PI) * 0.2 + 0.3) * factor;
        const gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            radius
        );
        const rgb = hexToRgb(color);
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    });
};
