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
    const cardapio = document.getElementById('cardapioArea').value;
    const metabolism = document.getElementById('metabolismArea').value;
    const exercicios = document.getElementById('exerciciosArea').value;
    const macros = document.getElementById('macrosArea').value;

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nomePaciente} - Dados do Paciente</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 1rem; background-color: #f8f9fa; }
                .container { margin: auto; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${nomePaciente}</h1>
                <p><strong>Data:</strong> ${dataPaciente}</p>
                <h2>Cardápio</h2>
                <p>${cardapio}</p>
                <h2>Metabolismo</h2>
                <p>${metabolism}</p>
                <h2>Exercícios</h2>
                <p>${exercicios}</p>
                <h2>Macros</h2>
                <p>${macros}</p>
            </div>
        </body>
        </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomePaciente.replace(/\s+/g, '_')}_dados.html`;
    link.click();
});
