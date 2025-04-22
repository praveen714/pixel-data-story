
import { useState, useEffect } from "react";

export const useScrollSpy = (targetIds: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      const sections = targetIds.map((id) => {
        const element = document.getElementById(id);
        return {
          id,
          offsetTop: element?.offsetTop || 0,
          offsetHeight: element?.offsetHeight || 0,
        };
      });
      
      const visibleSection = sections.find((section) => {
        return (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        );
      });
      
      setActiveId(visibleSection?.id || null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetIds, offset]);

  return activeId;
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; // Navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
