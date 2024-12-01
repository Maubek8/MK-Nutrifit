const cardapios = {
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
};

// Alternar visibilidade das seções
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetSection = document.getElementById(targetId);

        document.querySelectorAll('.section').forEach(section => {
            section.style.display = section === targetSection ? 'block' : 'none';
        });
    });
});

// Exibir cardápio por dia
function showDay(day) {
    document.getElementById('cardapioArea').value = cardapios[day] || '';
    document.getElementById('cardapioArea').dataset.currentDay = day;
}

// Salvar o cardápio do dia editado
document.getElementById('cardapioArea').addEventListener('input', function () {
    const day = this.dataset.currentDay;
    cardapios[day] = this.value;
});

// Salvar página do paciente
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
                .btn { width: 100%; margin-bottom: 10px; padding: 10px; font-size: 1rem; }
                .section { display: none; padding: 10px; margin-top: 10px; }
                pre { white-space: pre-wrap; word-wrap: break-word; }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <button class="btn" onclick="toggleVisibility('metabolism')">Metabolismo</button>
                <div id="metabolism" class="section"><pre>${metabolism}</pre></div>
                <button class="btn" onclick="toggleVisibility('refeicoes')">Refeições</button>
                <div id="refeicoes" class="section">
                    <pre>${Object.entries(cardapios).map(([day, content]) => `${day}: ${content}`).join('\n')}</pre>
                </div>
                <button class="btn" onclick="toggleVisibility('exercicios')">Exercícios</button>
                <div id="exercicios" class="section"><pre>${exercicios}</pre></div>
                <button class="btn" onclick="toggleVisibility('macros')">Macros</button>
                <div id="macros" class="section"><pre>${macros}</pre></div>
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
