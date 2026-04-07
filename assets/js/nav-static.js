document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#site-nav.greedy-nav--static");
  if (!nav) return;

  const masthead = document.querySelector(".masthead");
  const button = nav.querySelector("button");
  const visibleLinks = nav.querySelector(".visible-links");
  const hiddenLinks = nav.querySelector(".hidden-links");
  const themeToggle = nav.querySelector("#theme-toggle");

  const syncOffsets = () => {
    if (!masthead) return;

    const mastheadHeight = masthead.getBoundingClientRect().height;
    document.body.style.paddingTop = `${mastheadHeight}px`;
  };

  const restoreNavItems = () => {
    if (!visibleLinks || !hiddenLinks) return;

    const hiddenItems = Array.from(hiddenLinks.children);
    hiddenItems.forEach((item) => {
      if (themeToggle) {
        visibleLinks.insertBefore(item, themeToggle);
      } else {
        visibleLinks.appendChild(item);
      }
    });

    if (button) {
      button.classList.add("hidden");
      button.setAttribute("hidden", "hidden");
      button.setAttribute("aria-hidden", "true");
      button.style.display = "none";
    }

    hiddenLinks.classList.add("hidden");
    hiddenLinks.setAttribute("hidden", "hidden");
    hiddenLinks.style.display = "none";

    syncOffsets();
  };

  restoreNavItems();
  window.addEventListener("resize", restoreNavItems);
  window.addEventListener("load", restoreNavItems);

  const observer = new MutationObserver(() => {
    restoreNavItems();
  });

  observer.observe(nav, {
    childList: true,
    subtree: true
  });

  if ("ResizeObserver" in window && masthead) {
    const resizeObserver = new ResizeObserver(() => {
      syncOffsets();
    });
    resizeObserver.observe(masthead);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      restoreNavItems();
    });
  }
});
