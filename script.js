// Mostrar/ocultar conteúdo ao clicar nos botões
document.getElementById('cardapioButton').addEventListener('click', () => {
    const content = document.getElementById('cardapioContent');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('metabolismButton').addEventListener('click', () => {
    const content = document.getElementById('metabolismContent');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Função para mostrar o dia selecionado
const cardapios = {};
function showDay(day) {
    document.getElementById('cardapioDia').value = cardapios[day] || '';
    document.getElementById('cardapioDia').dataset.currentDay = day;
}

// Salvar cardápio do dia selecionado
document.getElementById('cardapioDia').addEventListener('input', function () {
    const day = this.dataset.currentDay;
    cardapios[day] = this.value;
});

// Botão Salvar - Gerar página do paciente
document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const metabolismData = document.getElementById('metabolismData').value;

    // Gerar conteúdo HTML para o paciente
    const patientPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nomePaciente} - Dados</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <header class="header" style="background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem;">
            <img src="logo.png" alt="MK Logo" style="height: 50px; margin-bottom: 10px;">
            <h1>${nomePaciente}</h1>
        </header>

        <div class="container">
            <!-- Cardápio -->
            <div class="content-section">
                <h3>Cardápio</h3>
                ${Object.entries(cardapios).map(([day, content]) => `
                    <h4>${day.charAt(0).toUpperCase() + day.slice(1)}:</h4>
                    <p>${content || "Nenhuma informação inserida."}</p>
                `).join('')}
            </div>

            <!-- Informações Metabólicas -->
            <div class="content-section">
                <h3>Informações Metabólicas</h3>
                <p>${metabolismData || "Nenhuma informação de metabolismo foi inserida."}</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Baixar como arquivo
    const blob = new Blob([patientPage], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomePaciente.replace(/\s+/g, '-').toLowerCase()}.html`;
    link.click();
});
