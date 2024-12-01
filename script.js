const cardapios = {
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
};

// Mostrar o cardápio do dia selecionado
function showDay(day) {
    document.getElementById('cardapioDia').value = cardapios[day] || '';
    document.getElementById('cardapioDia').dataset.currentDay = day;
}

// Salvar o cardápio do dia editado
document.getElementById('cardapioDia').addEventListener('input', function () {
    const day = this.dataset.currentDay;
    cardapios[day] = this.value;
});

// Funções para formatar texto
function formatText(command) {
    document.execCommand(command, false, null);
}

function changeColor(color) {
    document.execCommand('foreColor', false, color);
}

// Alternar exibição das seções
function toggleContent(buttonId, contentId) {
    document.getElementById(buttonId).addEventListener('click', () => {
        const content = document.getElementById(contentId);
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
}

toggleContent('cardapioButton', 'cardapioContent');
toggleContent('metabolismButton', 'metabolismContent');
toggleContent('exerciciosButton', 'exerciciosContent');
toggleContent('macrosButton', 'macrosContent');

// Salvar os dados
document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataPaciente = document.getElementById('dataPaciente').value;

    const patientPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nomePaciente} - Dados</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>${nomePaciente}</h1>
            <p>Data: ${dataPaciente}</p>
        </header>
        <main>
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
                <pre>${document.getElementById('metabolismArea').value}</pre>
            </section>
            <section>
                <h2>Exercícios</h2>
                <pre>${document.getElementById('exerciciosArea').value}</pre>
            </section>
            <section>
                <h2>Macros</h2>
                <pre>${document.getElementById('macrosArea').value}</pre>
            </section>
        </main>
    </body>
    </html>
    `;

    const blob = new Blob([patientPage], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomePaciente.replace(/\s+/g, '-').toLowerCase()}.html`;
    link.click();
});
