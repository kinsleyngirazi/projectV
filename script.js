const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const crushNameInput = document.getElementById('crushName');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const messageContainer = document.getElementById('messageContainer');
const nextPageButton = document.getElementById('nextPageButton');
const loveEffect = document.querySelector('.love-effect');

const messages = [
    "Happy Valentine's Day!",
    "I know today is a very special day baby so i decided to work on a little something.",
    "You are my destination in both happiness and sorrow.",
    "if i were to describe all the things i love about you I'd be writing a novel forever.",
    "You're one of the most special human beings I've ever met baby, no one makes me feel the way you make me feel.",
    "i just wanted to to appreciate my beautiful and gorgeuos baby on a special day.",
    "No matter where life takes us, I'll always choose you baby, it's always going to be you.",
    "Happy valentines day my princess, I love you so much😘❤️.",
    "."
];



let currentMessageIndex = 0;

function showMessageWithTypingAnimation() {
    if (currentMessageIndex < messages.length) {
        const text = messages[currentMessageIndex];
        const messageElement = document.createElement('p'); 
        messageElement.classList.add('message'); 
        messageContainer.appendChild(messageElement); 

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                messageElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                currentMessageIndex++;
                if (currentMessageIndex < messages.length) {
                    setTimeout(showMessageWithTypingAnimation, 1000); 
                }
            }
        }, 100); 
    }
}

function createLoveEffect() {
    const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
    for (let i = 0; i < 50; i++) { 
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}

startButton.addEventListener('click', () => {
    const name = crushNameInput.value.trim();
    if (name) {
        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        currentMessageIndex = 0;
        messageContainer.innerHTML = ''; 
        showMessageWithTypingAnimation();
    } else {
        shakeButton();
        alert("enter your name!");
    }
});

nextPageButton.addEventListener('click', () => {
    window.location.href = 'Flower.html';
});

createLoveEffect();