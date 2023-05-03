let form = document.querySelector('form');
let name = document.querySelector('.name');
let age = document.querySelector('.age');
let gender = document.querySelector('.gender');
form.addEventListener('submit', handleSubmit);

console.log( "gender", gender.value);


function handleSubmit(e) {
	e.preventDefault();	
	if (name.value == '' || age.value == '') {
		alert('Ensure a value in both fields!');
	} else {
		alert('This form has been successfully submitted!');
		// console.log(
		// 	`This form has a username of ${name.value} and age ${age.value}`
		// );

        const selectedGender = document.querySelector('input[name="gender"]:checked').id

        console.log('name:', name.value, 'age:', age.value, "gender", selectedGender );

		name.value = '';
		age.value = '';
        gender.value = '';
	}
};



