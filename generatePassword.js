function asd(int) {

    let psw = [];

    let arr = [
        'ABCDEF',
        'abcdef',
        '123456',
        '!@#$%^'
        ]

    function a() {
        const expendArray = [...arr];
        while(expendArray.length < int) {
            expendArray.push(arr[Math.floor(Math.random() * (arr.length))])
        }
        for(let i = 0; i < expendArray.length; i++) {
            psw.push(expendArray[i][[Math.floor(Math.random() * (arr.length))]])
        }
        psw = psw.sort(() => Math.random() - 0.5);
    }  
    a();  

    return psw.join('');
}

function qwe() {
    console.log(asd(10));
}
         
qwe();

function generatePassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}[]|;:,.<>?';

    let password = '';

    // Генерация по крайней мере одного символа из каждой категории
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Генерация остальных символов
    const remainingLength = length - 4; // Учитываем уже сгенерированные символы
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + symbols;
    for (let i = 0; i < remainingLength; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Перемешивание пароля
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

