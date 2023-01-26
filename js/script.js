const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	removeBorder();											// remove all
	removeShow();												// disappear all
	this.classList.add('tabs-border');		// Add border to current tab
	const tabContentItem = document.querySelector(`#${this.id}-content`);		// Grab content item from DOM
	tabContentItem.classList.add('showcontent');
}

function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tabs-border');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('showcontent');
	});
}

// listen for tab click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
