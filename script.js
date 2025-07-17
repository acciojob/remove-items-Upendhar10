//your JS code here. If required.
let Btn = document.querySelector('input[type="button"]');

Btn.addEventListener("click", RemoveOption);

function RemoveOption(e){
	let dropdown = document.getElementById('colorSelect');
	let list = dropdown.options;
	let OptionSelected = list.selectedIndex;
	if (OptionSelected !== -1) {
    dropdown.remove(OptionSelected);
  }
}