document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();
    const metabolism = document.getElementById('metabolismArea').value || 'Nenhuma informação adicionada.';
    const exercicios = document.getElementById('exerciciosArea').value || 'Nenhuma informação adicionada.';
    const alternativas = document.getElementById('alternativasArea').value || 'Nenhuma informação adicionada.';
    const refeicoes = Object.entries(cardapios).map(([day, content]) => `
        <button class="btn-day" onclick="showDay('${day}')">${day.charAt(0).toUpperCase() + day.slice(1)}</button>
    `).join('');

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nomePaciente} - Dados</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Roboto', sans-serif; background: #f8f9fa; padding: 1rem; }
                .header { background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem; }
                .container { margin: 1rem; padding: 1rem; background: white; border-radius: 8px; }
                .btn { margin-bottom: 0.5rem; width: 100%; padding: 10px; font-size: 1rem; background-color: #002f6c; color: white; border: none; border-radius: 5px; }
                .btn:hover { background-color: #ffc107; color: black; }
                .day-buttons { display: flex; justify-content: space-around; margin-bottom: 1rem; }
                .btn-day { padding: 5px 10px; background-color: #ffc107; border: none; border-radius: 5px; cursor: pointer; }
                .btn-day:hover { background-color: #ffe57f; }
                .section { display: none; margin-top: 1rem; padding: 1rem; background: white; border: 1px solid #ddd; border-radius: 8px; }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <button class="btn" onclick="toggleVisibility('refeicoesSection')">Refeições</button>
                <div id="refeicoesSection" class="section">
                    <div class="day-buttons">
                        ${refeicoes}
                    </div>
                    <textarea id="refeicoesContent" rows="5" class="form-control"></textarea>
                </div>

                <button class="btn" onclick="toggleVisibility('metabolismSection')">Metabolismo</button>
                <div id="metabolismSection" class="section"><pre>${metabolism}</pre></div>

                <button class="btn" onclick="toggleVisibility('exerciciosSection')">Exercícios</button>
                <div id="exerciciosSection" class="section"><pre>${exercicios}</pre></div>

                <button class="btn" onclick="toggleVisibility('alternativasSection')">Alternativas</button>
                <div id="alternativasSection" class="section"><pre>${alternativas}</pre></div>
            </div>
            <script>
                function toggleVisibility(id) {
                    document.querySelectorAll('.section').forEach(section => {
                        section.style.display = section.id === id ? 'block' : 'none';
                    });
                }

                function showDay(day) {
                    const content = ${JSON.stringify(cardapios)};
                    document.getElementById('refeicoesContent').value = content[day] || 'Nenhum cardápio definido.';
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
