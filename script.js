const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

noBtn.addEventListener('click', () => {
    const x = Math.floor(Math.random() * 200) + 1;
    noBtn.style.transform = `translateX(${x}px)`;
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'congratulations.html';
});