(function () {
  const hero = document.querySelector(".hero__typing");
  if (!hero) return;

  const textNode = hero.querySelector(".hero__typing-text");
  if (!textNode) return;

  let lines = [];
  try {
    lines = JSON.parse(hero.dataset.typingLines || "[]");
  } catch (error) {
    lines = [];
  }

  if (!Array.isArray(lines) || lines.length === 0) return;

  const typingSpeed = Number(hero.dataset.typingSpeed || 85);
  const deletingSpeed = Number(hero.dataset.typingDeleteSpeed || 40);
  const pause = Number(hero.dataset.typingPause || 1400);

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = lines[lineIndex] || "";

    if (!deleting) {
      charIndex += 1;
      textNode.textContent = current.slice(0, charIndex);

      if (charIndex >= current.length) {
        deleting = true;
        window.setTimeout(tick, pause);
        return;
      }

      window.setTimeout(tick, typingSpeed);
      return;
    }

    charIndex -= 1;
    textNode.textContent = current.slice(0, Math.max(charIndex, 0));

    if (charIndex <= 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      window.setTimeout(tick, typingSpeed);
      return;
    }

    window.setTimeout(tick, deletingSpeed);
  };

  textNode.textContent = "";
  window.setTimeout(tick, 500);
})();
