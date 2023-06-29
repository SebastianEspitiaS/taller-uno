function cambiarEstilos() {
    contenedor.classList.add("contenedor");
    loginForm.classList.add("loginForm", "Form");
    logos.classList.add("logos");
    Facebook.id = "Facebook";
    Twitter.id = "Twitter";
    Forgot.classList.add("Forgot");
    loginButtom.classList.add("login-buttom");
    DescriptionForm.classList.add("Description","Form");

    logo.forEach((element) => {
        element.classList.add("logo");
    });

    typing.forEach((item) => {
        item.classList.add("typing");
    });

    Facebook.innerHTML = "";
    Twitter.innerHTML = "";
}

const contenedor = document.querySelector("#contenedor");
const loginForm = document.querySelector("#loginForm");
const logos = document.querySelector("#logos");
const logo = logos.querySelectorAll("a");
const Facebook = document.querySelector(".Facebook");
const Twitter = document.querySelector(".Twitter");
const typing = document.querySelectorAll("#typing");
const Forgot = document.querySelector("#Forgot");
const loginButtom = document.querySelector("#login-buttom");
const DescriptionForm = document.querySelector("#Description");