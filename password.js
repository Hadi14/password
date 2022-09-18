const d = document;
const eye = d.querySelector('.fa-eye');
const eyeslash = d.querySelector('.fa-eye-slash');
let e = true;
eye.addEventListener('click', () => {
    eye.classList.toggle("hide");
    e = false;
    // eyeslash.classList.add("show");
    // alert("df");
})
eyeslash.addEventListener('click', () => {
    eyeslash.classList.toggle("hide");
    // eye.classList.add("show");
    // alert("df");
})