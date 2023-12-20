"use strict";

function burgerclick() {
  var burger = document.getElementById("burger");
  burger.classList.toggle("is-active");
  document.getElementById("navlinks").classList.toggle("nav-active");
}

window.onscroll = function () {
  SlideTop();
};

function SlideTop() {
  if (document.documentElement.scrollTop > 350) {
    var logo = document.getElementById('logo'); // Get your logo element by its ID

    logo.classList.add('slide-top');
  } else {
    logo.classList.remove('slide-top');
  }
}
/*
"use strict";
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) { });
form.addEventListener("submit", function (event) {
  // Prevent page reload on submit
  event.preventDefault(); 
  // Selecting the email value filled by the user
  const email = document.getElementById("email").value;
  // Checking for valid email using a simple regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Wrong email format");
    return;
  }

  // If everything passes, show success message
  alert("Form submitted successfully");
});
*/


var constraints = {
  name: {
    presence: {
      allowEmpty: false
    }
  },
  email: {
    presence: {
      allowEmpty: false
    },
    email: true
  },
  message: {
    presence: {
      allowEmpty: false
    }
  }
};
var form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
  var formValues = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  var errors = validate(formValues, constraints);

  if (errors) {
    event.preventDefault();
    var errorMessage = Object.values(errors).map(function (fieldValues) {
      return fieldValues.join(', ');
    }).join("\n");
    alert(errorMessage);
  }
}, false);