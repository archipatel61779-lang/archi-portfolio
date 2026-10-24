const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const progress = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.querySelector(".progress").style.width = progress + "%";
});
