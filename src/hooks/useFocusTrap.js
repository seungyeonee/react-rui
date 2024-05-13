import { useEffect, useRef } from "react";

function useFocusTrap() {
  const ref = useRef(null);

  useEffect(() => {
    const focusableElements = ref.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    function trapFocus(event) {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            event.preventDefault();
          }
        }
      }
    }

    ref.current.addEventListener("keydown", trapFocus);
    return () => ref?.current?.removeEventListener("keydown", trapFocus);
  }, []);

  return ref;
}

export default useFocusTrap;
 