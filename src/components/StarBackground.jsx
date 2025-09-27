import React, { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars = [];
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // Create spotlights
    const spotlights = [];
    const numSpotlights = 3;

    for (let i = 0; i < numSpotlights; i++) {
      spotlights.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 150 + 100,
        intensity: Math.random() * 0.1,
        pulseSpeed: Math.random() * 0.01 + 0.005,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
        driftSpeedX: (Math.random() - 0.5) * 0.2,
        driftSpeedY: (Math.random() - 0.5) * 0.2,
        color: {
          r: Math.random() * 100 + 150, // Soft blues and purples
          g: Math.random() * 100 + 150,
          b: Math.random() * 55 + 200,
        },
      });
    }

    // Create shooting stars
    const shootingStars = [];

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height), // only from upper half
        length: Math.random() * 80 + 20,
        speed: 1+3,
        angle: (Math.PI / 4) * (Math.random() > 0.5 ? 1 : -1), // diagonal
        opacity: 0.8,
        fadeSpeed: 0.005,
      });

      // spawn again after random delay
      setTimeout(spawnShootingStar, Math.random() * 4000 + 6000);
    };

    // start shooting stars
    spawnShootingStar();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw spotlights first (behind stars)
      spotlights.forEach((spotlight) => {
        spotlight.x += spotlight.driftSpeedX;
        spotlight.y += spotlight.driftSpeedY;

        if (spotlight.x <= 0 || spotlight.x >= canvas.width) {
          spotlight.driftSpeedX *= -1;
        }
        if (spotlight.y <= 0 || spotlight.y >= canvas.height) {
          spotlight.driftSpeedY *= -1;
        }

        spotlight.x = Math.max(0, Math.min(canvas.width, spotlight.x));
        spotlight.y = Math.max(0, Math.min(canvas.height, spotlight.y));

        const gradient = ctx.createRadialGradient(
          spotlight.x,
          spotlight.y,
          0,
          spotlight.x,
          spotlight.y,
          spotlight.radius
        );

        gradient.addColorStop(
          0,
          `rgba(${spotlight.color.r}, ${spotlight.color.g}, ${spotlight.color.b}, ${spotlight.intensity})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${spotlight.color.r}, ${spotlight.color.g}, ${spotlight.color.b}, ${
            spotlight.intensity * 0.6
          })`
        );
        gradient.addColorStop(
          0.7,
          `rgba(${spotlight.color.r}, ${spotlight.color.g}, ${spotlight.color.b}, ${
            spotlight.intensity * 0.3
          })`
        );
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(spotlight.x, spotlight.y, spotlight.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed * star.twinkleDirection;

        if (star.opacity <= 0 || star.opacity >= 1) {
          star.twinkleDirection *= -1;
        }

        star.opacity = Math.max(0, Math.min(1, star.opacity));

        let brightnessFactor = 1;
        spotlights.forEach((spotlight) => {
          const distance = Math.sqrt(
            Math.pow(star.x - spotlight.x, 2) +
              Math.pow(star.y - spotlight.y, 2)
          );
          if (distance < spotlight.radius) {
            const proximityFactor = 1 - distance / spotlight.radius;
            brightnessFactor += proximityFactor * 0.8;
          }
        });

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${
          star.opacity * 0.8 * brightnessFactor
        })`;
        ctx.fill();

        if (brightnessFactor > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${
            star.opacity * 0.2 * (brightnessFactor - 1)
          })`;
          ctx.fill();
        }
      });

      // Draw shooting stars
      shootingStars.forEach((s, i) => {
        ctx.save();
        ctx.globalAlpha = s.opacity;

        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        ctx.stroke();

        ctx.restore();

        // Update position
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= s.fadeSpeed;

        // remove when invisible
        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    />
  );
};

export default StarBackground;
