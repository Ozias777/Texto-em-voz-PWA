// Verificar se o navegador suporta a Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Iniciar reconhecimento de voz
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const startBtn = document.getElementById('start-btn');
    const resultPara = document.getElementById('result');

    recognition.lang = 'pt-BR'; // Definir idioma para o reconhecimento de voz

    startBtn.addEventListener('click', () => {
        recognition.start(); // Iniciar o reconhecimento de voz quando o botão é clicado
        resultPara.textContent = 'Ouvindo...';
    });

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript; // Obter o texto reconhecido
        resultPara.textContent = 'Você disse: ' + result; // Exibir o texto reconhecido
    };

    recognition.onerror = function(event) {
        resultPara.textContent = 'Erro ao reconhecer voz. Por favor, tente novamente.';
    };
} else {
    // Se o navegador não suporta a API de reconhecimento de voz
    resultPara.textContent = 'O seu navegador não suporta a API de reconhecimento de voz.';
}
