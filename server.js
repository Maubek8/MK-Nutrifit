const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Rota para salvar a página do paciente
app.post('/save-patient', (req, res) => {
    const { nomePaciente, dataPaciente, cardapios, metabolism, exercicios, macros } = req.body;

    const pacientesDir = path.join(__dirname, 'pacientes');
    if (!fs.existsSync(pacientesDir)) {
        fs.mkdirSync(pacientesDir);
    }

    const patientPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nomePaciente} - Dados</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <header class="header">
            <img src="/logo.png" alt="MK Logo" class="logo">
            <h1>MK-CARDIOSPORT</h1>
            <h2 class="h6">NutriFit PRO - Siga o seu Objetivo!</h2>
        </header>
        <main class="container">
            <section>
                <h2>Nome do Paciente</h2>
                <p>${nomePaciente}</p>
                <h2>Data</h2>
                <p>${dataPaciente}</p>
            </section>
            <section>
                <h2>Cardápio</h2>
                ${Object.entries(cardapios).map(([dia, conteudo]) => `
                    <div>
                        <h3>${dia.charAt(0).toUpperCase() + dia.slice(1)}</h3>
                        <pre>${conteudo || "Nenhum cardápio inserido."}</pre>
                    </div>
                `).join('')}
            </section>
            <section>
                <h2>Metabolismo</h2>
                <pre>${metabolism}</pre>
            </section>
            <section>
                <h2>Exercícios</h2>
                <pre>${exercicios}</pre>
            </section>
            <section>
                <h2>Macros</h2>
                <pre>${macros}</pre>
            </section>
        </main>
    </body>
    </html>
    `;

    const filePath = path.join(pacientesDir, `${nomePaciente.replace(/\s+/g, '-').toLowerCase()}.html`);
    fs.writeFileSync(filePath, patientPage, 'utf8');

    res.json({ message: 'Página do paciente criada com sucesso!' });
});

// Rota para listar os pacientes
app.get('/list-patients', (req, res) => {
    const pacientesDir = path.join(__dirname, 'pacientes');
    if (!fs.existsSync(pacientesDir)) {
        return res.json([]);
    }

    const files = fs.readdirSync(pacientesDir).filter(file => file.endsWith('.html'));
    const patientList = files.map(file => ({
        name: file.replace('.html', '').replace(/-/g, ' ').toUpperCase(),
        link: `/pacientes/${file}`,
    }));

    res.json(patientList);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
