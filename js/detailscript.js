function copyCode(button) {
    const code = button.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Kopyalandı!";
        button.disabled = true;
    });
}

document.querySelectorAll('.menu-box .menu-item').forEach(link => {
    link.addEventListener('click', () => {
        // Link tıklandıktan hemen sonra checkbox’ı kapat
        document.getElementById('menu').checked = false;
    });
});