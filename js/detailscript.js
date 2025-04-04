// github : https://github.com/deryaxacar/Web-Page-Links

// copy code button
function copyCode(button) {
    const code = button.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Kopyalandı!";
        button.disabled = true;
    });
}

// menu checkbox
document.querySelectorAll('.menu-box .menu-item').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').checked = false;
    });
});