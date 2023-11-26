// Get references to input elements
const firstNameInput = document.getElementById("signUp firstName");
const lastNameInput = document.getElementById("signUp lastName");
const emailInput = document.getElementById("signUp email");
const usernameInput = document.getElementById("signUp username");
const passwordInput = document.getElementById("signUp password");

// Add click event listeners to input elements to reset styles
firstNameInput.addEventListener("click", () => resetStyles(firstNameInput));
lastNameInput.addEventListener("click", () => resetStyles(lastNameInput));
emailInput.addEventListener("click", () => resetStyles(emailInput));
usernameInput.addEventListener("click", () => resetStyles(usernameInput));
passwordInput.addEventListener("click", () => resetStyles(passwordInput));

// Validate form on submission
function validateForm() {
  // Reset styles and error messages
  removeWrongSignupStyle();
  let isValid = true;

  // Validate first name
  if (!validateRequired(firstNameInput)) {
    isValid = false;
    showError(firstNameInput, "First Name cannot be empty");
  }

  // Validate last name
  if (!validateRequired(lastNameInput)) {
    isValid = false;
    showError(lastNameInput, "Last Name cannot be empty");
  }

  // Validate email
  if (!validateRequired(emailInput)) {
    isValid = false;
    showError(emailInput, "Email cannot be empty");
  } else if (!validateEmail(emailInput.value)) {
    isValid = false;
    showError(emailInput, "Invalid email format");
  }

  // Validate username
  if (!validateRequired(usernameInput)) {
    isValid = false;
    showError(usernameInput, "Username cannot be empty");
  }

  // Validate password
  if (!validateRequired(passwordInput)) {
    isValid = false;
    showError(passwordInput, "Password cannot be empty");
  } else if (!validatePassword(passwordInput.value)) {
    isValid = false;
    showError(passwordInput, "Password must be alphanumeric");
  }

  // Proceed if the form is valid
  if (isValid) {
    console.log(window.location.pathname);

    // Redirect to home.html if on index.html
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

// Validate if input value is not empty
function validateRequired(input) {
  return input.value.trim() !== "";
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Validate password format
function validatePassword(password) {
  // Password must contain at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
  return passwordRegex.test(password);
}

// Show error message and highlight input
function showError(input, message) {
  const label = input.nextElementSibling;
  label.textContent = message;
  label.style.color = "#ff4444"; // Light red color
  input.style.borderColor = "#ff4444"; // Light red color
}

// Remove wrong signup styles
function removeWrongSignupStyle() {
  resetStyles(firstNameInput);
  resetStyles(lastNameInput);
  resetStyles(emailInput);
  resetStyles(usernameInput);
  resetStyles(passwordInput);
}

// Reset styles for an input
function resetStyles(input) {
  const label = input.nextElementSibling;
  label.textContent = label.getAttribute("data-original-text");
  label.style.color = "#a2a3a6";
  input.style.borderColor = "#a2a3a6";
}
