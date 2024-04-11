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

// Função para salvar as configurações do aplicativo
function salvarConfiguracoes() {
    // Obter o valor das configurações selecionadas
    var notificacoes = document.getElementById('notificacoes').checked;
    var idioma = document.getElementById('idioma').value;
    var tema = document.getElementById('tema').value;

    // Salvar as configurações em localStorage ou enviar para o servidor, dependendo da necessidade
    // Exemplo: localStorage.setItem('configuracoes', JSON.stringify({ notificacoes: notificacoes, idioma: idioma, tema: tema }));
    alert('Configurações salvas com sucesso!');
    
    // Aplicar o tema selecionado
    aplicarTema(tema);
}

// Função para aplicar o tema selecionado
function aplicarTema(tema) {
    // Remover todas as classes de tema do body
    document.body.classList.remove('tema-padrao');
    document.body.classList.remove('tema-escuro');
    
    // Adicionar a classe de tema correspondente ao body
    if (tema === 'padrao') {
        document.body.classList.add('tema-padrao');
    } else if (tema === 'escuro') {
        document.body.classList.add('tema-escuro');
    }
}

// Evento de clique no botão de salvar configurações
document.getElementById('btn-salvar').addEventListener('click', salvarConfiguracoes);

// Aplicar o tema selecionado ao carregar a página
window.onload = function() {
    var temaSelecionado = document.getElementById('tema').value;
    aplicarTema(temaSelecionado);
};
