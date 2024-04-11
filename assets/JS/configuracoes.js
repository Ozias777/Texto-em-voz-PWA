// Função para salvar as configurações do aplicativo
function salvarConfiguracoes() {
    // Obter o valor das configurações selecionadas
    var notificacoes = document.getElementById('notificacoes').checked;
    var idioma = document.getElementById('idioma').value;
    var tema = document.getElementById('tema').value;

    // Salvar as configurações em localStorage ou enviar para o servidor, dependendo da necessidade
    // Exemplo: localStorage.setItem('configuracoes', JSON.stringify({ notificacoes: notificacoes, idioma: idioma, tema: tema }));
    alert('Configurações salvas com sucesso!');
}

// Evento de clique no botão de salvar configurações
document.getElementById('btn-salvar').addEventListener('click', salvarConfiguracoes);
