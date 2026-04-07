(function () {
  const panel = document.querySelector(".home-news-banner");
  if (!panel) return;

  const setGlow = (x, y, opacity) => {
    panel.style.setProperty("--news-panel-glow-x", `${x}px`);
    panel.style.setProperty("--news-panel-glow-y", `${y}px`);
    panel.style.setProperty("--news-panel-glow-opacity", opacity.toString());
  };

  panel.addEventListener("pointerenter", (event) => {
    const rect = panel.getBoundingClientRect();
    setGlow(event.clientX - rect.left, event.clientY - rect.top, 1);
  });

  panel.addEventListener("pointermove", (event) => {
    const rect = panel.getBoundingClientRect();
    setGlow(event.clientX - rect.left, event.clientY - rect.top, 1);
  });

  panel.addEventListener("pointerleave", () => {
    panel.style.setProperty("--news-panel-glow-opacity", "0");
  });
})();
