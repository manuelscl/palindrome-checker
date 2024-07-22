const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.querySelector("#result");

const checkForPalindrome = input => {
    const lowerCaseText = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    if(input === "") {
        alert("Please input a value");
        return;
    }

    result.innerHTML = `<strong>${input}</strong> ${lowerCaseText === [...lowerCaseText].reverse().join("") ? "is" : "is not"} a palindrome`
    result.style.display = "block";
}

checkBtn.addEventListener("click", () => {
    checkForPalindrome(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    if(e.key === "Enter") {
        checkForPalindrome(userInput.value);
        userInput.value = "";
    }
});