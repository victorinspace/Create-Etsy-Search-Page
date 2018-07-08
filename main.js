// const productImage = items.results[0].Images
// console.log(productImage)

// title
// const productName = items.results.forEach(item => )
// console.log(productName)

// const productPrice = items.results[0].price
// console.log(productPrice)

const main = document.querySelector('#main-section__right')

const etsyItems = items.results.map(function(item) {
	return `
		<a class="product" href="${unescape(item.url)}">
			<img src="http://placehold.it/340x270">
			<span class="title">${item.title}</span>
			<span class="price">${item.price}</span>
		</a>
	`
}).join('\n')

main.innerHTML = etsyItems