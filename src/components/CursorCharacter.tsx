import React, { useEffect, useRef } from 'react';

const CursorCharacter = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices (mobile/tablet)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const render = () => {
      // Lerp effect for smooth follow
      const ease = 0.15;
      posX += (mouseX - posX) * ease;
      posY += (mouseY - posY) * ease;

      if (blobRef.current) {
        // Offset by half the width/height (150px) to center the blob on the cursor
        blobRef.current.style.transform = `translate(${posX - 150}px, ${posY - 150}px)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 pointer-events-none hidden md:block z-0"
      style={{ 
        width: '300px', 
        height: '300px',
        background: 'linear-gradient(to right, rgba(167, 139, 250, 0.3), rgba(244, 114, 182, 0.3))',
        borderRadius: '50%',
        filter: 'blur(80px)',
        willChange: 'transform',
      }}
    />
  );
};

export default CursorCharacter;
