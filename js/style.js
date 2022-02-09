function setCssVars() {
    $(':root').css("--nav-height", $("nav").css("height"));
    $(':root').css("--footer-height", $("footer").css("height"));
}

function loadTheme(theme) {
    $(":root").css('--primary-color', theme.color);
}