"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let firstNameTextBox = document.getElementById("firstName");
    let button = document.getElementById("enterButton");
    button.addEventListener('click', function () {
        let firstName = firstNameTextBox.value;
        alert("Hello " + firstName);
    });
});
