// section menu active
function onScroll(event) {
    const sections = document.querySelectorAll(".menu-scroll");
    const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    const scrollTopMinus = scrollPos + 73;
    if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
        document.querySelector(".menu-scroll").classList.remove("active");
        currLink.classList.add("active");
    } else {
        currLink.classList.remove("active");
    }
    }
}

window.document.addEventListener("scroll", onScroll);
// ==== About Tabs
const tabButtons = document.querySelectorAll(".tabButtons button");
const tabPanels = document.querySelectorAll(".tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function (node) {
    node.classList.remove(
        "hi",
        "ne",
        "rj",
    );
    });
    tabButtons[panelIndex].classList.add(
    "hi",
    "ck",
    "ne",
    "rj",
    );
    tabPanels.forEach(function (node) {
    node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "flex";
}
showPanel(0);