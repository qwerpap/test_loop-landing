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

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-item__q");
  const body = item.querySelector(".faq-item__a");
  if (!btn || !body) return;

  btn.addEventListener("click", () => {
    const opened = item.classList.contains("is-open");

    faqItems.forEach((other) => {
      other.classList.remove("is-open");
      const otherBody = other.querySelector(".faq-item__a");
      if (otherBody) otherBody.style.maxHeight = "0px";
    });

    if (opened) return;
    item.classList.add("is-open");
    body.style.maxHeight = `${body.scrollHeight + 4}px`;
  });
});
