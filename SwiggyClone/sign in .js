const closeLoginFormButton = document.getElementById("closeLoginForm");
const closeSignUpFormButton = document.getElementById("closeSignUpForm");

const loginForm = document.querySelector(".loginForm");
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

// function loginSubmit() {
//   // Get the form element
//   var loginForm = document.querySelector(".loginForm");

//   // Add an event listener to the form for the submit event
//   loginForm.addEventListener("submit", function (event) {
//     // Prevent the default form submission
//     event.preventDefault();

//     // Get the values from the username and password inputs
//     var usernameValue = document.getElementById("username").value;
//     var passwordValue = document.getElementById("password").value;

//     // You can now use these variables as needed
//     console.log("Username:", usernameValue);
//     console.log("Password:", passwordValue);

//     // Add your further logic here, such as sending the data to a server or performing other actions.
//   });

//   fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username: "kminchelle",
//       password: "0lelplR",
//       // expiresInMins: 60, // optional
//     }),
//   })
//     .then((res) => res.json())
//     .then(console.log);
// }
