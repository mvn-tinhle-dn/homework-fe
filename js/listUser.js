//get data sessionStorage
const usersJSON = sessionStorage.getItem("Users");
const user = JSON.parse(usersJSON);

//render
const $tbody = document.getElementById("tbody");
function showUser(user) {
  let html = "";
  for (let i = 0; i < user.length; i++) {
    html += `
    <tr>
    <td>${i + 1}</td>
    <td>${user[i].id}</td>
    <td><img src="./image/${user[i].image}"/></td>
    <td>${user[i].firstName} ${user[i].lastName}</td>
    <td>${user[i].email}</td>
    <td>${user[i].address}</td>
    <td>
    <a href="edit.html" onclick="editUser(this)"><i class="fa-solid fa-pencil action-icon"></i></a>
    <i class="fa-solid fa-trash-can action-icon" onclick="removeUser(this)"></i>
    </td>
    </tr>
    `;
  };
  $tbody.innerHTML = html;
}
showUser(user);

//click edit
function editUser($this) {
  const trParent = $this.parentElement.parentElement;
  const idUser = trParent.children[1].outerText;
  sessionStorage.setItem("idUser", JSON.stringify(idUser));
};

//remove item
function removeUser($this) {
  const $trParent = $this.parentElement.parentElement;
  const idUser = $trParent.children[1].outerText;

  //delete element
  if (confirm("Are you sure ?")) {
    $tbody.removeChild($trParent);
  };
  //delete array item
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == idUser) {
      user.splice(i, 1);
    };
  };
  location.reload();//Update STT
  sessionStorage.setItem("Users", JSON.stringify(user)); // Update sessionStorage
}

//Search User
const ipSearch = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");

//Click btn Search
btnSearch.addEventListener("click", function () {
  const userDone = user.filter(function (item) {
    const fullName = `${item.firstName} ${item.lastName}`;
    const check = fullName.toUpperCase().indexOf(ipSearch.value.toUpperCase());
    if (check == -1) {
      return false;
    } else {
      return true;
    }
  });
  showUser(userDone);

});
