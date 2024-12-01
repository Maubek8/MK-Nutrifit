// script.js

// Simulação de navegação
function navigateTo(section) {
    alert(`Abrindo a seção: ${section}`);
}

// Função para criar a página do paciente
function createPatientPage() {
    const patientName = prompt("Insira o nome do paciente:");
    if (patientName) {
        alert(`Página criada: /${patientName.toLowerCase().replace(/\s/g, '')}`);
        // Aqui você pode usar lógica para redirecionar ou gerar conteúdo dinâmico.
    } else {
        alert("Nome do paciente não fornecido.");
    }
}
