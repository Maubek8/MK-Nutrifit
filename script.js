// Função para processar o texto completo e distribuir nos campos
document.getElementById('processarTexto').addEventListener('click', () => {
    const textoCompleto = document.getElementById('textoCompleto').value;

    // Inicializar variáveis para identificar seções
    let cardapio = '';
    let metabolismo = '';
    let exercicios = '';
    let macros = '';

    // Detectar seções no texto completo
    const linhas = textoCompleto.split('\n');
    let currentSection = '';

    linhas.forEach(linha => {
        linha = linha.trim();
        if (linha.startsWith('Cardápio')) {
            currentSection = 'cardapio';
        } else if (linha.startsWith('Metabolismo')) {
            currentSection = 'metabolismo';
        } else if (linha.startsWith('Exercícios')) {
            currentSection = 'exercicios';
        } else if (linha.startsWith('Macros')) {
            currentSection = 'macros';
        } else {
            // Adicionar a linha na seção atual
            if (currentSection === 'cardapio') {
                cardapio += linha + '\n';
            } else if (currentSection === 'metabolismo') {
                metabolismo += linha + '\n';
            } else if (currentSection === 'exercicios') {
                exercicios += linha + '\n';
            } else if (currentSection === 'macros') {
                macros += linha + '\n';
            }
        }
    });

    // Preencher os campos com os dados processados
    document.getElementById('cardapioArea').value = cardapio.trim();
    document.getElementById('metabolismArea').value = metabolismo.trim();
    document.getElementById('exerciciosArea').value = exercicios.trim();
    document.getElementById('macrosArea').value = macros.trim();

    alert('Texto processado e distribuído nos campos!');
});

// Função para alternar exibição das seções
function toggleContent(buttonId, contentId) {
    document.getElementById(buttonId).addEventListener('click', () => {
        const content = document.getElementById(contentId);
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
}

toggleContent('cardapioButton', 'cardapioContent');
toggleContent('metabolismButton', 'metabolismContent');
toggleContent('exerciciosButton', 'exerciciosContent');
toggleContent('macrosButton', 'macrosContent');

// Salvar os dados
document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataPaciente = document.getElementById('dataPaciente').value;

    const patientPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="
