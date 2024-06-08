let a = true

function buttonham (event) {
    event.preventDefault();

    let tombol = document.getElementById("menuphonebar");

    if (a == true) {
        tombol.style.display = "flex";
        a = false;
    } else {
        tombol.style.display = "none";
        a = true;
    }
}