const cardapios = {
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
};

// Mostrar cardápio do dia selecionado
function showDay(day) {
    document.getElementById('cardapioDia').value = cardapios[day] || '';
    document.getElementById('cardapioDia').dataset.currentDay = day;
}

// Salvar cardápio do dia editado
document.getElementById('cardapioDia').addEventListener('input', function () {
    const day = this.dataset.currentDay;
    cardapios[day] = this.value;
});

// Aplicar formatação de texto
function applyFormat(command, value = null) {
    const activeTextarea = document.querySelector('textarea:focus');
    if (activeTextarea) {
        const start = activeTextarea.selectionStart;
        const end = activeTextarea.selectionEnd;
        const text = activeTextarea.value;
        const selectedText = text.substring(start, end);

        let formattedText;
        if (command === 'bold') {
            formattedText = `**${selectedText}**`;
        } else if (command === 'italic') {
            formattedText = `*${selectedText}*`;
        } else if (command === 'foreColor') {
            formattedText = `<span style="color:${value};">${selectedText}</span>`;
        }

        activeTextarea.value =
            text.substring(0, start) + formattedText + text.substring(end);
        activeTextarea.setSelectionRange(start, start + formattedText.length);
    } else {
        alert('Clique em um campo para aplicar a formatação.');
    }
}

// Alternar exibição das seções
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

// Salvar os dados e criar a página do paciente
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
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="header">
            <img src="logo.png" alt="MK Logo" class="logo">
            <h1>MK-CARDIOSPORT</h1>
            <h2 class="h6">NutriFit PRO - Siga o seu Objetivo!</h2>
        </header>
        <main class="container">
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
