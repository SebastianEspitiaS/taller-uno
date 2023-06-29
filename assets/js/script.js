function cambiarEstilos() {
    contenedor.classList.add("contenedor");
    loginForm.classList.add("loginForm", "Form");
    logos.classList.add("logos");
    Facebook.innerHTML = "";
    Twitter.innerHTML = "";
    logo.forEach((element) => {
        element.classList.add("logo");
    });
    Facebook.id = "Facebook";
    Twitter.id = "Twitter";
    Forgot.classList.add("Forgot");
    form.forEach((element) => {
        element.classList.add("typing");
    });
    loginButtom.classList.add("login-buttom");
    DescriptionForm.classList.add("Description","Form");
}

const contenedor = document.querySelector("#contenedor");
const loginForm = document.querySelector("#loginForm");
const logos = document.querySelector("#logos");
const logo = logos.querySelectorAll("a");
const Facebook = document.querySelector(".Facebook");
const Twitter = document.querySelector(".Twitter");
const form = document.querySelectorAll("#form input");
const Forgot = document.querySelector("#Forgot");
const loginButtom = document.querySelector("#login-buttom");
const DescriptionForm = document.querySelector("#Description");