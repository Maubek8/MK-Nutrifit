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

// Salvar os dados e enviar ao servidor
document.getElementById('saveButton').addEventListener('click', () => {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataPaciente = document.getElementById('dataPaciente').value;
    const metabolism = document.getElementById('metabolismArea').value;
    const exercicios = document.getElementById('exerciciosArea').value;
    const macros = document.getElementById('macrosArea').value;

    const requestData = {
        nomePaciente,
        dataPaciente,
        cardapios,
        metabolism,
        exercicios,
        macros,
    };

    fetch('/save-patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadPatientList(); // Atualiza a lista de pacientes
        })
        .catch(error => {
            console.error('Erro ao salvar os dados:', error);
        });
});

// Função para carregar a lista de pacientes salvos
function loadPatientList() {
    fetch('/list-patients')
        .then(response => response.json())
        .then(patients => {
            const patientList = document.getElementById('patientList');
            patientList.innerHTML = '';

            patients.forEach(patient => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';

                listItem.innerHTML = `
                    <span>${patient.name}</span>
                    <a href="${patient.link}" target="_blank" class="btn btn-primary btn-sm">Acessar</a>
                `;

                patientList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar a lista de pacientes:', error);
        });
}

// Carregar a lista de pacientes ao carregar a página
document.addEventListener('DOMContentLoaded', loadPatientList);
