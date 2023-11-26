let tempid = 31;

// DOM elements
const closemodalButton = document.getElementById("closemodal");
const closeSignUpFormButton = document.getElementById("closeSignUpForm");
const modal = document.querySelector(".modal");
const loginContainer = document.getElementById("loginContainer");
const SignUpContainer = document.getElementById("SignUpContainer");
const wrongCredentialsMessage = document.getElementById("wrongCredentials");
const usernameElement = document.getElementById("username");
const usernameSibilingElement = usernameElement.nextElementSibling;
const passwordElement = document.getElementById("password");
const passwordSibilingElement = passwordElement.nextElementSibling;
const signUpFormid = document.getElementById("signUpForm");

// Event listener for the sign-up form submission
signUpFormid.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

// Event listeners for removing wrong credentials message on input click
usernameElement.addEventListener("click", removeWrongCredentialsMessage);
passwordElement.addEventListener("click", removeWrongCredentialsMessage);

// Function to remove wrong credentials message and reset styles
function removeWrongCredentialsMessage() {
  wrongCredentialsMessage.style.display = "none";
  usernameSibilingElement.style.color = "#a2a3a6"; // Light red color
  usernameElement.style.borderColor = "#a2a3a6"; // Light red color
  passwordSibilingElement.style.color = "#a2a3a6"; // Light red color
  passwordElement.style.borderColor = "#a2a3a6"; // Light red color
}

// Function to show wrong credentials message and apply styles
function showWrongCredentialsMessage() {
  wrongCredentialsMessage.style.display = "block";
  usernameSibilingElement.style.color = "#ff4444"; // Light red color
  usernameElement.style.borderColor = "#ff4444"; // Light red color
  passwordSibilingElement.style.color = "#ff4444"; // Light red color
  passwordElement.style.borderColor = "#ff4444"; // Light red color
}

// Function to be executed on page load
function onLoad() {
  const firstNameCookie = getCookie("firstName");
  console.log(`firstNameCookie: ${firstNameCookie}`);
  setFromCookie(firstNameCookie);
}

// Event listener for page load
window.onload = onLoad;

// Event listener for sign-in link click
signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !signInLink.innerHTML.includes("Sign In") &&
    !signInLink.innerHTML.includes("Login")
  ) {
    if (confirm("Click 'Ok' to Log Out")) {
      document.cookie =
        "firstName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      signInLink.innerHTML = `<i class="fa-solid fa-solid fa-user"></i> Sign In`;
    }
  } else {
    clearForm();
    loginContainer.classList.remove("hidden");
    modal.style.right = "0";
  }
});

// Event listener for close login modal button click
closemodalButton.addEventListener("click", () => {
  modal.style.right = "-350px";
  setTimeout(() => {
    loginContainer.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
    clearForm();
    removeWrongCredentialsMessage();
  }, 300);
});

// Event listener for close sign-up form button click
closeSignUpFormButton.addEventListener("click", () => {
  modal.style.right = "-350px";
  setTimeout(() => {
    SignUpContainer.classList.add("hidden");
    clearForm();
    removeWrongSignupStyle();
  }, 300);
});

// Function to toggle to sign-up view
function toggleToSignUp() {
  SignUpContainer.classList.remove("hidden");
  loginContainer.classList.add("hidden");
  removeWrongCredentialsMessage();
  clearForm();
}

// Function to toggle to login view
function toggleToLogin() {
  SignUpContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
  clearForm();
  removeWrongSignupStyle();
}

// Event listener for login form submission
var loginForm = document.querySelector(".loginForm");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var usernameValue = document.getElementById("username").value;
  var passwordValue = document.getElementById("password").value;

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
      jsonData = data;

      if (jsonData.id != null) {
        document.cookie = `id=${jsonData.id};`;
        document.cookie = `firstName=${jsonData.firstName};`;
        setFromCookie(jsonData.firstName);
        const isIndexPage = window.location.pathname.endsWith("index.html");
        if (isIndexPage) {
          window.location.href = "home.html";
        }
        loginContainer.classList.add("hidden");
        clearForm();
      } else {
        showWrongCredentialsMessage();
      }
    });
});

// Function to set user's first name from the cookie
function setFromCookie(firstNameCookie) {
  if (typeof firstNameCookie === "undefined") {
    // Do nothing if the cookie is undefined
  } else {
    const signInLink = document.getElementById("signInLink");
    signInLink.innerHTML = `<i class="fa-solid fa-solid fa-user"></i> ${firstNameCookie}`;
  }
  return 0;
}

// Function to get cookie value
function getCookie(name) {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    .split("=")[1];
  return cookieValue ? decodeURIComponent(cookieValue) : null;
}

// Function to clear form fields
function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("signUp firstName").value = "";
  document.getElementById("signUp lastName").value = "";
  document.getElementById("signUp email").value = "";
  document.getElementById("signUp username").value = "";
  document.getElementById("signUp password").value = "";
}
