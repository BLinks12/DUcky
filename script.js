// ====================================
// 1. PumpFun Crypto Analyzer with Enhanced Features
// ====================================

// Elements
const linkForm = document.getElementById('link-form');
const pumpfunLinkInput = document.getElementById('pumpfun-link');
const consoleOutput = document.getElementById('console-output');
const visualizationContainer = document.getElementById('visualization-container');
const neuralCanvas = document.getElementById('neural-network-canvas');
const progressBar = document.getElementById('progress-bar');
const chatbotContainer = document.getElementById('chatbot-container');

// Analysis Templates
function createDetailedAnalysis() {
    const riskScore = (Math.random() * 100).toFixed(2);
    const predictedROI = (Math.random() * 200 - 50).toFixed(2);
    const confidenceInterval = (Math.random() * 10 + 90).toFixed(2);

    return `
DuckAI Comprehensive Analysis Report:

- Risk Score: ${riskScore}/100
- Predicted ROI: ${predictedROI}%
- Confidence Level: ${confidenceInterval}%

Key Findings:
1. Market volatility is ${riskScore > 50 ? 'high' : 'low'}, affecting potential returns.
2. Sentiment analysis indicates a ${predictedROI > 0 ? 'positive' : 'negative'} outlook.
3. AI models predict a ${confidenceInterval}% confidence in these results.

Recommendations:
${riskScore > 50 ? 'Proceed with caution. Further due diligence is advised.' : 'Investment opportunity appears favorable.'}

*This report was generated using DuckAI's proprietary machine learning algorithms.*
`;
}

// Event Listener for Form Submission
linkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const link = pumpfunLinkInput.value.trim();
    if (link === '') {
        alert('Please enter a PumpFun link.');
        return;
    }
    startAnalysis(link);
});

// Start Analysis Function
function startAnalysis(link) {
    consoleOutput.innerHTML = '';
    visualizationContainer.classList.remove('hidden');
    animateNeuralNetwork();
    animateProgressBar();
    chatbotContainer.classList.add('hidden');
    const loadingMessages = [
        `Initializing DuckAI Neural Networks...\n`,
        `Processing data from ${link}...\n`,
        `Performing Deep Learning Analysis...\n`,
        `Applying Predictive Modeling Algorithms...\n`,
        `Finalizing Report Generation...\n`
    ];

    function displayNextMessage(i) {
        if (i < loadingMessages.length) {
            displayConsoleMessage(loadingMessages[i], () => {
                displayNextMessage(i + 1);
            });
        } else {
            setTimeout(() => {
                generateAnalysis();
            }, 1000);
        }
    }

    displayNextMessage(0);
}

// Typing Effect for Console Messages
function displayConsoleMessage(message, callback) {
    let index = 0;
    const interval = setInterval(() => {
        consoleOutput.innerHTML += message.charAt(index);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        index++;
        if (index === message.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50);
}

// Generate Analysis Function
function generateAnalysis() {
    consoleOutput.innerHTML += '\nAnalysis complete.\n';
    const analysis = createDetailedAnalysis();
    consoleOutput.innerHTML += analysis + '\n';

    // Stop animations
    stopNeuralNetworkAnimation();
    stopProgressBar();

    // Create a download button for the analysis
    const downloadBtn = document.createElement('button');
    downloadBtn.id = 'download-btn';
    downloadBtn.textContent = 'Download Analysis';
    downloadBtn.addEventListener('click', () => {
        downloadAnalysis(analysis);
    });
    document.getElementById('overlay').appendChild(downloadBtn);

    // Show chatbot
    chatbotContainer.classList.remove('hidden');
}

// Download Analysis Function
function downloadAnalysis(analysisText) {
    const blob = new Blob([analysisText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = 'DuckAI_Analysis.txt';
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// ====================================
// 2. Neural Network Animation
// ====================================

let neuralCtx = neuralCanvas.getContext('2d');
let neuralWidth, neuralHeight;
let nodes = [];
let neuralAnimationFrame;

function resizeNeuralCanvas() {
    neuralWidth = neuralCanvas.width = neuralCanvas.clientWidth;
    neuralHeight = neuralCanvas.height = neuralCanvas.clientHeight;
}
window.addEventListener('resize', resizeNeuralCanvas);
resizeNeuralCanvas();

function createNeuralNetworkNodes() {
    nodes = [];
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * neuralWidth,
            y: Math.random() * neuralHeight,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 2 + 1
        });
    }
}

function animateNeuralNetwork() {
    createNeuralNetworkNodes();
    function drawNeuralNetwork() {
        neuralCtx.clearRect(0, 0, neuralWidth, neuralHeight);
        neuralCtx.fillStyle = '#00ff00';

        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Wrap around edges
            if (node.x < 0) node.x = neuralWidth;
            if (node.x > neuralWidth) node.x = 0;
            if (node.y < 0) node.y = neuralHeight;
            if (node.y > neuralHeight) node.y = 0;

            neuralCtx.beginPath();
            neuralCtx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            neuralCtx.fill();
        });

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    neuralCtx.strokeStyle = `rgba(0, 255, 0, ${1 - distance / 100})`;
                    neuralCtx.beginPath();
                    neuralCtx.moveTo(nodes[i].x, nodes[i].y);
                    neuralCtx.lineTo(nodes[j].x, nodes[j].y);
                    neuralCtx.stroke();
                }
            }
        }

        neuralAnimationFrame = requestAnimationFrame(drawNeuralNetwork);
    }
    neuralAnimationFrame = requestAnimationFrame(drawNeuralNetwork);
}

function stopNeuralNetworkAnimation() {
    cancelAnimationFrame(neuralAnimationFrame);
}

// ====================================
// 3. Progress Bar Animation
// ====================================

let progress = 0;
let progressInterval;

function animateProgressBar() {
    progress = 0;
    progressBar.style.width = '0%';
    progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += Math.random() * 5;
            progressBar.style.width = progress + '%';
        } else {
            clearInterval(progressInterval);
        }
    }, 200);
}

function stopProgressBar() {
    clearInterval(progressInterval);
    progressBar.style.width = '100%';
}

// ====================================
// 4. Chatbot Functionality
// ====================================

const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');

chatbotInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const userMessage = this.value.trim();
        if (userMessage !== '') {
            addChatbotMessage('User', userMessage);
            this.value = '';
            generateChatbotResponse(userMessage);
        }
    }
});

function addChatbotMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateChatbotResponse(userMessage) {
    const responses = [
        "Based on my analysis, the project shows promise.",
        "Caution is advised. Further research is recommended.",
        "Our AI models indicate potential for growth.",
        "The market trends are favorable.",
        "Risk factors are high; proceed carefully.",
        "Investment could yield good returns."
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => {
        addChatbotMessage('DuckAI', response);
    }, 1000);
}
