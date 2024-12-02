document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MK-CARDIOSPORT - Dados do Paciente</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Roboto', sans-serif; background: #f8f9fa; padding: 1rem; }
                .header { background: linear-gradient(135deg, #002f6c, #ffc107); color: white; text-align: center; padding: 1rem; }
                .header img { height: 50px; margin-bottom: 10px; }
                .container { margin: 1rem; padding: 1rem; background: white; border-radius: 8px; }
                .btn { margin-bottom: 0.5rem; width: 100%; padding: 10px; font-size: 1rem; background-color: #002f6c; color: white; border: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <header class="header">
                <img src="logo.png" alt="MK Logo">
                <h1>MK-CARDIOSPORT</h1>
                <h2>MK-NutriFit - Siga o seu objetivo!</h2>
            </header>
            <div class="container">
                <!-- Conteúdo Gerado -->
            </div>
        </body>
        </html>
    `;
    // Salvar o HTML gerado
});
