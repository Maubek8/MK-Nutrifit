<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MK-CARDIOSPORT - Nutri Fit</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="MK-CARDIOSPORT Logo" class="logo">
        <h1>MK-CARDIOSPORT</h1>
        <h2>Nutri Fit - Siga o seu objetivo!</h2>
    </header>

    <main>
        <section class="button-container">
            <button onclick="loadPage('pages/dados-gerais.html')">Dados Gerais</button>
            <button onclick="loadPage('pages/gasto-energetico.html')">Gasto Energético</button>
            <button onclick="loadPage('pages/macros.html')">Distribuição de Macros</button>
            <button onclick="loadPage('pages/graficos.html')">Gráficos</button>
            <button onclick="loadPage('pages/refeicoes.html')">Refeições</button>
            <button onclick="loadPage('pages/alternativas.html')">Alternativas</button>
        </section>

        <!-- Área para conteúdo dinâmico -->
        <section id="dynamic-content">
            <h3>Bem-vindo ao MK-CARDIOSPORT!</h3>
            <p>Selecione uma seção para começar.</p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
