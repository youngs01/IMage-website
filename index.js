function validateEmail() {
    const gmailInputHero = document.getElementById('heroInput').value;
    if (gmailInputHero.startsWith('ab') && gmailInputHero.endsWith('@gmail.com')) {
        alert("Thanks, but I am not sending.");
    } else {
        alert("Please write a proper email.");
    }
}

