
const ageInput = document.querySelector("#age");
const enterBtn = document.querySelector(".enter-btn");

enterBtn.addEventListener("click", function (){
    const age = ageInput.value;
    const isAgeOk = isOldEnough(age);
    if (isAgeOk) {
        document.location.href = "welcome.html";
    } else {
        alert("You cannot enter");
    }
});

function isOldEnough(ageToCheck) {
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
}