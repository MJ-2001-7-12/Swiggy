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
      $("#userTable").DataTable({
        data: data.users,
        columns: [
          { data: "firstName" },
          { data: "lastName" },
          { data: "age" },
          { data: "gender" },
          { data: "email" },
          { data: "username" },
        ],
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
