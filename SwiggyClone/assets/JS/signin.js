const closemodalButton = document.getElementById("closemodal");
const closeSignUpFormButton = document.getElementById("closeSignUpForm");

const modal = document.querySelector(".modal");
const loginContainer = document.getElementById("loginContainer");
const SignUpContainer = document.getElementById("SignUpContainer");

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  // modal.classList.remove("hidden");
  loginContainer.classList.remove("hidden");
  modal.style.right = "0";
});

closemodalButton.addEventListener("click", () => {
  modal.style.right = "-350px";
  setTimeout(() => {
    // modal.classList.add("hidden");
    loginContainer.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
  }, 300);
});
closeSignUpFormButton.addEventListener("click", () => {
  modal.style.right = "-350px";
  setTimeout(() => {
    // modal.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
  }, 300);
});

// switchLink.addEventListener("click", (e) => {
//   e.preventDefault();
//   // modal.classList.remove("hidden");
//   SignUpContainer.classList.remove("hidden");
//   loginContainer.classList.add("hidden");
//   modal.style.right = "0";
// });
function toggleToSignUp() {
  SignUpContainer.classList.remove("hidden");
  loginContainer.classList.add("hidden");
  //   modal.style.right = "0";
}
function toggleToLogin() {
  SignUpContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
  //   modal.style.right = "0";
}

// function loginSubmit() {
// Get the form element
var loginForm = document.querySelector(".loginForm");

// Add an event listener to the form for the submit event
loginForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the values from the username and password inputs
  var usernameValue = document.getElementById("username").value;
  var passwordValue = document.getElementById("password").value;

  // You can now use these variables as needed
  console.log("Username:", usernameValue);
  console.log("Password:", passwordValue);

  // posting and authenticating username password
  // valid credentials- username: 'kminchelle',password: '0lelplR',
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usernameValue,
      password: passwordValue,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // Store the result in the variable
      jsonData = data;
      console.log(jsonData);

      document.cookie = `id=${jsonData.id};firstName=${jsonData.firstName};`;
      console.log(`id=${jsonData.id}`);
      console.log(`firstName=${jsonData.firstName}`);
    });
});

// }
