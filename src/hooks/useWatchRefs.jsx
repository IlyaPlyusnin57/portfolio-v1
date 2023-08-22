import { useRef, useCallback } from "react";

export function useWatchRefs() {
  const observer = useRef();

  observer.current = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.current.unobserve(entry.target);
      }
    });
  });

  const ref = useCallback((element) => {
    if (element) {
      observer.current.observe(element);
    }
  }, []);

  return ref;
}
