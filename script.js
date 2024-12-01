document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();
    const metabolism = document.getElementById('metabolismArea').value || 'Nenhuma informação adicionada.';
    const exercicios = document.getElementById('exerciciosArea').value || 'Nenhuma informação adicionada.';
    const macros = document.getElementById('macrosArea').value || 'Nenhuma informação adicionada.';
    const cardapioDia = document.getElementById('cardapioDia').value || 'Nenhuma informação adicionada.';

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nomePaciente} - Página do Paciente</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                .header {
                    background: linear-gradient(135deg, #002f6c, #ffc107);
                    color: white;
                    text-align: center;
                    padding: 1rem;
                }
                .container {
                    margin-top: 1rem;
                }
                .btn {
                    margin-bottom: 0.5rem;
                }
                .section {
                    display: none;
                }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <!-- Botões -->
                <button class="btn btn-primary w-100" onclick="toggleVisibility('metabolism')">Metabolismo</button>
                <div id="metabolism" class="section">
                    <p>${metabolism}</p>
                </div>
                <button class="btn btn-primary w-100" onclick="toggleVisibility('refeicoes')">Refeições</button>
                <div id="refeicoes" class="section">
                    <p>${cardapioDia}</p>
                </div>
                <button class="btn btn-primary w-100" onclick="toggleVisibility('exercicios')">Exercícios</button>
                <div id="exercicios" class="section">
                    <p>${exercicios}</p>
                </div>
                <button class="btn btn-primary w-100" onclick="toggleVisibility('macros')">Macros</button>
                <div id="macros" class="section">
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
    link.download = `${nomePaciente.replace(/\s+/g, '_')}_pagina.html`;
    link.click();
});
