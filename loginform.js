const formBox1 = document.getElementById("formBox1");
const signUpBtn = document.getElementById("formBox1");
const formBox2 = document.getElementById("formBox2");
const loginBtn = document.getElementById("loginBtn");

signUpBtn.onclick = () => {
    formBox1.style.display = "none";
    formBox2.style.display = "block"
}

loginBtn.onclick = () => {
    formBox2.style.display = "none";
    formBox1.style.display = "block";
}