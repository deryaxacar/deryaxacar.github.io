// github : https://github.com/deryaxacar/Web-Page-Links

const navButtons = document.querySelectorAll('nav button');
const subButtons = document.querySelectorAll('.sub-buttons');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    subButtons.forEach(sb => sb.style.display = 'none');

    navButtons.forEach(navBtn => navBtn.classList.remove('active'));

    btn.classList.add('active');

    const targetId = btn.getAttribute('data-target');
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.style.display = 'flex';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Web Developer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100; // Harf yazma hızı (ms)
  const delay = 1500; // Yazı tamamlandıktan sonra bekleme süresi (ms)
  const h2 = document.querySelector(".typewriter");

  function typeEffect() {
    let currentText = texts[textIndex];
    if (isDeleting) {
      h2.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      h2.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), delay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
  }

  typeEffect();
});