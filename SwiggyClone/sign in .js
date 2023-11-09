const closeLoginFormButton = document.getElementById("closeLoginForm");
const closeSignUpFormButton = document.getElementById("closeSignUpForm");

const loginForm = document.getElementById("loginForm");
const loginContainer = document.getElementById("loginContainer");
const SignUpContainer = document.getElementById("SignUpContainer");

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  // loginForm.classList.remove("hidden");
  loginContainer.classList.remove("hidden");
  loginForm.style.right = "0";
});

closeLoginFormButton.addEventListener("click", () => {
  loginForm.style.right = "-350px";
  setTimeout(() => {
    // loginForm.classList.add("hidden");
    loginContainer.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
  }, 300);
});
closeSignUpFormButton.addEventListener("click", () => {
  loginForm.style.right = "-350px";
  setTimeout(() => {
    // loginForm.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
  }, 300);
});

// switchLink.addEventListener("click", (e) => {
//   e.preventDefault();
//   // loginForm.classList.remove("hidden");
//   SignUpContainer.classList.remove("hidden");
//   loginContainer.classList.add("hidden");
//   loginForm.style.right = "0";
// });
function toggleToSignUp() {
  SignUpContainer.classList.remove("hidden");
  loginContainer.classList.add("hidden");
  //   loginForm.style.right = "0";
}
function toggleToLogin() {
  SignUpContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
  //   loginForm.style.right = "0";
}
