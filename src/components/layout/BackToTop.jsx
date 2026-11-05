import { useEffect, useRef } from 'react';

export default function BackToTop() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const btn = path.closest('.scroll-to-top');
    const length = path.getTotalLength();
    path.style.transition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = 'stroke-dashoffset 10ms linear';

    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      path.style.strokeDashoffset = h > 0 ? length - (y * length) / h : length;
      btn.classList.toggle('scroll-top-active', y > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-to-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
      <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
