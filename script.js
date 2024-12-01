document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();
    const cardapio = document.getElementById('cardapioArea').value || 'Nenhuma informação adicionada.';
    const metabolism = document.getElementById('metabolismArea').value || 'Nenhuma informação adicionada.';
    const exercicios = document.getElementById('exerciciosArea').value || 'Nenhuma informação adicionada.';
    const macros = document.getElementById('macrosArea').value || 'Nenhuma informação adicionada.';

    const html = `
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
                    margin: 0;
                    padding: 0;
                }
                .header {
                    background: linear-gradient(135deg, #002f6c, #ffc107);
                    color: white;
                    text-align: center;
                    padding: 1rem;
                }
                .container {
                    margin: 1rem;
                    padding: 1rem;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                }
                button {
                    margin-bottom: 0.5rem;
                }
                .section {
                    display: none;
                    padding: 1rem;
                    border: 1px solid #ddd;
                    background-color: white;
                    border-radius: 8px;
                    margin-top: 1rem;
                }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('metabolismSection')">Metabolismo</button>
                <div id="metabolismSection" class="section">
                    <p>${metabolism}</p>
                </div>
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('refeicoesSection')">Refeições</button>
                <div id="refeicoesSection" class="section">
                    <p>${cardapio}</p>
                </div>
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('exerciciosSection')">Exercícios</button>
                <div id="exerciciosSection" class="section">
                    <p>${exercicios}</p>
                </div>
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('macrosSection')">Macros</button>
                <div id="macrosSection" class="section">
                    <p>${macros}</p>
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

    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomePaciente.replace(/\s+/g, '_')}_dados.html`;
    link.click();
});
