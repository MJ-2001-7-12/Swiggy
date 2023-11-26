// Check if the "firstName" cookie exists
let tempid = 31;
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

const firstNameInput = document.getElementById("signUp firstName");
const lastNameInput = document.getElementById("signUp lastName");
const emailInput = document.getElementById("signUp email");
const usernameInput = document.getElementById("signUp username");
const passwordInput = document.getElementById("signUp password");

document
  .getElementById("username")
  .addEventListener("click", removeWrongCredentialsMessage);
document
  .getElementById("password")
  .addEventListener("click", removeWrongCredentialsMessage);
function removeWrongCredentialsMessage() {
  wrongCredentialsMessage.style.display = "none";
  usernameSibilingElement.style.color = "#a2a3a6"; // Light red color
  usernameElement.style.borderColor = "#a2a3a6"; // Light red color

  passwordSibilingElement.style.color = "#a2a3a6"; // Light red color
  passwordElement.style.borderColor = "#a2a3a6"; // Light red color
}
function showWrongCredentialsMessage() {
  wrongCredentialsMessage.style.display = "block";

  usernameSibilingElement.style.color = "#ff4444"; // Light red color
  usernameElement.style.borderColor = "#ff4444"; // Light red color

  passwordSibilingElement.style.color = "#ff4444"; // Light red color
  passwordElement.style.borderColor = "#ff4444"; // Light red color
}
function onLoad() {
  const firstNameCookie = getCookie("firstName");
  console.log(`firstNameCookie: ${firstNameCookie}`);
  setFromCookie(firstNameCookie);
}

window.onload = onLoad;

signInLink.addEventListener("click", (e) => {
  e.preventDefault();
  // modal.classList.remove("hidden");
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

// signupButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   clearForm();
//   SignUpContainer.classList.remove("hidden");
//   modal.style.right = "0";
// });
closemodalButton.addEventListener("click", () => {
  modal.style.right = "-350px";
  setTimeout(() => {
    // modal.classList.add("hidden");
    loginContainer.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
    clearForm();
    removeWrongCredentialsMessage();
  }, 300);
});
closeSignUpFormButton.addEventListener("click", () => {
  modal.style.right = "-350px";
  setTimeout(() => {
    // modal.classList.add("hidden");
    SignUpContainer.classList.add("hidden");
    clearForm();
    removeWrongSignupStyle();
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
  removeWrongCredentialsMessage();
  clearForm();
  //   modal.style.right = "0";
}
function toggleToLogin() {
  SignUpContainer.classList.add("hidden");
  loginContainer.classList.remove("hidden");
  clearForm();
  removeWrongSignupStyle();
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
      console.log(`jsondata.id=${jsonData.id}`);

      if (jsonData.id != null) {
        document.cookie = `id=${jsonData.id};`;
        document.cookie = `firstName=${jsonData.firstName};`;
        console.log(`id=${jsonData.id}`);
        console.log(`firstName=${jsonData.firstName}`);
        console.log(`cookie= ${document.cookie}`);
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
// }
showDataTable.addEventListener("dblclick", function () {
  // Navigate to table.html on double click
  window.location.href = "table.html";
});

// If the "firstName" cookie exists, replace the "Sign In" text with the user's first name
function setFromCookie(firstNameCookie) {
  if (typeof firstNameCookie === "undefined") {
  } else {
    const signInLink = document.getElementById("signInLink");
    signInLink.innerHTML = `<i class="fa-solid fa-solid fa-user"></i> ${firstNameCookie}`;
  }
  return 0;
}
function getCookie(name) {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    .split("=")[1];
  return cookieValue ? decodeURIComponent(cookieValue) : null;
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("signUp firstName").value = "";
  document.getElementById("signUp lastName").value = "";
  document.getElementById("signUp email").value = "";
  document.getElementById("signUp username").value = "";
  document.getElementById("signUp password").value = "";
}

/***************Sign Up************/

firstNameInput.addEventListener("click", () => resetStyles(firstNameInput));
lastNameInput.addEventListener("click", () => resetStyles(lastNameInput));
emailInput.addEventListener("click", () => resetStyles(emailInput));
usernameInput.addEventListener("click", () => resetStyles(usernameInput));
passwordInput.addEventListener("click", () => resetStyles(passwordInput));

const signUpForm = document.querySelector("#SignUpContainer form");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  // Reset styles and error messages
  removeWrongSignupStyle();
  let isValid = true;

  if (!validateRequired(firstNameInput)) {
    isValid = false;
    showError(firstNameInput, "First Name cannot be empty");
  }

  if (!validateRequired(lastNameInput)) {
    isValid = false;
    showError(lastNameInput, "Last Name cannot be empty");
  }

  if (!validateRequired(emailInput)) {
    isValid = false;
    showError(emailInput, "Email cannot be empty");
  } else if (!validateEmail(emailInput.value)) {
    isValid = false;
    showError(emailInput, "Invalid email format");
  }

  if (!validateRequired(usernameInput)) {
    isValid = false;
    showError(usernameInput, "Username cannot be empty");
  }

  if (!validateRequired(passwordInput)) {
    isValid = false;
    showError(passwordInput, "Password cannot be empty");
  } else if (!validatePassword(passwordInput.value)) {
    isValid = false;
    showError(passwordInput, "Password must be alphanumeric");
  }

  if (isValid) {
    // Form is valid, you can proceed with form submission or other actions
    console.log(window.location.pathname);

    const isIndexPage = window.location.pathname.endsWith("index.html");
    if (isIndexPage) {
      window.location.href = "home.html";
    }

    console.log("Form is valid");
    document.cookie = `id=${tempid++};`;
    document.cookie = `firstName=${firstNameInput.value};`;
    console.log(`cookie= ${document.cookie}`);
    setFromCookie(firstNameInput.value);
    SignUpContainer.classList.add("hidden");
    clearForm();
  }
}

function validateRequired(input) {
  return input.value.trim() !== "";
}

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password must contain at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
  return passwordRegex.test(password);
}

function showError(input, message) {
  const label = input.nextElementSibling;
  label.textContent = message;
  label.style.color = "#ff4444"; // Light red color
  input.style.borderColor = "#ff4444"; // Light red color
}
function removeWrongSignupStyle() {
  resetStyles(firstNameInput);
  resetStyles(lastNameInput);
  resetStyles(emailInput);
  resetStyles(usernameInput);
  resetStyles(passwordInput);
}
function resetStyles(input) {
  const label = input.nextElementSibling;
  label.textContent = label.getAttribute("data-original-text");
  label.style.color = "#a2a3a6";
  input.style.borderColor = "#a2a3a6";
}
