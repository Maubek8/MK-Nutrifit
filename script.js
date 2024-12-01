document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataAtual = new Date().toLocaleDateString(); // Capturar a data atual
    const cardapiosFormatados = Object.entries(cardapios).map(([dia, conteudo]) => `
        <div class="content-section">
            <h4>${dia.charAt(0).toUpperCase() + dia.slice(1)}</h4>
            <pre>${conteudo || "Nenhum cardápio inserido."}</pre>
        </div>
    `).join('');

    // Gerar HTML para o paciente com nome, data e layout dinâmico
    const patientPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nomePaciente} - Dados</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            :root {
                --primary: #002f6c;
                --secondary: #ffc107;
                --background: #f8f9fa;
            }
            body {
                font-family: 'Roboto', sans-serif;
                background-color: var(--background);
                padding: 1rem;
            }
            .header {
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                text-align: center;
                padding: 1rem;
                margin-bottom: 2rem;
            }
            .content-section {
                background: white;
                padding: 1rem;
                margin-bottom: 1.5rem;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h3, h4 {
                margin-bottom: 1rem;
            }
            pre {
                background: #f8f9fa;
                padding: 1rem;
                border-radius: 8px;
            }
            .nav-buttons {
                display: flex;
                justify-content: center;
                gap: 1rem;
                margin-bottom: 2rem;
            }
            .nav-buttons button {
                background: var(--primary);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                transition: background 0.3s;
            }
            .nav-buttons button:hover {
                background: var(--secondary);
                color: var(--primary);
            }
            .hidden {
                display: none;
            }
        </style>
    </head>
    <body>
        <header class="header">
            <img src="logo.png" alt="MK Logo" style="height: 50px; margin-bottom: 10px;">
            <h1>${nomePaciente}</h1>
            <p><strong>Data:</strong> ${dataAtual}</p>
        </header>

        <div class="container">
            <div class="nav-buttons">
                <button onclick="showSection('cardapio')">Cardápio</button>
                <button onclick="showSection('dados')">Dados Metabólicos</button>
            </div>

            <div id="cardapio" class="content-section">
                <h3>Cardápio</h3>
                ${cardapiosFormatados}
            </div>

            <div id="dados" class="content-section hidden">
                <h3>Informações Metabólicas</h3>
                <p>${document.getElementById('metabolismData').value || "Nenhuma informação inserida."}</p>
            </div>
        </div>

        <script>
            // Função para alternar entre seções
            function showSection(sectionId) {
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.add('hidden');
                });
                document.getElementById(sectionId).classList.remove('hidden');
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
