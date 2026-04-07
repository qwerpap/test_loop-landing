const menuBtn = document.getElementById("menuBtn");
const topNav = document.getElementById("topNav");

if (menuBtn && topNav) {
  menuBtn.addEventListener("click", () => {
    topNav.classList.toggle("is-open");
  });

  topNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      topNav.classList.remove("is-open");
    });
  });
}

const revealNodes = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealNodes.length > 0) {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealNodes.forEach((node) => io.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
