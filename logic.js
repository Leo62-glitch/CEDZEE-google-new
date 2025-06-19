document.getElementById("searchForm").addEventListener("submit", function (event) {
    
    const search = document.getElementById('searchQuery').value;
    const link = `https://duckduckgo.com/?q=${encodeURIComponent(search)}`;
    
    setTimeout(() => {
        window.location.href = link;
    }, 50);

    event.preventDefault();
    return false;
    
});
