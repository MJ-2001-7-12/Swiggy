


// document.addEventListener('DOMContentLoaded', function () {

//     console.log("inside DOMLOAD");

//     const submitButton=document.getElementById("submit");
//     console.log(submitButton);
//     submitButton.addEventListener('click',function(event){
//         event.preventDefault();
//         const name=document.getElementById('name').value;
//         const email=document.getElementById('email').value;
//         const subject=document.getElementById('subject').value;
//         const message=document.getElementById('message').value;
//         console.log(name,email,subject,message);
//         let wb = XLSX.utils.book_new();
//         let ws = XLSX.utils.json_to_sheet([{ 'Name': name, 'Email': email , 'Subject': subject, 'Message': message }]);
//         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//         XLSX.writeFile(wb, 'contactUS_data.xlsx');

//     });
// });
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