// ====================================
// 1. ASCII DuckAI Animation
// ====================================

const asciiDuckElement = document.getElementById('ascii-duck');
const duckFrames = [
`       __
      <(o )___
       ( ._> /
        '---'`,
`       __
      <( o)___
       ( ._> /
        '---'`,
`       __
      <(  o)___
       ( ._> /
        '---'`,
`       __
      <(   o)___
       ( ._> /
        '---'`,
`       __
      <(    o)___
       ( ._> /
        '---'`,
`       __
      <(     o)___
       ( ._> /
        '---'`,
`       __
      <(      o)___
       ( ._> /
        '---'`,
`       __
      <(       o)___
       ( ._> /
        '---'`,
`       __
      <(        o)___
       ( ._> /
        '---'`
];

let frameIndex = 0;

// Function to animate the ASCII duck
function animateDuck() {
    asciiDuckElement.textContent = duckFrames[frameIndex];
    frameIndex = (frameIndex + 1) % duckFrames.length;
}

// Animate duck every 200ms
setInterval(animateDuck, 200);

// Interactive effect on mouse move
document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    const scale = 1 + y * 0.2;
    asciiDuckElement.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${x * 10}deg)`;
});

// ====================================
// 2. AI-Inspired Background Animation
// ====================================

const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
let width, height;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const particles = [];
const particleCount = 150;

// Create particles
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 0.5
    });
}

function drawBackground() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#00ff00';
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(drawBackground);
}
drawBackground();

// ====================================
// 3. Egg Hatching Feature
// ====================================

const eggMessages = [
    "Welcome to the world of $DUCKY!",
    "DuckAI says: Quack! Time to explore AI.",
    "An egg has hatched! Discover new possibilities.",
    "DuckAI's tip: Keep swimming forward.",
    "You've unlocked a new feature!",
    "Embrace the future with DuckAI.",
    "Your crypto journey begins now!",
    "The egg cracks open with wisdom.",
    "Dive into the data lake!",
    "Hatch success! Let's innovate."
];

function hatchEgg() {
    const randomMessage = eggMessages[Math.floor(Math.random() * eggMessages.length)];
    displayMessage(randomMessage);
}

document.getElementById('hatch-btn').addEventListener('click', hatchEgg);

// ====================================
// 4. Interact with DuckAI
// ====================================

const interactMessages = [
    "DuckAI is thinking...",
    "Analyzing blockchain data...",
    "Scanning for market trends...",
    "Optimizing neural networks...",
    "Compiling smart contracts...",
    "Connecting to decentralized nodes...",
    "Encrypting messages...",
    "Mining new blocks...",
    "Processing AI algorithms...",
    "Synchronizing with $DUCKY ledger..."
];

function interactWithDuckAI() {
    const randomMessage = interactMessages[Math.floor(Math.random() * interactMessages.length)];
    displayMessage(randomMessage);
}

document.getElementById('interact-btn').addEventListener('click', interactWithDuckAI);

// ====================================
// 5. Display Message Function
// ====================================

function displayMessage(message) {
    let messageBox = document.getElementById('message-box');
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.id = 'message-box';
        document.body.appendChild(messageBox);
    }
    messageBox.textContent = message;
    messageBox.style.opacity = '1';

    // Fade out after 3 seconds
    setTimeout(() => {
        messageBox.style.opacity = '0';
    }, 3000);
}

// ====================================
// 6. Window Resize Handling
// ====================================

window.addEventListener('resize', () => {
    resizeCanvas();
});
