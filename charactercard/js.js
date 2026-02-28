const box = document.querySelector('main');

// object
const cardInfo = {
    img: 'char.webp',
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    attacked: function () {
        this.health -= 20;
        health.textContent = `Health: ${this.health}`;
        if (this.health <= 0) {
            setTimeout(() => alert('Your character is dead'), 10);
        };
    },
    levelUp: function () {
        this.level += 1;
        level.textContent = `Level: ${this.level}`;
    }
}

// create article and add class
const card = document.createElement('article');
card.className = 'card';

// HTML
let html = `
    <img class="image" src="${cardInfo.img}" alt="Snortleblat charactor">
    <p class="name">${cardInfo.name}</p>
    <div class="stats">
        <p>Class: ${cardInfo.class}</p>
        <p class="level">Level: ${cardInfo.level}</p>
        <p class="health">Health: ${cardInfo.health}</p>
        <div class="buttons">
            <button class="attacked">Attacked</button>
            <button class="levelUp">Level Up</button>
        </div>
    </div>
`
// add HTML and show
card.innerHTML = html;
box.appendChild(card);

// select buttons and p tags
let attacked = document.querySelector('.attacked');
let levelUp = document.querySelector('.levelUp');
let level = document.querySelector('.level');
let health = document.querySelector('.health');

// attack and level up buttons
attacked.addEventListener('click', () => {
    cardInfo.attacked();
});

levelUp.addEventListener('click', () => {
    cardInfo.levelUp();
});