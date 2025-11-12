// Detect when a section is visible and add animation class
export const initScrollAnimations = () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 } // 15% of section visible triggers animation
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
};
