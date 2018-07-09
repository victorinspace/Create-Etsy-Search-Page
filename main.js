/*
Manipulating the main section of the page to populate 
with dynamic data from the Etsy API.
*/

// creating a variable to interact with the page
const main = document.querySelector('#main-section__right')

// DOM elements to be added
const etsyItems = items.results.map(function(item) {
	return `
		<a class="product" href="${unescape(item.url)}">
			<img src="${item.Images[0].url_fullxfull}">
			<span class="title">${item.title}</span>
			<span class="shop-name">${item.Shop.shop_name}</span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star"></span>
			<span class="price">$${item.price}</span>
		</a>
	`
}).join('\n')

// adding new elements to the page
main.innerHTML = etsyItems






// placeholder image
// http://placehold.it/340x270