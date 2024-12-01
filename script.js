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
    </head>
    <body>
        <header class="header" style="background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem;">
            <img src="logo.png" alt="MK Logo" style="height: 50px; margin-bottom: 10px;">
            <h1>${nomePaciente}</h1>
        </header>

        <div class="container mt-4">
            <!-- Botão Metabolismo -->
            <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('metabolismSection')">Metabolismo</button>
            <div id="metabolismSection" style="display: none;">
                <p>${metabolismData}</p>
            </div>

            <!-- Botão Refeições -->
            <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('refeicoesSection')">Refeições</button>
            <div id="refeicoesSection" style="display: none;">
                <p><strong>Segunda-feira:</strong> ${segunda}</p>
                <p><strong>Terça-feira:</strong> ${terca}</p>
                <p><strong>Quarta-feira:</strong> ${quarta}</p>
                <p><strong>Quinta-feira:</strong> ${quinta}</p>
                <p><strong>Sexta-feira:</strong> ${sexta}</p>
                <p><strong>Sábado:</strong> ${sabado}</p>
                <p><strong>Domingo:</strong> ${domingo}</p>
            </div>
        </div>

        <script>
            function toggleVisibility(id) {
                const section = document.getElementById(id);
                section.style.display = section.style.display === 'block' ? 'none' : 'block';
            }
        </script>
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
