import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing the middle of the viewport,
 * so the navbar can highlight where the reader is.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
