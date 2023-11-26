showDataTable.addEventListener("dblclick", function () {
  // Check if there is a cookie with id=1
  const idCookie = getCookie("id");

  if (idCookie && idCookie === "1") {
    // Navigate to table.html on double click
    window.location.href = "table.html";
  }
});

async function getData() {
  fetch("https://dummyjson.com/users/")
    .then((response) => {
      // Check if the response status is OK (status code 200)
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to fetch data");
      }
    })
    .then((data) => {
      let tab = " ";
      data.users.forEach((user) => {
        tab += `<tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        </tr>`;
      });
      document.getElementById("tbody").innerHTML = tab;
      $("#example").DataTable({
        data: data.users,
        columns: [
          { data: "firstName" },
          { data: "lastName" },
          { data: "age" },
          { data: "gender" },
          { data: "email" },
          { data: "username" },
        ],
        stateSave: true,
        bDestroy: true,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
