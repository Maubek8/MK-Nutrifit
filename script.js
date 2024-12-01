<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MK-CARDIOSPORT - Administração</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --primary: #002f6c;
            --secondary: #ffc107;
            --background: #f8f9fa;
            --button-gray: #d6d6d6;
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

        .container {
            padding: 1rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            margin: 1rem;
        }

        .section {
            display: none;
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid var(--background);
            background-color: white;
            border-radius: 8px;
        }

        .btn {
            margin-bottom: 0.5rem;
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>MK-CARDIOSPORT</h1>
        <h2>Administração de Pacientes</h2>
    </header>

    <div class="container">
        <!-- Nome do Paciente e Data -->
        <div class="form-group">
            <label for="nomePaciente" class="form-label">Nome do Paciente:</label>
            <input type="text" id="nomePaciente" class="form-control" placeholder="Digite o nome do paciente">
        </div>
        <div class="form-group">
            <label for="dataPaciente" class="form-label">Data:</label>
            <input type="date" id="dataPaciente" class="form-control">
        </div>

        <!-- Botões para alternar seções -->
        <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="cardapioSection">Refeições</button>
        <div id="cardapioSection" class="section">
            <textarea id="cardapioArea" class="form-control" rows="5" placeholder="Insira o cardápio..."></textarea>
        </div>

        <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="metabolismSection">Metabolismo</button>
        <div id="metabolismSection" class="section">
            <textarea id="metabolismArea" class="form-control" rows="5" placeholder="Informações metabólicas..."></textarea>
        </div>

        <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="exerciciosSection">Exercícios</button>
        <div id="exerciciosSection" class="section">
            <textarea id="exerciciosArea" class="form-control" rows="5" placeholder="Dados de exercícios..."></textarea>
        </div>

        <button class="btn btn-primary w-100 mb-3 toggle-button" data-target="macrosSection">Macros</button>
        <div id="macrosSection" class="section">
            <textarea id="macrosArea" class="form-control" rows="5" placeholder="Distribuição de macronutrientes..."></textarea>
        </div>

        <!-- Botão Salvar -->
        <div class="mt-4 text-center">
            <button class="btn btn-success" id="saveButton">Salvar</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
