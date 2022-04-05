//Get data sessionStorage
const usersJSON = sessionStorage.getItem("Users");
const user = JSON.parse(usersJSON);

//Get id user
const idUserJSON = sessionStorage.getItem("idUser");
const idUser = JSON.parse(idUserJSON);

//(id) => find user
const userItem = user.filter((item) => item.id == idUser);

// show value curr
const formCreate = document.querySelector(".edit-user");
function showItem() {
  const html = `
  <h3>Edit User</h3>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value = "${userItem[0].firstName}"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value = "${userItem[0].lastName}"><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" name="email" value = "${userItem[0].email}"><br>
  <label for="address">Address:</label><br>
  <input type="text" id="address" name="address" value = "${userItem[0].address}"><br>
  <label for="image">Image:</label><br>
  <input  type="text" disabled id="image" name="image" value = "${userItem[0].image}"><br>
  <label for="imageUd">Update Image:</label><br>
  <input type="file" id="imageUd" name="imageUd"><br>
  <button type="submit" class="btn-edit" onclick="editUser()">Edit User</button>
  `;
  formCreate.innerHTML = html;
};
showItem();

// Edit user
function editUser() {
  const firstNameVL = document.getElementById("fname").value;
  const lastNameVL = document.getElementById("lname").value;
  const emailVL = document.getElementById("email").value;
  const addressVL = document.getElementById("address").value;
  const imgVL = document.getElementById("imageUd").value;
  const nameImg = imgVL.slice(12, imgVL.length);
  const imgCurrent = document.getElementById("image").value;

  // get index user
  const indexVl = user.indexOf(userItem[0]);

  // update user
  user[indexVl].firstName = firstNameVL;
  user[indexVl].lastName = lastNameVL;
  user[indexVl].email = emailVL;
  user[indexVl].address = addressVL;
  if (nameImg.length == 0) {
    user[indexVl].image = imgCurrent;
  } else {
    user[indexVl].image = nameImg;
  };

  //update data
  sessionStorage.setItem("Users", JSON.stringify(user));

  //check and notification
  let notification;
  for (key in user[indexVl]) {
    if (user[indexVl][key] == "undefined") {
      notification = "Update no success!";
    } else {
      notification = "Update success!";
    }
  }
  alert(notification);

};
