(function () {
  const masthead = document.querySelector(".masthead");
  if (!masthead) return;

  const updateState = () => {
    if (window.scrollY > 24) {
      masthead.classList.add("is-scrolled");
    } else {
      masthead.classList.remove("is-scrolled");
    }
  };

  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
})();
