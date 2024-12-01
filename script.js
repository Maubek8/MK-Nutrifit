document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();
    const metabolism = document.getElementById('metabolismArea').value;
    const exercicios = document.getElementById('exerciciosArea').value;
    const macros = document.getElementById('macrosArea').value;
    const cardapioDia = document.getElementById('cardapioDia').value;

    const css = `
        :root {
            --primary: #002f6c;
            --secondary: #ffc107;
            --background: #f8f9fa;
            --text-color: #333;
        }
        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--background);
            margin: 0;
            padding: 0;
        }
        .header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            text-align: center;
            padding: 1rem;
        }
        .container {
            padding: 1rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        textarea {
            width: 100%;
            border-radius: 8px;
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid #ddd;
        }
    `;

    const js = `
        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const target = document.querySelector(button.dataset.target);
                const isVisible = target.style.display === 'block';
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.style.display = 'none';
                });
                target.style.display = isVisible ? 'none' : 'block';
            });
        });

        function applyFormat(command, value = null) {
            document.execCommand(command, false, value);
        }
    `;

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nomePaciente} - Página do Paciente</title>
            <style>${css}</style>
        </head>
        <body>
            <header class="header">
                <h1>${nomePaciente}</h1>
                <h2>Data: ${dataPaciente}</h2>
            </header>
            <div class="container">
                <h3>Cardápio</h3>
                <p>${cardapioDia}</p>
                <h3>Metabolismo</h3>
                <p>${metabolism}</p>
                <h3>Exercícios</h3>
                <p>${exercicios}</p>
                <h3>Macros</h3>
                <p>${macros}</p>
            </div>
            <script>${js}</script>
        </body>
        </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomePaciente.replace(/\s+/g, '_')}_${dataPaciente}.html`;
    link.click();
});
