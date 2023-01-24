

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});



function validateForm() {
  usernameValidate();
  emailValidate();
  passwordValidate();
  form.querySelectorAll("input").forEach((element) => (element.value = ""));
}

//  function to set error
const error = (element, message) => {
    let parentElement = element.parentElement;
    let errorElement = parentElement.querySelector(".error");
    errorElement.innerHTML = message;
    element.classList.add("error");
  };
  //  function to set success
  const success = (element) => {
    let parentElement = element.parentElement;
    let errorElement = parentElement.querySelector(".error");
    errorElement.innerHTML = "";
    element.classList.add("success");
  };

const usernameValidate = () => {
  let inputElement = document.getElementById("username");
  let inputValue = inputElement.value.trim();
  if (inputValue == "") {
    error(inputElement, "username must not be empty");
  } else {
    success(inputElement);
  }
};

const emailValidate = () => {
  let inputElement = document.getElementById("email");
  let inputValue = inputElement.value.trim();
  if (inputValue == "") {
    error(inputElement, "email must not be empty");
  } else {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        inputValue
      )
    ) {
      success(inputElement);
    } else {
      error(inputElement, "invalid email");
    }
  }
};

const passwordValidate = () => {
  let inputElement = document.getElementById("password");
  let inputValue = inputElement.value.trim();
  if (inputValue == "") {
    error(inputElement, "password must not be empty");
  } else {
    success(inputElement);
    retypeValidate(inputValue);
  }
};

const retypeValidate = (previousValue) => {
  let inputElement = document.getElementById("retype");
  let inputValue = inputElement.value.trim();
  if (inputValue == "") {
    error(inputElement, "password must not be empty");
  } else if (inputValue != previousValue) {
    error(inputElement, "password must be same");
  } else {
    success(inputElement);
  }
};
