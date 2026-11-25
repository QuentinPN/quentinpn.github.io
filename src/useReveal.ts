import { useEffect } from 'react';

/**
 * Fades sections in as they scroll into view.
 * Only runs when main.tsx opted in with the `reveal` class (IntersectionObserver
 * available, no reduced-motion preference), and only hides elements that start
 * below the fold: what is on screen at load never waits for the observer.
 */
export function useReveal() {
  useEffect(() => {
    if (!document.documentElement.classList.contains('reveal')) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove('is-pending');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const fold = window.innerHeight;
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < fold) return;
      el.classList.add('is-pending');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
