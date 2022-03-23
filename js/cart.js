$tbody = document.getElementById("tbody");
//show cart
var cartJSON = sessionStorage.getItem("cart");
var cart = JSON.parse(cartJSON);
// show cart
function showCart() {
	var html = "";
	for (var i = 0; i < cart.length; i++) {
		html +=
			"<tr>" +
			"<td>" +
			(cart.indexOf(cart[i]) + 1) +
			"</td>" +
			"<td>" +
			"<img src=" +
			cart[i][3] +
			">" +
			cart[i][0] +
			"</td>" +
			"<td>" +
			cart[i][1] +
			"</td>" +
			"<td>" +
			cart[i][2] +
			"</td>" +
			'<td><button type="button" onclick="removeCartItem(this)"> Xóa </button></td>' +
			"</tr>";
	}
	$tbody.innerHTML = html;
}
showCart();

//remove item
function removeCartItem($this) {
	var $trParent = $this.closest("tr");
	var nameProduct = $trParent.children[1].outerText;
	//delete element
	if (confirm("Are you sure ?")) {
		$tbody.removeChild($trParent);
	}
	//delete array item
	for (var i = 0; i < cart.length; i++) {
		if (cart[i][0] == nameProduct) {
			cart.splice(i, 1);
		}
	}
	location.reload(); // update STT
	sessionStorage.setItem("cart", JSON.stringify(cart)); // Update sessionStorage
}
