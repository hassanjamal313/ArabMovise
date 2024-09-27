function NavList() {
  let Mainbox = document.querySelector(".Mainbox");

  document.getElementById("NavBars").onclick = () => {
    document
      .getElementById("NavBArDropList")
      .classList.toggle("NavBArDropList");
    document.getElementById("serachBox").classList.remove("searchDrop");
    document.querySelector("body").classList.toggle("ulDropScroll");
  };
  document.getElementById("searchIcon").onclick = () => {
    document.getElementById("data").append(Mainbox);
    document
      .getElementById("NavBArDropList")
      .classList.remove("NavBArDropList");
    document.getElementById("serachBox").classList.toggle("searchDrop");
  };
  document.getElementById("serachBoxX").onclick = () => {
    document.getElementById("serachBox").classList.remove("searchDrop");
    document.querySelector("body").append(Mainbox);
  };
}

NavList();

function ScrollMovise() {
  const LandingPAge = document.getElementById("LandingPAge");
  const right = document.getElementById("right");
  const left = document.getElementById("left");

  right.addEventListener("click", () => {
    const maxScroll = innerWidth;
    const LandingPAgeScroll = LandingPAge.scrollWidth - LandingPAge.clientWidth;
    LandingPAge.scrollTo({
      left: Math.min(LandingPAge.scrollLeft + maxScroll, LandingPAgeScroll),
      behavior: "smooth",
    });

    if (LandingPAge.scrollLeft >= LandingPAgeScroll) {
      LandingPAge.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  });

  left.addEventListener("click", () => {
    const ScrollBAck = window.innerWidth;
    LandingPAge.scrollTo({
      left: Math.max(LandingPAge.scrollLeft - ScrollBAck, 0),
      behavior: "smooth",
    });
    if (LandingPAge.scrollLeft == 0) {
      LandingPAge.scrollTo({
        left: Math.min(innerWidth + innerWidth),
        behavior: "smooth",
      });
    }
  });
}
ScrollMovise();

function search() {
  let MainBox = document.querySelector(".Mainbox");
  let MainBoxDiv = MainBox.querySelectorAll("*");
  let data = document.getElementById("data");
  let data2 = document.getElementById("data2");
  let inputSearch = document.getElementById("inputSearch");
  inputSearch.onkeyup = () => {
    if (inputSearch.value != "") {
      data.style.display = "none";
    } else {
      data.style.display = "block";
    }
  };
}
search();
