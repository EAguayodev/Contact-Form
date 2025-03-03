document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;


  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.querySelector("input[type='checkbox']");

  const errorFirst = document.getElementById("error-first");
  const errorLast = document.getElementById("error-last");
  const errorEmail = document.getElementById("error-email");
  const successMessage = document.getElementById("success-message");

   
  errorFirst.innerText = "";
  errorLast.innerText = "";
  errorEmail.innerText = "";
  successMessage.style.display = "none";

  
  firstName.style.borderColor = "";
  lastName.style.borderColor = "";
  email.style.borderColor = "";
  message.style.borderColor = "";

   
  if (firstName.value.trim() === "") {
    errorFirst.innerText = "First name is required";
    errorFirst.style.display = 'block'
    errorFirst.style.color = "hsl(0, 66%, 56%)";
    firstName.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    firstName.style.borderColor = "green";
  }


  if (lastName.value.trim() === "") {
    errorLast.innerText = "Last name is required";
    errorLast.style.display = 'block';
    errorLast.style.color = "hsl(0, 66%, 56%)";
    lastName.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    lastName.style.borderColor = "green";
  }

  
  if (email.value.trim() === "") {
    errorEmail.innerText = "Email is required";
    errorEmail.style.color = "hsl(0, 66%, 56%)";
    email.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errorEmail.innerText = "Enter a valid email address";
    errorEmail.style.color = "hsl(0, 66%, 56%)";
    email.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    email.style.borderColor = "green";
  }


  if (message.value.trim() === "") {
    message.nextElementSibling.innerText = "Message is required";
    message.nextElementSibling.style.color = "hsl(0, 66%, 56%)";
    message.style.borderColor = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    message.style.borderColor = "green";
    message.nextElementSibling.innerText = "";
  }


  if (!consent.checked) {
    consent.nextElementSibling.nextElementSibling.innerText =
      "You must consent to be contacted";
    consent.nextElementSibling.nextElementSibling.style.color = "hsl(0, 66%, 56%)";
    isValid = false;
  } else {
    consent.nextElementSibling.nextElementSibling.innerText = "";
  }


  if (isValid) {
    successMessage.style.display = "block";
    successMessage.style.backgroundColor = "hsl(187, 24%, 22%)";
    successMessage.style.color = "hsl(0, 0%, 100%)";
    successMessage.style.padding = "10px";
    successMessage.style.marginTop = "15px";
    successMessage.innerHTML = `<p><img src="assets/images/icon-success-check.svg" alt="success"> Message Sent!</p><p>Thanks for completing the form. We'll be in touch soon!</p>`;


    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    consent.checked = false;


    firstName.style.borderColor = "";
    lastName.style.borderColor = "";
    email.style.borderColor = "";
    message.style.borderColor = "";
  }
});
