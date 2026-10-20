import type useEmblaCarousel from "embla-carousel-react";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ProjectCarouselControlsProps = {
  carousel: ReturnType<typeof useEmblaCarousel>[1];
};

export const ProjectCarouselControls = ({ carousel }: ProjectCarouselControlsProps) => {
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carousel) return;
    const updateControls = () => {
      setCanScrollPrevious(carousel.canScrollPrev());
      setCanScrollNext(carousel.canScrollNext());
    };
    updateControls();
    carousel.on("select", updateControls).on("reInit", updateControls);
    return () => {
      carousel.off("select", updateControls).off("reInit", updateControls);
    };
  }, [carousel]);

  return (
    <>
      {(["previous", "next"] as const).map((direction) => {
        const previous = direction === "previous";
        const Icon = previous ? ArrowLeft : ArrowRight;
        return (
          <button
            key={direction}
            type="button"
            aria-label={previous ? "Previous projects" : "Next projects"}
            disabled={previous ? !canScrollPrevious : !canScrollNext}
            onClick={() => (previous ? carousel?.scrollPrev(true) : carousel?.scrollNext(true))}
            className={clsx(
              "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black text-muted shadow-lg transition-colors hover:border-[#8cebc5] hover:text-white disabled:opacity-40",
              previous ? "-left-4" : "-right-4"
            )}
          >
            <Icon size={18} aria-hidden />
          </button>
        );
      })}
    </>
  );
};
