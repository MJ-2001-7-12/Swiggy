document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector("#SignUpContainer form");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const firstNameInput = document.getElementById("signUp firstName");
    const lastNameInput = document.getElementById("signUp lastName");
    const emailInput = document.getElementById("signUp email");
    const usernameInput = document.getElementById("signUp username");
    const passwordInput = document.getElementById("signUp password");

    // Reset styles and error messages
    resetStyles(firstNameInput);
    resetStyles(lastNameInput);
    resetStyles(emailInput);
    resetStyles(usernameInput);
    resetStyles(passwordInput);

    let isValid = true;

    if (!validateRequired(firstNameInput)) {
      isValid = false;
      showError(firstNameInput, "First Name cannot be empty.");
    }

    if (!validateRequired(lastNameInput)) {
      isValid = false;
      showError(lastNameInput, "Last Name cannot be empty.");
    }

    if (!validateRequired(emailInput)) {
      isValid = false;
      showError(emailInput, "Email cannot be empty.");
    } else if (!validateEmail(emailInput.value)) {
      isValid = false;
      showError(emailInput, "Invalid email format.");
    }

    if (!validateRequired(usernameInput)) {
      isValid = false;
      showError(usernameInput, "Username cannot be empty.");
    }

    if (!validateRequired(passwordInput)) {
      isValid = false;
      showError(passwordInput, "Password cannot be empty.");
    } else if (!validatePassword(passwordInput.value)) {
      isValid = false;
      showError(passwordInput, "Password must contain letters and numbers.");
    }

    if (isValid) {
      // Form is valid, you can proceed with form submission or other actions
      console.log("Form is valid");
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

  function resetStyles(input) {
    const label = input.nextElementSibling;
    label.textContent = label.getAttribute("data-original-text");
    label.style.color = "#a2a3a6";
    input.style.borderColor = "#a2a3a6";
  }
});

// class Login {
//   constructor(form, fields) {
//     this.form = form;
//     this.fields = fields;
//     this.validateonSubmit();
//   }

//   validateonSubmit() {
//     let self = this;

//     this.form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       var error = 0;
//       self.fields.forEach((field) => {
//         const input = document.querySelector(`#${field}`);
//         console.log(input.value);

//         if (self.validateFields(input) == false) {
//           error++;
//         }
//       });
//       if (error == 0) {
//         //do login api here
//         localStorage.setItem("auth", 1);
//         this.form.submit();
//       }
//     });
//   }

//   validateFields(field) {
//     if (field.value.trim() === "") {
//       this.setStatus(
//         field,
//         `${field.nextElementSibling.innerText} cannot be blank`,
//         "error"
//       );
//       return false;
//     } else {
//       if (field.type == "password") {
//         if (field.value.length < 8) {
//           this.setStatus(
//             field,
//             `${field.nextElementSibling.innerText} must be at least 8 characters`,
//             "error"
//           );
//           return false;
//         } else {
//           this.setStatus(field, null, "success");
//           return true;
//         }
//       } else {
//         this.setStatus(field, null, "success");
//         return true;
//       }
//     }
//   }

//   setStatus(field, message, status) {
//     const errorMessage = field.parentElement.querySelector(".error-message");

//     if (status == "success") {
//       if (errorMessage) {
//         errorMessage.innerText = "";
//       }
//       field.classList.remove("input-error");
//     }

//     if (status == "error") {
//       errorMessage.innerText = message;
//       field.classList.add("input-error");
//     }
//   }
// }

// const form = document.querySelector(".loginForm");
// if (form) {
//   const fields = ["username", "password"];
//   const validator = new Login(form, fields);
// }
