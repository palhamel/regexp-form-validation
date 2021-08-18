// console.log('here')

// const validateName = () => {
// }

// Event listeners - Form Blur event:
document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('zip').addEventListener('blur', validateZip)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)

//-----------------------------------
// Validate Letters a-z or A-Z, x num of characters
function validateName() {
  // Get the value:
  const name = document.getElementById('name')
  // Reg exp in use:
  const re = /^[^\s]+( [^\s]+)+$/
  // const re = /^[a-öA-Ö]{2,30}$/
  // Evaluate:
  if (!re.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }
}

//-----------------------------------
function validateZip() {
  const zip = document.getElementById('zip')
  // Will check for: '12345' och '123 45':
  // const re = /^[0-9]{3,5}(\s[0-9]{2})?$/ // will miss '1234'

  const re = /^[0-9]{5}$/ // will ok '12345'
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid')
  } else {
    zip.classList.remove('is-invalid')
  }
}
//-----------------------------------
function validateEmail() {
  const email = document.getElementById('email')
  // Will search for TLDs within range 2-5:
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ 

  if (!re.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
  }
}

//-----------------------------------
function validatePhone() {}

// + Check all fields before submit

/* 
^               // start of line
[a-zA-Z]{2,}    // will except a name with at least two characters
\s              // will look for white space between name and surname
[a-zA-Z]{1,}    // needs at least 1 Character
\'?-?           // possibility of **'** or **-** for double barreled and hyphenated surnames
[a-zA-Z]{2,}    // will except a name with at least two characters
\s?             // possibility of another whitespace
([a-zA-Z]{1,})? // possibility of a second surname

*/
