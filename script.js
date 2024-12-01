function generatePatientPage(patientName, patientData) {
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
        .logo {
            width: 80px;
            height: auto;
            margin-bottom: 1rem;
        }
        .container {
            padding: 1rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            margin: 1rem;
        }
        .accordion-content {
            display: none;
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid var(--background);
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .btn {
            margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .logo {
                width: 50px;
            }
            textarea {
                font-size: 14px;
            }
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

        const cardapios = {
            segunda: "", terca: "", quarta: "", quinta: "", sexta: "", sabado: "", domingo: "",
        };

        function showDay(day) {
            document.getElementById('cardapioDia').value = cardapios[day] || '';
            document.getElementById('cardapioDia').dataset.currentDay = day;
        }

        document.getElementById('cardapioDia').addEventListener('input', function () {
            const day = this.dataset.currentDay;
            cardapios[day] = this.value;
        });
    `;

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${patientName} - Página do Paciente</title>
            <style>${css}</style>
        </head>
        <body>
            <header class="header">
                <img src="logo.png" alt="MK Logo" class="logo">
                <h1>${patientName}</h1>
                <h2 class="h6">Data: ${new Date().toLocaleDateString()}</h2>
            </header>
            <main class="container">
                <button class="btn btn-primary toggle-button w-100" data-target="#refeicoes">Refeições</button>
                <div id="refeicoes" class="accordion-content">
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-outline-primary" onclick="showDay('segunda')">Segunda</button>
                        <button class="btn btn-outline-primary" onclick="showDay('terca')">Terça</button>
                        <button class="btn btn-outline-primary" onclick="showDay('quarta')">Quarta</button>
                        <button class="btn btn-outline-primary" onclick="showDay('quinta')">Quinta</button>
                        <button class="btn btn-outline-primary" onclick="showDay('sexta')">Sexta</button>
                        <button class="btn btn-outline-primary" onclick="showDay('sabado')">Sábado</button>
                        <button class="btn btn-outline-primary" onclick="showDay('domingo')">Domingo</button>
                    </div>
                    <textarea id="cardapioDia" class="form-control" rows="5" placeholder="Insira o cardápio para o dia selecionado"></textarea>
                </div>

                <button class="btn btn-primary toggle-button w-100" data-target="#suplementos">Suplementos</button>
                <div id="suplementos" class="accordion-content">
                    <textarea class="form-control" rows="5" placeholder="Insira os suplementos..."></textarea>
                </div>

                <button class="btn btn-primary toggle-button w-100" data-target="#exercicios">Exercícios</button>
                <div id="exercicios" class="accordion-content">
                    <textarea class="form-control" rows="5" placeholder="Insira os exercícios..."></textarea>
                </div>

                <button class="btn btn-primary toggle-button w-100" data-target="#metabolismo">Metabolismo</button>
                <div id="metabolismo" class="accordion-content">
                    <textarea class="form-control" rows="5" placeholder="Insira informações metabólicas..."></textarea>
                </div>

                <button class="btn btn-primary toggle-button w-100" data-target="#macros">Macros</button>
                <div id="macros" class="accordion-content">
                    <textarea class="form-control" rows="5" placeholder="Distribuição de macronutrientes..."></textarea>
                </div>
            </main>
            <script>${js}</script>
        </body>
        </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${patientName.replace(/\s+/g, '_')}.html`;
    link.click();
}

document.getElementById('gerarPagina').addEventListener('click', () => {
    const patientName = document.getElementById('nomePaciente').value.trim();
    const patientData = document.getElementById('dadosPaciente').value.trim();

    if (!patientName) {
        alert('Por favor, insira o nome do paciente.');
        return;
    }

    generatePatientPage(patientName, patientData);
});
