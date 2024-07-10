// script.js
document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('output-text').textContent = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('output-text').textContent = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
});

function encrypt(text) {
    const rules = [
        { letter: 'e', code: 'enter' },
        { letter: 'i', code: 'imes' },
        { letter: 'a', code: 'ai' },
        { letter: 'o', code: 'ober' },
        { letter: 'u', code: 'ufat' }
    ];

    let encryptedText = text.toLowerCase();
    rules.forEach(rule => {
        encryptedText = encryptedText.replace(new RegExp(rule.letter, 'g'), rule.code);
    });

    return encryptedText;
}

function decrypt(text) {
    const rules = [
        { letter: 'e', code: 'enter' },
        { letter: 'i', code: 'imes' },
        { letter: 'a', code: 'ai' },
        { letter: 'o', code: 'ober' },
        { letter: 'u', code: 'ufat' }
    ];

    let decryptedText = text.toLowerCase();
    rules.forEach(rule => {
        decryptedText = decryptedText.replace(new RegExp(rule.code, 'g'), rule.letter);
    });

    return decryptedText;
}
