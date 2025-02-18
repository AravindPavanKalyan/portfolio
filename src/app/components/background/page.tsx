'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Background = () => {
  // const containerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Function to update background height dynamically
    const updateHeight = () => {
      container.style.height = `${document.documentElement.scrollHeight}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);

    // Color palette
    const colors = [
      "rgba(0, 128, 128, 0.7)",  // Teal
      "rgba(32, 178, 170, 0.7)", // Light Sea Green
      "rgba(72, 209, 204, 0.7)", // Medium Turquoise
      "rgba(0, 191, 255, 0.7)",  // Deep Sky Blue
      "rgba(70, 130, 180, 0.7)", // Steel Blue
    ];

    const elements: HTMLDivElement[] = [];

    // Function to create animated lines
    const createLines = () => {
      for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.className = 'animated-line';
        container.appendChild(line);
        elements.push(line);

        gsap.set(line, {
          width: gsap.utils.random(100, 300),
          height: gsap.utils.random(2, 6),
          x: gsap.utils.random(0, window.innerWidth * 0.9),
          y: gsap.utils.random(0, window.innerHeight),
          backgroundColor: gsap.utils.random(colors),
          position: 'absolute',
          opacity: 0.8,
          transformOrigin: 'left center',
          rotate: gsap.utils.random(-30, 30),
        });

        gsap.to(line, {
          x: window.innerWidth - 50,
          duration: gsap.utils.random(2, 5),
          ease: 'power2.out',
          repeat: -1,
        });
      }
    };

    // Function to create floating circles
    const createCircles = () => {
      for (let i = 0; i < 15; i++) {
        const circle = document.createElement('div');
        circle.className = 'floating-circle';
        container.appendChild(circle);
        elements.push(circle);

        gsap.set(circle, {
          width: gsap.utils.random(20, 80),
          height: gsap.utils.random(20, 80),
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          borderRadius: '50%',
          backgroundColor: gsap.utils.random(colors),
          position: 'absolute',
          opacity: 0.5,
        });

        gsap.to(circle, {
          y: `+=${gsap.utils.random(-50, 50)}`,
          x: `+=${gsap.utils.random(-50, 50)}`,
          duration: gsap.utils.random(3, 6),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    };

    // Function to create pulsating particles
    const createParticles = () => {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        container.appendChild(particle);
        elements.push(particle);

        gsap.set(particle, {
          width: gsap.utils.random(3, 8),
          height: gsap.utils.random(3, 8),
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          position: 'absolute',
          opacity: 0,
        });

        gsap.to(particle, {
          opacity: gsap.utils.random(0.3, 0.8),
          duration: gsap.utils.random(1, 3),
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    };

    // Run animations
    createLines();
    createCircles();
    createParticles();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full min-h-screen overflow-hidden z-[-1]"
      style={{
        background: '#090E1A',
      }}
    />
  );
};

export default Background;
