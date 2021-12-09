const header = document.querySelector(".header");
const body = document.querySelector("body");
const toggleBtn = document.querySelector(".btn-mobile-nav");
const btnOutline = document.querySelector(".btn--outline");
const btnFull = document.querySelector(".btn--outline");

// MOBILE NAVIGATION
toggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// const header = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav-list");
// console.log(mainNav);

btnOutline.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");

  document.querySelector(id).scrollIntoView({
    behaviour: "smooth",
  });
});
btnFull.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");

  document.querySelector(id).scrollIntoView({
    behaviour: "smooth",
  });
});

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);

  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    console.log(id);

    document.querySelector(id).scrollIntoView({
      behaviour: "smooth",
    });

    header.classList.remove("nav-open");
  }
});

const hero = document.querySelector(".section-hero");

const initialCoord = header.getBoundingClientRect().height;

// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoord.top) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
};
const heroObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${initialCoord}px`,
});

heroObs.observe(hero);

// REVEAL ELEMENT ON SCROLL
/*
const allSection = document.querySelectorAll(".section");
// console.log(allSection);

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

*/

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
