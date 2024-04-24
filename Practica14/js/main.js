let checkboxes = document.querySelectorAll('.checkbox-type');
let elements = document.querySelectorAll('.target-elemet');

checkboxes.forEach((checkbox, index) => {
	checkbox.setAttribute('data-target-index', index);
	checkbox.addEventListener('click', (event) => {
		let elemetIndex = event.target.dataset.targetIndex;
		event.target.checked
			? elements[elemetIndex].classList.add('d-none')
			: elements[elemetIndex].classList.remove('d-none');
	});
});
