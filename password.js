const d = document;
const ey = d.querySelector('.eye');


const eyeslash = d.querySelector('.ey-s');
const eye = d.querySelector('.ey');
const inp = d.querySelector('.inp');

ey.addEventListener('click', () => {
    if (inp.type == "text") {
        inp.type = "password";
        eye.style.display = "block";
        eyeslash.style.display = "none";
    }
    else if (inp.type == "password") {
        inp.type = "text";
        eye.style.display = "none";
        eyeslash.style.display = "block";
    }
})
