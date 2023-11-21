const exportExcel = () => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet([{ Name: name, Email: email, Subject: subject }]);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'contactUS_data.xlsx');
    console.log(wb);

}

document.addEventListener('DOMContentLoaded', function () {

    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function (event) {

        exportExcel();
    });

});