const btnSwitch = document.querySelector("#switch");

// Comprobar si el usuario ya activó el modo oscuro antes
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
}

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
});
