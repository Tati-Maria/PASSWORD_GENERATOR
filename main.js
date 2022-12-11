const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const symbolEl = document.getElementById("symbol");
const numberEl = document.getElementById("numbers");
const generateButton = document.getElementById("btn");
const clipboardBtn = document.querySelector(".icon");

//clipboard 

clipboardBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const passWord = passwordEl.textContent;

    if(!passWord) {
        return;
    }

    textarea.value = passWord;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Copied!")
})

//Function which generate random Lowercase, UpperCase, Number and Symbol character

const getLowCharacter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getUpperCharacter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatorFunc = {
    lower: getLowCharacter,
    upper: getUpperCharacter,
    symbol: getRandomSymbol,
    number: getRandomNumber
}

//Generate Password Function

const generatePassword = (lower, upper, number, symbol, length) => {
    //create a variable that will hold the new password
    let generatedPassword = "";
    // it will check all the checkboxes to return the wanted pw format 
    const typesCount = lower + upper + number + symbol;
    //filtering the checkboxes
    const typesArr = [
        {
            lower
        },
        {
            upper
        },
        {
            number
        },
        {
            symbol
        }
    ].filter(item => Object.values(item)[0])

    if(typesCount === 0) {
        return "";
    }
    //looping thru the functions to generate a password 

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += generatorFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

}

generateButton.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasSymbol = symbolEl.checked;
    const hasNumber = numberEl.checked;

    passwordEl.textContent = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});