document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    const search = document.getElementById('searchQuery').value;
    const link = `https://duckduckgo.com/?q=${encodeURIComponent(search)}`;

    // Création d'un lien <a> et simulation du clic
    const a = document.createElement('a');
    a.href = link;
    a.target = '_self'; // Ouvre dans la même fenêtre (important pour les WebView)
    document.body.appendChild(a);
    a.click();

    return false;
});
