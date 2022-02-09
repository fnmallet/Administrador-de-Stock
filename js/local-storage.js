function loadLocalStorageTheme() {
    const theme = localStorage.getItem("theme");

    if(theme) {
        return JSON.parse(theme);
    } else {
        localStorage.setItem("theme", JSON.stringify(themes.find((theme) => theme.name === "defaultTheme")));
        return themes.find((theme) =>  {theme.name === "defaultTheme"});
    }
}

function updateLocalStorageTheme(newTheme) {
    localStorage.setItem("theme", JSON.stringify(newTheme));
}