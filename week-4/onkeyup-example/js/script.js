
const firstNameInput = document.querySelector("#first-name");
const formSubmitBtn = document.querySelector("#submit-button");
const submitMessage = document.querySelector("#submit-message");


// Trigger onkeyup event when it is written something in the first-name input:

firstNameInput.onkeyup = function (event){
    let firstNameInputValue = event.target.value;

    // // Do the condition
    if (firstNameInput.value.length >= 5) {
        formSubmitBtn.disabled = false;
        submitMessage.innerHTML = "Correct!";
    } else {
        formSubmitBtn.disabled = true;
        submitMessage.innerHTML = "Incorrect";
    }

    // Version 2
    // firstNameInputValue.length >= 5 ? formSubmitBtn.disabled = false : formSubmitBtn.disabled = true;

    // Version 3:
    // formSubmitBtn.disabled = firstNameInputValue.length >= 5;
}




