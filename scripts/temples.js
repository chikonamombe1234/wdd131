const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-navigation");
const menuIcon = document.querySelector(".menu-icon");
const filterLinks = document.querySelectorAll(".primary-navigation a");
const templeFigures = document.querySelectorAll(".temple-grid figure");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu"
  );
  menuIcon.textContent = isOpen ? "☰" : "×";
  navigation.classList.toggle("is-open", !isOpen);
});

filterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedFilter = link.dataset.filter;

    filterLinks.forEach((item) => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");

    templeFigures.forEach((figure) => {
      const categories = figure.dataset.categories.split(" ");
      const shouldShow =
        selectedFilter === "all" || categories.includes(selectedFilter);

      figure.hidden = !shouldShow;
    });

    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuIcon.textContent = "☰";
  });
});

document.querySelector("#current-year").textContent =
  new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
document.querySelector("#last-modified").textContent =
  Number.isNaN(modifiedDate.getTime())
    ? "Unavailable"
    : new Intl.DateTimeFormat("en", {
        dateStyle: "long",
        timeStyle: "short"
      }).format(modifiedDate);
