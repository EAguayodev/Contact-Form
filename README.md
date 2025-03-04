# Frontend Mentor - Contact form solution 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here]()
- Live Site URL: [Vercel](https://contact-form-zeta-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="input-box">
  <label>
    <span class="details">Query Type *</span>
  </label>
  <div class="radio-wrapper">
    <input class="form-control" type="radio" id="request" name="request" placeholder="Support Requested" value="Support Request">
    <span>General Enquiry</span>
  </div>
</div>
```
```css
input[type="radio"] {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--Light-Green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```
```js

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
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [w3schools](https://www.w3schools.com/tags/att_input_type_radio.asp) - The w3schools resource helped me with structuring the html inputs containing the query selecting types for inserting into the message box.
- []() - .

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev/solutions)


## Acknowledgments