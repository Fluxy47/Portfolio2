import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useMouseMovementAnimation = (targetRef) => {
  useEffect(() => {
    const element = targetRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = element.getBoundingClientRect();

      const deltaX = clientX - (left + width / 2);
      const deltaY = clientY - (top + height / 2);

      gsap.to(element, {
        x: deltaX / 2,
        y: deltaY / 2,
        ease: 'power2.out',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        ease: 'power2.out',
        duration: 0.3,
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [targetRef]);

  return targetRef;
};

export default useMouseMovementAnimation;
