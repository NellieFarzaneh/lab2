// Get id:s from html file

//Entire form
const contactForm = document.getElementById("contactForm")

// Input fields
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

// Error messages
const firstNameError = document.getElementById("firstNameError")
const lastNameError = document.getElementById("lastNameError")
const emailError = document.getElementById("emailError")
const subjectError = document.getElementById("subjectError")
const messageError = document.getElementById("messageError")

// Character counter
const charCounter = document.getElementById("charCounter")

// Reset button
const resetBtn = document.getElementById("resetBtn")

// Success message
const successMsg = document.getElementById("successMsg")

//-------------------------------------------------------------------

//Show error - mark input as wrong and show red error message
function showError(input, errorElement, message) {
  //takes into account these 3 values input, erroreElement, message
  //input = input field, errorElemet = input field errormessage, message = the text that gonna be shown
  input.classList.remove("valid") //removes green border
  input.classList.add("error") //adds red border

  errorElement.textContent = message //adds error message
  errorElement.classList.remove("hidden") //shows messsage beneath inputfield
}

//Clear error - field is okay, remove errors
function clearError(input, errorElement) {
  //takes input = input field and errorElement = error message
  input.classList.remove("error") //removes red border
  errorElement.textContent = "" //remove text
  errorElement.classList.add("hidden") //hides errormessage
}

//Validate functions

//Validate name - for both first and last name
function validateName(input, errorElement, fieldLabel) {
  // takes into account these 3 values - input, errorElement, fieldLabel
  const value = input.value.trim() //get the value and remove extra space

  //field cannot be empty
  if (value === "") {
    showError(input, errorElement, `${fieldLabel} is required`)
    return false //stop the function here
  }

  //check if field only contains letters
  if (!/^[A-Za-z]+$/.test(value)) {
    showError(input, errorElement, "Only letters allowed")
    return false
  }

  //if both if:s pass, teh field is valid
  input.classList.remove("error")
  clearError(input, errorElement)
  input.classList.add("valid") //add green border
  return true
}

//run name validation while user types
firstName.addEventListener("input", function () {
  validateName(firstName, firstNameError, "First name")
})

lastName.addEventListener("input", function () {
  validateName(lastName, lastNameError, "Last name")
})

//Validate email
function validateEmail() {
  const value = email.value.trim()

  //check if email field if empty
  if (value === "") {
    showError(email, emailError, "Email is required")
    return false
  }

  //check if field has @
  if (!value.includes("@")) {
    showError(email, emailError, "Enter valid email")
    return false
  }
  
  //if email is valid
  email.classList.remove("error")
  clearError(email, emailError)
  email.classList.add("valid")
  return true
}
//validate email while typing
email.addEventListener("input", validateEmail)

//Validate message
function validateMessage() {
  const value = message.value.trim()
  const length = value.length

  charCounter.textContent = length + "/ 20 characters"

  //change colour dependning on message length
  if (length < 20) {
    charCounter.style.color = "#dc3545"//error
  } else {
    charCounter.style.color = "#28a745" //valid
  }

  //message cannot be empty
  if (value === "") {
    showError(message, messageError, "Message is required")
    return false
  }
  //message must be at least 20 characters
  if (length < 20) {
    showError(message, messageError, "Message must be at least 20 characters")
    return false
  }

  //if message is valid
  message.classList.remove("error")
  clearError(message, messageError)
  message.classList.add("valid")
  return true
}

message.addEventListener("input", validateMessage)

//Clear form
//clear form after submitting
function clearForm() {
  //reste all input values
  contactForm.reset()

  //remove borders after submit
  firstName.classList.remove("valid", "error")
  lastName.classList.remove("valid", "error")
  email.classList.remove("valid", "error")
  message.classList.remove("valid", "error")

  //clear all error messages
  firstNameError.textContent = ""
  lastNameError.textContent = ""
  emailError.textContent = ""
  messageError.textContent = ""

  //hida all error messages
  firstNameError.classList.add("hidden")
  lastNameError.classList.add("hidden")
  emailError.classList.add("hidden")
  messageError.classList.add("hidden")

  //reset charcter counter
  charCounter.textContent = "0 / 20 characters"
  charCounter.style.color = "#dc3545"
}

//clearForm runs whenuser clicks "clear" button
resetBtn.addEventListener("click", clearForm)