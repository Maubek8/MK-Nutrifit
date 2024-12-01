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
    document.getElementById('cardapioArea').value = cardapios[day] || '';
    document.getElementById('cardapioArea').dataset.currentDay = day;
}

// Salvar o cardápio do dia editado
document.getElementById('cardapioArea').addEventListener('input', function () {
    const day = this.dataset.currentDay;
    cardapios[day] = this.value;
});

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
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nomePaciente} - Dados do Paciente</title>
            <style>${document.querySelector('style').innerHTML}</style>
        </head>
        <body>
            ${document.querySelector('.container').outerHTML}
            <script>
                ${showDay.toString()}
                ${document.querySelectorAll('.toggle-button').forEach}
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
