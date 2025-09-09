import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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
        twinkleDirection: Math.random() > 0.5 ? 1 : -1
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
        intensity: Math.random() * 0.1 ,
        pulseSpeed: Math.random() * 0.01 + 0.005,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
        driftSpeedX: (Math.random() - 0.5) * 0.2,
        driftSpeedY: (Math.random() - 0.5) * 0.2,
        color: {
          r: Math.random() * 100 + 150, // Soft blues and purples
          g: Math.random() * 100 + 150,
          b: Math.random() * 55 + 200,
        }
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw spotlights first (behind stars)
      spotlights.forEach(spotlight => {
        // Update spotlight position (gentle drift)
        spotlight.x += spotlight.driftSpeedX;
        spotlight.y += spotlight.driftSpeedY;

        // Bounce off edges
        if (spotlight.x <= 0 || spotlight.x >= canvas.width) {
          spotlight.driftSpeedX *= -1;
        }
        if (spotlight.y <= 0 || spotlight.y >= canvas.height) {
          spotlight.driftSpeedY *= -1;
        }

        // Keep within bounds
        spotlight.x = Math.max(0, Math.min(canvas.width, spotlight.x));
        spotlight.y = Math.max(0, Math.min(canvas.height, spotlight.y));

        // Create radial gradient for spotlight (no pulsing, steady opacity)
        const gradient = ctx.createRadialGradient(
          spotlight.x, spotlight.y, 0,
          spotlight.x, spotlight.y, spotlight.radius
        );
        
        gradient.addColorStop(0, `rgba(${spotlight.color.r}, ${spotlight.color.g}, ${spotlight.color.b}, ${spotlight.intensity})`);
        gradient.addColorStop(0.4, `rgba(${spotlight.color.r}, ${spotlight.color.g}, ${spotlight.color.b}, ${spotlight.intensity * 0.6})`);
        gradient.addColorStop(0.7, `rgba(${spotlight.color.r}, ${spotlight.color.g}, ${spotlight.color.b}, ${spotlight.intensity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        // Draw spotlight
        ctx.beginPath();
        ctx.arc(spotlight.x, spotlight.y, spotlight.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw stars on top of spotlights
      stars.forEach(star => {
        // Update opacity for twinkling effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.twinkleDirection *= -1;
        }
        
        star.opacity = Math.max(0, Math.min(1, star.opacity));

        // Check if star is within any spotlight for enhanced brightness
        let brightnessFactor = 1;
        spotlights.forEach(spotlight => {
          const distance = Math.sqrt(
            Math.pow(star.x - spotlight.x, 2) + Math.pow(star.y - spotlight.y, 2)
          );
          if (distance < spotlight.radius) {
            const proximityFactor = 1 - (distance / spotlight.radius);
            brightnessFactor += proximityFactor * 0.8;
          }
        });

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8 * brightnessFactor})`;
        ctx.fill();

        // Add glow effect for brighter stars
        if (brightnessFactor > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.2 * (brightnessFactor - 1)})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default StarBackground;