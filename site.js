const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const copyButton = document.querySelector(".copy-mint");
const mint = document.querySelector("#mint");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(mint.textContent.trim());
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Copy";
  }
  window.setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1600);
});
