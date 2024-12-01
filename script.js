// Alternar visibilidade das seções
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetSection = document.getElementById(targetId);

        // Esconder todas as outras seções
        document.querySelectorAll('.section').forEach(section => {
            if (section !== targetSection) {
                section.style.display = 'none';
            }
        });

        // Alternar visibilidade da seção clicada
        targetSection.style.display = targetSection.style.display === 'block' ? 'none' : 'block';
    });
});

// Salvar página do paciente
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
            <style>
                body { font-family: 'Roboto', sans-serif; background: #f8f9fa; padding: 1rem; }
                .header { background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem; }
                .container { margin: 1rem; padding: 1rem; background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
                .section { display: none; margin-top: 1rem; padding: 1rem; border: 1px solid #ddd; background: white; border-radius: 8px; }
                .btn { margin-bottom: 0.5rem; }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('cardapioSection')">Refeições</button>
                <div id="cardapioSection" class="section"><p>${cardapio}</p></div>
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('metabolismSection')">Metabolismo</button>
                <div id="metabolismSection" class="section"><p>${metabolism}</p></div>
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('exerciciosSection')">Exercícios</button>
                <div id="exerciciosSection" class="section"><p>${exercicios}</p></div>
                <button class="btn btn-primary w-100 mb-3" onclick="toggleVisibility('macrosSection')">Macros</button>
                <div id="macrosSection" class="section"><p>${macros}</p></div>
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
