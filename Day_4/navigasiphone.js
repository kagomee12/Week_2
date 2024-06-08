let a = true;

function buttonham (event) {
    event.preventDefault();

    let tombol = document.getElementById("menuphonebar");

    if (a == true) {
        tombol.innerHTML = ` <ul class="listphone" style="list-style: none ; padding: 0; text-align: center;">
        <li><a href="index.html" class="itemumenuphone">Home</a></li>
        <li><a href="myproject.html" class="itemumenuphone">My Project</a></li>
        <li><a href="contact_me.html" class="itemumenuphone">Contact Me</a></li>
        <li><a href="testimoniak.html" class="itemumenuphone">Testimonial</a></li>
        </ul>`;
        a = false;
    } else {
        tombol.innerHTML = ``;
        a = true;
    }
}