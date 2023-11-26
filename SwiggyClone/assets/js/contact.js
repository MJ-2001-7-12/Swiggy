
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzK5q5L7Axh12dJdcY_jDw29MI0MY0TQe6tTqUn-UugJRg_5CyRnfRBmSPhbuTm-bQl/exec";
 
const form = document.forms["contact-form"];
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});