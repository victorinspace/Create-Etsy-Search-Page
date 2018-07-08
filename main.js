const main = document.querySelector('#main-section__right')

const etsyItems = items.results.map(function(item) {
	return `
		<a class="product" href="${unescape(item.url)}">
			<img src="${item.Images[0].url_fullxfull}">
			<span class="title">${item.title}</span>
			<span class="price">${item.price}</span>
		</a>
	`
}).join('\n')

main.innerHTML = etsyItems

// placeholder image
// http://placehold.it/340x270