(function () {
  const selectors = [
    ".hero-panel",
    ".home-news-banner",
    ".home-panel",
    ".publication-card",
    ".experience-card",
    ".education-card",
    ".archive__item"
  ];

  const items = document.querySelectorAll(selectors.join(","));
  if (!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  document.documentElement.classList.add("js-reveal-ready");

  const groupCounters = new WeakMap();

  items.forEach((item) => {
    item.classList.add("reveal-on-scroll");

    const parent = item.parentElement;
    const count = groupCounters.get(parent) || 0;
    item.style.setProperty("--reveal-delay", `${Math.min(count * 70, 280)}ms`);
    groupCounters.set(parent, count + 1);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  items.forEach((item) => observer.observe(item));
})();
