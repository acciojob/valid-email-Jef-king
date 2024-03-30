function validEmail(str) {
	let y=/^[\w-.]+@[\w-]+(\.[\w-]+)*$/;
  return y.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
