const passwordBox = document.getElementById('password');
const lenght = 12;

// Uppercase characters
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Lowercase characters
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';

// Digits
const number = '0123456789';

// Symbols
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
const allchar = uppercaseChars +lowercaseChars+number+symbols

function createPassword(){
    let password =''
    password+= uppercaseChars[Math.floor(Math.random()*uppercaseChars.length)]
    password+= lowercaseChars[Math.floor(Math.random()*lowercaseChars.length)]
    password+= number[Math.floor(Math.random()*number.length)]
    password+= symbols[Math.floor(Math.random()*symbols.length)]
    
    while(lenght>password.length){       
        password+= allchar[Math.floor(Math.random()*allchar.length)]
    }
    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}