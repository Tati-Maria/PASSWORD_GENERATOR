Google font @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');
font-family: 'Source Sans Pro', sans-serif;

color => #7cffc4 => buttons, icon, characters
main background => #101418 => body background color
second background color => #29333d => input color, options background color
text color => #fff => input text, options text color
second color => #434860 => header color, h4 color

charset code => https://net-comber.com/charset.html
<code>
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
</code>

