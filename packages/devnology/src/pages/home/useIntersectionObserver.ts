import { useRef } from 'react';

export default function useIntersectionObserver(callback) {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        console.log('### observer callback');
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        root: document.querySelector('#observer'),
        rootMargin: '0px',
        threshold: 0.1
      }
    )
  );

  const observe = (element) => {
    console.log('### observe', element);
    observer.current.observe(element);
  };

  const unobserve = (element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
