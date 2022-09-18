const d = document;
const eye = d.querySelector('.fa-eye');
const eyeslash = d.querySelector('.fa-eye-slash');
const ey = d.querySelector('.eye');
const inp = d.querySelector('.inp');

ey.addEventListener('click', () => {
    if (inp.type == "text") {
        inp.type = "password";
        // eyeslash.classList.add("hide");
        // eye.classList.add("show");
    }
    else if (inp.type == "password") {
        inp.type = "text";
        // eyeslash.classList.add("hide");
        // eye.classList.add("show");
    }
})
