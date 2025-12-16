// Get id:s from html file

const contactForm = document.getElementById("contactForm");

// Input fields
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Error messages
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

// Character counter
const charCounter = document.getElementById("charCounter");

// Reset button
const resetBtn = document.getElementById("resetBtn");

// Success message
const successMsg = document.getElementById("successMsg");

//-------------------------------------------------------------------

//Show error - mark input as wrong and show red error message
function showError(input, errorElement, message) { //input = input field, errorElemet = input field errormessage, message = the text that gonna be shown
  input.classList.remove("valid"); //removes green border
  input.classList.add("error"); //adds red border

  errorElement.textContent = message; //adds error message
  errorElement.classList.remove("hidden"); //shows messsage beneath inputfield
}

//Clear error - field is okay, remove errors 
function clearError(input, errorElement) { //takes input = input field and errorElement = error message
  input.classList.remove("error"); //removes red border
  errorElement.textContent = ""; //removed text
  errorElement.classList.add("hidden"); //hides errormessage 
}

//Validate inputs

//Validate name
function validateName(input, errorElement, fieldLabel) {
  const value = input.value.trim()

  if (value === "") {
    showError(input, errorElement, `${fieldLabel} is required`)
    return false
  }

  if (!/^[A-Za-z]+$/.test(value)) {
    showError(input, errorElement, "Only letters allowed")
    return false
  }

  input.classList.remove("error")
  clearError(input, errorElement)
  input.classlist.add("valid")
  return true

}

firstName.addEventListener("input", () => {
  validateName(firstName, firstNameError, "First name")
})

lastName.addEventListener("input", () => {
  validateName(lastName, lastNameError, "Last name")
})

