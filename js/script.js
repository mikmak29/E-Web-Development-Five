const nav_list = document.getElementById("nav_list");

const responsiveMenuBar = () => {

    nav_list.classList.toggle("responsiveMenuBar-dropdown_animate")
}  

const signUpButton = () => {
    window.location.href = './src/LogInPage.html';
}