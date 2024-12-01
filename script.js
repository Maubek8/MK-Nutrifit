// Função para carregar seções dinâmicas
function loadSection(section) {
    const content = document.getElementById("dynamic-content");

    switch (section) {
        case "dados-gerais":
            content.innerHTML = `
                <h3>Preencha os Dados Gerais</h3>
                <form id="dadosGeraisForm">
                    <label for="patientName">Nome do Paciente:</label>
                    <input type="text" id="patientName" name="patientName" required>

                    <label for="weight">Peso (kg):</label>
                    <input type="number" id="weight" name="weight" step="0.1" required>

                    <label for="height">Altura (m):</label>
                    <input type="number" id="height" name="height" step="0.01" required>

                    <label for="imc">IMC (opcional):</label>
                    <input type="number" id="imc" name="imc" step="0.1" readonly>

                    <label for="tmb">TMB (opcional):</label>
                    <input type="number" id="tmb" name="tmb" step="0.1" readonly>

                    <label for="bodyComposition">Composição Corporal:</label>
                    <textarea id="bodyComposition" name="bodyComposition" rows="4"></textarea>

                    <button type="button" onclick="calculateIMC()">Calcular IMC</button>
                    <button type="submit">Salvar Dados</button>
                </form>
            `;
            break;

        case "gasto-energetico":
            content.innerHTML = `<h3>Gasto Energético</h3><p>Aqui será a seção para gasto energético.</p>`;
            break;

        case "macros":
            content.innerHTML = `<h3>Distribuição de Macros</h3><p>Aqui será a seção para distribuição de macros.</p>`;
            break;

        case "graficos":
            content.innerHTML = `<h3>Gráficos</h3><p>Aqui será a seção para gráficos.</p>`;
            break;

        case "refeicoes":
            content.innerHTML = `<h3>Refeições</h3><p>Aqui será a seção para planejamento de refeições.</p>`;
            break;

        case "alternativas":
            content.innerHTML = `<h3>Alternativas</h3><p>Aqui será a seção para alternativas alimentares.</p>`;
            break;

        default:
            content.innerHTML = `<h3>Bem-vindo!</h3><p>Selecione uma seção acima.</p>`;
    }
}

// Cálculo de IMC (mesmo código do exemplo anterior)
function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        alert("Por favor, preencha peso e altura!");
        return;
    }

    const imc = (weight / (height * height)).toFixed(1);
    document.getElementById("imc").value = imc;
    alert(`IMC calculado: ${imc}`);
}

