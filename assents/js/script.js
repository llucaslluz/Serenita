const pedidoButton = document.querySelector('.pedido');

let gerarIntervalo;

// Evento hover → cookies sobem suavemente
pedidoButton.addEventListener('mouseenter', () => {
    gerarIntervalo = setInterval(() => {
        gerarCookiesParaCima();
    }, 190);
});

// Para quando sai do botão
pedidoButton.addEventListener('mouseleave', () => {
    clearInterval(gerarIntervalo);
});

// Evento clique → explosão com partículas
pedidoButton.addEventListener('click', () => {
    explosaoCookies(15); // quantidade de cookies
});

// ---------- Função: Cookies subindo ----------
function gerarCookiesParaCima() {
    criarElemento('cookie', true);
}


// ---------- Função: Explosão ----------
function explosaoCookies(qtd) {
    for (let i = 0; i < qtd; i++) {
        criarElemento('cookie');
    }
    for (let i = 0; i < qtd / 2; i++) {
        criarElemento('particle');
    }
}

// ---------- Função base para cookie ou partícula ----------
function criarElemento(tipo, subir = false) {
    const el = document.createElement('div');
    el.classList.add(tipo);

    if (tipo === 'cookie') {
        const img = document.createElement('img');
        img.src = '/assents/Images/CookieDesenho.png';
        img.alt = 'cookie';
        el.appendChild(img);
    } else {
        el.style.backgroundColor = getRandomColor();
    }

    document.body.appendChild(el);

    const rect = pedidoButton.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + window.scrollY + rect.height / 2;

    el.style.left = `${centerX}px`;
    el.style.top = `${centerY}px`;

    if (subir) {
        const distanceY = anime.random(80, 150);
        const offsetX = anime.random(-30, 30);

        anime({
            targets: el,
            translateX: offsetX,
            translateY: -distanceY,
            scale: [
                { value: 1.2, duration: 100 },
                { value: 0, duration: 1500 }
            ],
            opacity: [
                { value: 1, duration: 100 },
                { value: 0, duration: 1500 }
            ],
            easing: 'easeOutCubic',
            duration: 1600,
            complete: () => {
                el.remove();
            }
        });
    } else {
        const angle = anime.random(0, 360);
        const distance = anime.random(60, 150);

        anime({
            targets: el,
            translateX: distance * Math.cos(angle * (Math.PI / 180)),
            translateY: distance * Math.sin(angle * (Math.PI / 180)),
            scale: [
                { value: 1.5, duration: 100 },
                { value: 0, duration: 1000 }
            ],
            opacity: [
                { value: 1, duration: 100 },
                { value: 0, duration: 1000 }
            ],
            easing: 'easeOutCubic',
            duration: 1000,
            complete: () => {
                el.remove();
            }
        });
    }
}

// ---------- Cores das partículas ----------
function getRandomColor() {
    const colors = ['#FFD6E8', '#F9B57A', '#FCE38A', '#E07A9D', '#A34772'];
    return colors[Math.floor(Math.random() * colors.length)];
}
