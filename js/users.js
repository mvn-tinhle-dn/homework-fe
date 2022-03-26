const url1 = "https://reqres.in/api/users?page=2";
const url2 = "https://reqres.in/api/users?page=1";
const url = "https://reqres.in/api/users";

//Axios
axios
	.get(url1)
	.then((res) => {
		const items = res.data.data;
		showUsers(items);
	})
	.catch((error) => {
		console.log(error);
	});

//show user
function showUsers(items) {
	const tbody = document.getElementById("tbody");
	const content = items.map((item, index) => {
		const userId = item.id;
		const userEmail = item.email;
		const userFirstName = item.first_name;
		const userLastName = item.last_name;
		const userAvt = item.avatar;
		return `<tr>
    <td>${index + 1}</td>
    <td><img src=${userAvt} /></td>
    <td>${userFirstName} ${userLastName}</td>
    <td>${userEmail}</td>
    <td><button type = "button" onclick="deleteItem(${userId})">Delete</button></td>
    </tr>`;
	});
	tbody.innerHTML = content.join("");
}

//Fetch
fetch(url2)
	.then((res) => res.json())
	.then(function (info) {
		const users = info.data;
		showUsers2(users);
	})
	.catch((error) => {
		console.log(error);
	});

//show user
function showUsers2(users) {
	const tbody = document.getElementById("tbody2");
	const content = users.map((user, index) => {
		const userId = user.id;
		const userEmail = user.email;
		const userFirstName = user.first_name;
		const userLastName = user.last_name;
		const userAvt = user.avatar;

		return `<tr>
        <td>${index + 1}</td>
        <td><img src=${userAvt} /></td>
        <td>${userFirstName} ${userLastName}</td>
        <td>${userEmail}</td>
        <td><button type = "button" onclick ="deleteItem(${userId})">Delete</button></td>
      </tr>`;
	});
	tbody.innerHTML = content.join("");
}

//Ajax
function loadDoc() {
	var http = new XMLHttpRequest();
	http.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var items = JSON.parse(this.responseText).data;
			showUsers3(items);
		}
	};
	http.open("GET", url, true);
	http.send();
}
loadDoc();

//show user
function showUsers3(items) {
	const tbody = document.getElementById("tbody3");
	const content = items.map((item, index) => {
		const userId = item.id;
		const userEmail = item.email;
		const userFirstName = item.first_name;
		const userLastName = item.last_name;
		const userAvt = item.avatar;
		return `<tr>
    <td>${index + 1}</td>
    <td><img src=${userAvt} /></td>
    <td>${userFirstName} ${userLastName}</td>
    <td>${userEmail}</td>
    <td><button type = "button" onclick="deleteItem(${userId})">Delete</button></td>
    </tr>`;
	});
	tbody.innerHTML = content.join("");
}

//Delete
function deleteItem(id) {
	return fetch(`${url}/${id}`, {
		method: "delete",
	})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
}
