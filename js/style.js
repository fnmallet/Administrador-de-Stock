function setCssVars() {
    document.querySelector(':root').style.setProperty("--nav-height", document.querySelector("nav").clientHeight + 'px');
    document.querySelector(':root').style.setProperty("--footer-height", document.querySelector("footer").clientHeight + 'px');
}