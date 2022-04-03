const users = [];
const buttonCreate = document.getElementById("btn-create");

// create user
let count = 0;
buttonCreate.addEventListener("click", () => {
  const firstNameVL = document.getElementById("fname");
  const lastNameVL = document.getElementById("lname");
  const emailVL = document.getElementById("email");
  const addressVL = document.getElementById("address");
  const imgVL = document.getElementById("image");
  const nameImg = imgVL.value.slice(12, imgVL.length);
  if (
    firstNameVL.value.length < 2 ||
    lastNameVL.value.length < 2 ||
    nameImg == "" ||
    emailVL.value == "" ||
    addressVL.value.length < 4
  ) {
    alert("Please enter full information !");
  } else {
    const userItem = {
      id: `user${count}`,
      firstName: firstNameVL.value,
      lastName: lastNameVL.value,
      image: nameImg,
      email: emailVL.value,
      address: addressVL.value,
    };
    users.push(userItem);

    //add user sessionStorage
    sessionStorage.setItem("Users", JSON.stringify(users));
    count += 1;

    //Reset input
    firstNameVL.value = "";
		firstNameVL.focus();
		lastNameVL.value = "";
    emailVL.value = "";
    addressVL.value = "";
    imgVL.value = "";
  };

  // get data
  const usersJSON = sessionStorage.getItem("Users");
  const user = JSON.parse(usersJSON);
	let countCheck = 0;
  //check ==> notification
  if (user.length > countCheck == true) {
		countCheck += 1;
		alert("Create success !");
  } else {
		alert("Create Fail !");
	};
	

});
