document.addEventListener('DOMContentLoaded', function() {
    let firstNameTextBox = document.getElementById("firstName") as HTMLInputElement;
    let button = document.getElementById("enterButton") as HTMLButtonElement;
   
    button.addEventListener('click', function() {
        let firstName: string = firstNameTextBox.value;
        alert("Hello " + firstName);
    });
});
