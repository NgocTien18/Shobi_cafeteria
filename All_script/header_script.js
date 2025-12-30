// Open mobile menu
const openBtn = document.querySelector(".mobile_nav_icon");
const mobileNavWrap = document.querySelector(".mobile_nav-wrap");
const closeBtn = document.querySelector("#closeBtn");
const backdrop = document.querySelector(".mobile_nav-backdrop");
openBtn.onclick = function () {
  openMenu();
};
backdrop.onclick = function (e) {
  if (e.target === backdrop) {
    closeMenu();
  }
};

closeBtn.onclick = () => {
  closeMenu();
};
function openMenu() {
  mobileNavWrap.classList.add("show");
  document.body.classList.add("no-scroll");
}
function closeMenu() {
  mobileNavWrap.classList.remove("show");
  document.body.classList.remove("no-scroll");
}
