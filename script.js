function search() {
    const input = document.querySelector(".inputSearch").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(input);
}