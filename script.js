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

        // Alternar a visibilidade da seção clicada
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
            <title>${nomePaciente} - Dados do Paciente</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f8f9fa; padding: 1rem; }
                .header { background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem; }
                .container { background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); padding: 1rem; }
                .section { display: none; margin-top: 1rem; padding: 1rem; background: #fff; border: 1px solid #ddd; border-radius: 8px; }
                .btn { margin-bottom: 0.5rem; }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="cardapioSection">Refeições</button>
                <div id="cardapioSection" class="section">
                    <h3>Cardápio</h3>
                    <p>${cardapio}</p>
                </div>

                <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="metabolismSection">Metabolismo</button>
                <div id="metabolismSection" class="section">
                    <h3>Metabolismo</h3>
                    <p>${metabolism}</p>
                </div>

                <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="exerciciosSection">Exercícios</button>
                <div id="exerciciosSection" class="section">
                    <h3>Exercícios</h3>
                    <p>${exercicios}</p>
                </div>

                <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="macrosSection">Macros</button>
                <div id="macrosSection" class="section">
                    <h3>Macros</h3>
                    <p>${macros}</p>
                </div>
            </div>
            <script>
                document.querySelectorAll('.toggle-button').forEach(button => {
                    button.addEventListener('click', () => {
                        const targetId = button.dataset.target;
                        const targetSection = document.getElementById(targetId);

                        document.querySelectorAll('.section').forEach(section => {
                            section.style.display = section === targetSection && section.style.display !== 'block' ? 'block' : 'none';
                        });
                    });
                });
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
