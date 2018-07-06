const main = document.querySelector("#content")


const etsyItems = items.map(function(item) {
	return 
	`
	<a class="product" href="${unescapeitem.url}">
		<img src="">
		<span class="title">${item.title}</span>
		<span class="price">${item.price.toFixed(2)}</span>
	</a>
	`
})