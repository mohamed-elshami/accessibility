import { useEffect } from "react";

type UseSlideNavigationOptions = {
  onPrevious: () => void;
  onNext: () => void;
};

export function useSlideNavigation({
  onPrevious,
  onNext,
}: UseSlideNavigationOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    };
    const handleMouseClick = (event: MouseEvent) => {
      const { clientX } = event;
      const w = window.innerWidth;
      if (clientX < w * 0.1) {
        onPrevious();
      } else if (clientX > w * 0.9) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleMouseClick);
    };
  }, [onNext, onPrevious]);
}
