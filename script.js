// ====================================
// 1. PumpFun Crypto Analyzer
// ====================================

const linkForm = document.getElementById('link-form');
const pumpfunLinkInput = document.getElementById('pumpfun-link');
const consoleOutput = document.getElementById('console-output');

const analysisTemplates = [
    "Analyzing blockchain patterns...\nRisk assessment in progress...\n\nDuckAI's Advice: After thorough analysis, it appears that this project shows significant potential. Investing might be a wise decision.",
    "Scanning for market anomalies...\nEvaluating community engagement...\n\nDuckAI's Advice: The data suggests caution. It might be best to stay away from this investment opportunity.",
    "Decrypting smart contract code...\nAssessing tokenomics...\n\nDuckAI's Advice: This project has a promising roadmap. Consider investing after further personal research.",
    "Compiling transaction histories...\nLooking for red flags...\n\nDuckAI's Advice: Multiple risks detected. It is advisable to avoid investing in this project.",
    "Examining developer credentials...\nCross-referencing social media...\n\nDuckAI's Advice: The team behind this project seems credible. Investing could be beneficial.",
    "Assessing liquidity pools...\nMonitoring whale activities...\n\nDuckAI's Advice: High volatility detected. Proceed with caution if you choose to invest.",
    "Analyzing market sentiment...\nReading between the lines...\n\nDuckAI's Advice: Sentiment is overwhelmingly positive. This might be a good investment opportunity.",
    "Reviewing audit reports...\nTesting security protocols...\n\nDuckAI's Advice: Security vulnerabilities found. It is recommended to stay away from this project.",
    "Simulating future projections...\nCalculating ROI...\n\nDuckAI's Advice: The return on investment looks favorable. Investing could yield good results.",
    "Investigating past performance...\nComparing with competitors...\n\nDuckAI's Advice: This project doesn't stand out among its peers. Consider other options."
];

linkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const link = pumpfunLinkInput.value.trim();
    if (link === '') {
        alert('Please enter a PumpFun link.');
        return;
    }
    startAnalysis(link);
});

function startAnalysis(link) {
    consoleOutput.innerHTML = '';
    const loadingMessages = [
        `Connecting to PumpFun servers...`,
        `Downloading data from ${link}...`,
        `Decrypting data packets...`,
        `Analyzing blockchain transactions...`,
        `Compiling intelligence reports...`,
        `Applying AI algorithms...`,
        `Generating recommendations...`
    ];

    let index = 0;

    const loadingInterval = setInterval(() => {
        if (index < loadingMessages.length) {
            consoleOutput.innerHTML += loadingMessages[index] + '\n';
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
            index++;
        } else {
            clearInterval(loadingInterval);
            generateAnalysis();
        }
    }, 1000);
}

function generateAnalysis() {
    consoleOutput.innerHTML += '\nAnalysis complete.\n';
    const randomAnalysis = analysisTemplates[Math.floor(Math.random() * analysisTemplates.length)];
    consoleOutput.innerHTML += randomAnalysis + '\n';

    // Create a download button for the analysis
    const downloadBtn = document.createElement('button');
    downloadBtn.id = 'download-btn';
    downloadBtn.textContent = 'Download Analysis';
    downloadBtn.addEventListener('click', () => {
        downloadAnalysis(randomAnalysis);
    });
    document.getElementById('overlay').appendChild(downloadBtn);
}

function downloadAnalysis(analysisText) {
    const blob = new Blob([analysisText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = 'DuckAI_Analysis.txt';
    link.href = window.URL.createObjectURL(blob);
    link.click();
}
