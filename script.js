function validEmail(str) {
	const regex = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|.(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
	let x=/^[\w-.]+@[\w-]+(\.[\w-]+)*$/;
    return regex.test(email);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
