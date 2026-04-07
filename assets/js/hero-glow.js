(function () {
  const heroPanel = document.querySelector(".hero-panel[data-hero-tilt]");
  const consolePanel = document.querySelector(".hero-lab--terminal[data-console-tilt]");
  if (!heroPanel) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frame = null;

  const setState = (px, py, opacity) => {
    const rect = heroPanel.getBoundingClientRect();
    const rx = ((py / rect.height) - 0.5) * -3.5;
    const ry = ((px / rect.width) - 0.5) * 4.5;
    const sx = ((px / rect.width) - 0.5) * 1.6;
    const sy = ((py / rect.height) - 0.5) * 1.6;

    heroPanel.style.setProperty("--hero-glow-x", `${px}px`);
    heroPanel.style.setProperty("--hero-glow-y", `${py}px`);
    heroPanel.style.setProperty("--hero-glow-opacity", opacity.toString());
    heroPanel.style.setProperty("--hero-rotate-x", `${rx.toFixed(2)}deg`);
    heroPanel.style.setProperty("--hero-rotate-y", `${ry.toFixed(2)}deg`);
    heroPanel.style.setProperty("--hero-shift-x", `${sx.toFixed(2)}px`);
    heroPanel.style.setProperty("--hero-shift-y", `${sy.toFixed(2)}px`);
  };

  const setConsoleState = (px, py, opacity) => {
    if (!consolePanel) return;
    const rect = consolePanel.getBoundingClientRect();
    const rx = ((py / rect.height) - 0.5) * -2.2;
    const ry = ((px / rect.width) - 0.5) * 2.8;
    const sx = ((px / rect.width) - 0.5) * 1.2;
    const sy = ((py / rect.height) - 0.5) * 1.2;

    consolePanel.style.setProperty("--console-glow-x", `${px}px`);
    consolePanel.style.setProperty("--console-glow-y", `${py}px`);
    consolePanel.style.setProperty("--console-glow-opacity", opacity.toString());
    consolePanel.style.setProperty("--console-rotate-x", `${rx.toFixed(2)}deg`);
    consolePanel.style.setProperty("--console-rotate-y", `${ry.toFixed(2)}deg`);
    consolePanel.style.setProperty("--console-shift-x", `${sx.toFixed(2)}px`);
    consolePanel.style.setProperty("--console-shift-y", `${sy.toFixed(2)}px`);
  };

  heroPanel.addEventListener("pointerenter", (event) => {
    const rect = heroPanel.getBoundingClientRect();
    setState(event.clientX - rect.left, event.clientY - rect.top, 1);
  });

  heroPanel.addEventListener("pointermove", (event) => {
    const rect = heroPanel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (frame) {
      window.cancelAnimationFrame(frame);
    }

    frame = window.requestAnimationFrame(() => {
      setState(x, y, 1);
    });
  });

  heroPanel.addEventListener("pointerleave", () => {
    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = null;
    }
    heroPanel.style.setProperty("--hero-glow-opacity", "0");
    heroPanel.style.setProperty("--hero-rotate-x", "0deg");
    heroPanel.style.setProperty("--hero-rotate-y", "0deg");
    heroPanel.style.setProperty("--hero-shift-x", "0px");
    heroPanel.style.setProperty("--hero-shift-y", "0px");
  });

  heroPanel.addEventListener("pointercancel", () => {
    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = null;
    }
    heroPanel.style.setProperty("--hero-glow-opacity", "0");
    heroPanel.style.setProperty("--hero-rotate-x", "0deg");
    heroPanel.style.setProperty("--hero-rotate-y", "0deg");
    heroPanel.style.setProperty("--hero-shift-x", "0px");
    heroPanel.style.setProperty("--hero-shift-y", "0px");
  });

  if (!consolePanel) return;

  consolePanel.addEventListener("pointerenter", (event) => {
    const rect = consolePanel.getBoundingClientRect();
    setConsoleState(event.clientX - rect.left, event.clientY - rect.top, 1);
  });

  consolePanel.addEventListener("pointermove", (event) => {
    const rect = consolePanel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (frame) {
      window.cancelAnimationFrame(frame);
    }

    frame = window.requestAnimationFrame(() => {
      setConsoleState(x, y, 1);
    });
  });

  consolePanel.addEventListener("pointerleave", () => {
    if (frame) {
      window.cancelAnimationFrame(frame);
      frame = null;
    }
    consolePanel.style.setProperty("--console-glow-opacity", "0");
    consolePanel.style.setProperty("--console-rotate-x", "0deg");
    consolePanel.style.setProperty("--console-rotate-y", "0deg");
    consolePanel.style.setProperty("--console-shift-x", "0px");
    consolePanel.style.setProperty("--console-shift-y", "0px");
  });
})();
