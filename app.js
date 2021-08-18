// console.log('here')

// Go ES6 arrow functions
// const validateName = () => {
// }

// Event listeners - Form Blur event:
document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('zip').addEventListener('blur', validateZip)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)

// Listen to submit:
document.getElementById('submit-btn').addEventListener('click', validateFields)

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

  console.log('Reg ex used for "name":', re.source)
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

  console.log('Reg ex used for "zip":', re.source)
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

  console.log('Reg ex used for "email":', re.source)
}

//-----------------------------------
function validatePhone() {
  const phone = document.getElementById('phone')
  // Allow different formats for locally Sweden, mob and

  const re = /^\(?\d{2,4}\)?[-. ]?\d{3}[-. ]?\d{4}$/

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid')
  } else {
    phone.classList.remove('is-invalid')
  }

  console.log('Reg ex used for "phone":', re.source)
}

//-----------------------------------
// + Check all fields before submit
function validateFields(e) {
  console.log('Submit btn clicked')

  const name = document.getElementById('name')
  const zip = document.getElementById('zip')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')

  if (
    name.value.length == 0 ||
    zip.value.length == 0 ||
    email.value.length == 0 ||
    phone.value.length == 0
  ) {
    alert('Some fields are empty, please try again!')
    e.preventDefault() // stop refresh window
  } else {
    alert('All input fields validated ok - sending form data!')
    // document.getElementById('form-sent').innerHTML = 'Input validated ok - Data sent ok!'
    // Get message in dom and timeout window refresh
  }
}

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
