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

// Aplicar formatação ao texto selecionado
function applyFormat(command, value = null) {
    document.execCommand(command, false, value);
}

// Salvar a página do paciente localmente
document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value.trim() || 'Paciente';
    const dataPaciente = document.getElementById('dataPaciente').value || new Date().toLocaleDateString();
    const metabolism = document.getElementById('metabolismArea').value;
    const exercicios = document.getElementById('exerciciosArea').value;
    const macros = document.getElementById('macrosArea').value;

    const css = document.querySelector('style').innerHTML;
    const content = `
        <div class="form-group">
            <label>Nome do Paciente:</label>
            <p>${nomePaciente}</p>
        </div>
        <div class="form-group">
            <label>Data:</label>
            <p>${dataPaciente}</p>
        </div>
        <div class="accordion-content">
            <h4>Cardápios</h4>
            <pre>${JSON.stringify(cardapios, null, 2)}</pre>
        </div>
        <div class="accordion-content">
            <h4>Metabolismo</h4>
            <p>${metabolism}</p>
        </div>
        <div class="accordion-content">
            <h4>Exercícios</h4>
            <p>${exercicios}</p>
        </div>
        <div class="accordion-content">
            <h4>Macros</h4>
            <p>${macros}</p>
        </div>
    `;

    const blob = new Blob([`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nomePaciente} - Página do Paciente</title>
            <style>${css}</style>
        </head>
        <body>${content}</body>
        </html>
    `], { type: 'text/html' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomePaciente.replace(/\s+/g, '_')}.html`;
    link.click();
});
