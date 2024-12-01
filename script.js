// Mostrar/ocultar conteúdo ao clicar nos botões
document.getElementById('metabolismButton').addEventListener('click', () => {
    const content = document.getElementById('metabolismContent');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('refeicoesButton').addEventListener('click', () => {
    const content = document.getElementById('refeicoesContent');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Botão Salvar - Gerar página do paciente
document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const metaPeso = document.getElementById('metaPeso').value;
    const weeklyGoal = (metaPeso / 8).toFixed(2); // Meta semanal de perda de peso

    const metabolismData = document.getElementById('metabolismData').value;

    const segunda = document.getElementById('segunda').value;
    const terca = document.getElementById('terca').value;
    const quarta = document.getElementById('quarta').value;
    const quinta = document.getElementById('quinta').value;
    const sexta = document.getElementById('sexta').value;
    const sabado = document.getElementById('sabado').value;
    const domingo = document.getElementById('domingo').value;

    // Gerar HTML para a página do paciente
    const patientPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nomePaciente} - Dados</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                font-family: 'Roboto', sans-serif;
                background-color: #f8f9fa;
                padding: 1rem;
            }
            .header {
                background: linear-gradient(135deg, #002f6c, #ffc107);
                color: white;
                padding: 1rem;
                text-align: center;
                margin-bottom: 2rem;
            }
            .content-section {
                background: white;
                padding: 1rem;
                margin-bottom: 1.5rem;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h3 {
                margin-bottom: 1rem;
            }
            p {
                margin-bottom: 0.5rem;
            }
        </style>
    </head>
    <body>
        <header class="header">
            <img src="logo.png" alt="MK Logo" style="height: 50px; margin-bottom: 10px;">
            <h1>${nomePaciente}</h1>
        </header>

        <div class="container">
            <!-- Dados de Meta -->
            <div class="content-section">
                <h3>Dados de Meta</h3>
                <p><strong>Data de Início:</strong> ${dataInicio}</p>
                <p><strong>Meta de Perda de Peso:</strong> ${metaPeso} kg</p>
                <p><strong>Meta Semanal:</strong> ${weeklyGoal} kg</p>
            </div>

            <!-- Botão Metabolismo -->
            <div class="content-section">
                <h3>Metabolismo</h3>
                <p>${metabolismData || "Nenhuma informação de metabolismo foi inserida."}</p>
            </div>

            <!-- Refeições -->
            <div class="content-section">
                <h3>Refeições</h3>
                <p><strong>Segunda-feira:</strong> ${segunda || "Nenhuma informação inserida."}</p>
                <p><strong>Terça-feira:</strong> ${terca || "Nenhuma informação inserida."}</p>
                <p><strong>Quarta-feira:</strong> ${quarta || "Nenhuma informação inserida."}</p>
                <p><strong>Quinta-feira:</strong> ${quinta || "Nenhuma informação inserida."}</p>
                <p><strong>Sexta-feira:</strong> ${sexta || "Nenhuma informação inserida."}</p>
                <p><strong>Sábado:</strong> ${sabado || "Nenhuma informação inserida."}</p>
                <p><strong>Domingo:</strong> ${domingo || "Nenhuma informação inserida."}</p>
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
