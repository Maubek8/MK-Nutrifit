document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();
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
            <style>
                body { font-family: 'Roboto', sans-serif; background: #f8f9fa; padding: 1rem; }
                .header { background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem; }
                .container { margin: 1rem; padding: 1rem; background: white; border-radius: 8px; }
                .btn { margin-bottom: 0.5rem; width: 100%; padding: 10px; font-size: 1rem; background-color: #002f6c; color: white; border: none; border-radius: 5px; }
                .btn:hover { background-color: #ffc107; color: black; }
                .section { display: none; margin-top: 1rem; padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; }
                pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
                .day-buttons { display: flex; justify-content: space-around; margin-bottom: 1rem; }
                .btn-day { padding: 5px 10px; background-color: #ffc107; border: none; border-radius: 5px; cursor: pointer; }
                .btn-day:hover { background-color: #ffe57f; }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <!-- Refeições com Botões -->
                <button class="btn" onclick="toggleVisibility('refeicoesSection')">Refeições</button>
                <div id="refeicoesSection" class="section">
                    <div class="day-buttons">
                        <button class="btn-day" onclick="showDay('segunda')">Segunda</button>
                        <button class="btn-day" onclick="showDay('terca')">Terça</button>
                        <button class="btn-day" onclick="showDay('quarta')">Quarta</button>
                        <button class="btn-day" onclick="showDay('quinta')">Quinta</button>
                        <button class="btn-day" onclick="showDay('sexta')">Sexta</button>
                        <button class="btn-day" onclick="showDay('sabado')">Sábado</button>
                        <button class="btn-day" onclick="showDay('domingo')">Domingo</button>
                    </div>
                    <textarea id="refeicoesContent" rows="5" class="form-control"></textarea>
                </div>

                <!-- Outras Seções -->
                <button class="btn" onclick="toggleVisibility('metabolism')">Metabolismo</button>
                <div id="metabolism" class="section"><pre>${metabolism}</pre></div>

                <button class="btn" onclick="toggleVisibility('exercicios')">Exercícios</button>
                <div id="exercicios" class="section"><pre>${exercicios}</pre></div>

                <button class="btn" onclick="toggleVisibility('macros')">Macros</button>
                <div id="macros" class="section"><pre>${macros}</pre></div>
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
