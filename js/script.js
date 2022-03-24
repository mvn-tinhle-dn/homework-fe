$productList = document.querySelector(".products-list");

var products = [
	{
		id: 1,
		title: "Elip Power Max",
		price: 35000,
		src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg",
	},
	{
		id: 2,
		title: "Nike As Dri-Fit Training",
		price: 25000,
		src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg",
	},
	{
		id: 3,
		title: "NIKE Trophy Training ",
		price: 55000,
		src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg",
	},
	{
		id: 4,
		title: "Calvin Klein Training",
		price: 15000,
		src: "https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg",
	},
];

var html = "";
for (var i = 0; i < products.length; i++) {
	html +=
		'<li class="product-item col-3">' +
		'<div class="product-image">' +
		'<a href="#"><img src =' +
		products[i].src +
		' class="product-img"></a>' +
		"</div>" +
		'<div class="product-info">' +
		'<h3 class="product-tille">' +
		products[i].title +
		" </h3>" +
		'<p>$<span class="product-price">' +
		products[i].price +
		"</span></p>" +
		"</div>" +
		'<div class="item-btn">' +
		'<button class="btn-product btn-primary" onclick="addCart(this)" type="button">Add to Cart</button>' +
		"</div>" +
		"</li>";
}

$productList.innerHTML = html;

var myCart = [];
//add card
function addCart($this) {
	var current = $this.parentElement.parentElement;
	var productImage = current.children[0].children[0].children[0];
	var srcImage = productImage.src;
	var productInfo = current.children[1];
	var nameProduct = productInfo.children[0].outerText;
	var amountProduct = 1;
	var priceProduct = productInfo.children[1].lastElementChild.outerText;
	var itemCart = [nameProduct, amountProduct, priceProduct, srcImage];
	myCart.push(itemCart);
	var countProduct = myCart.length;
	document.querySelector(".count-product").textContent = countProduct;
	document.querySelector(".count-product-mobile").textContent = countProduct;
	$this.disabled = true;
	sessionStorage.setItem("cart", JSON.stringify(myCart));
}

//ShowCountProduct
function showCountProduct() {
	var cart = JSON.parse(sessionStorage.getItem("cart"));
	document.querySelector(".count-product").textContent = cart.length;
	document.querySelector(".count-product-mobile").textContent = cart.length;
}
showCountProduct();
