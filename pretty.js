const card_name = document.querySelector(".card-name");
const card_description = document.querySelector(".card-description");
const card_form = document.querySelector(".card-form");
const flashcard_container = document.querySelector(".flashcard-container");
const practice_container = document.querySelector(".practice-container");
const practice_btn = document.querySelector('.play');
class FlashCard {
    constructor(name,description) {
        this.name = name;
        this.description = description;
    }
    createCard() {
        let div = document.createElement('div');
        div.className = 'flashcard-card'
        div.innerHTML = `<h1>${this.name}</h1>
                        <p>${this.description}</p>`
        flashcard_container.appendChild(div);
    }
}


function ShowPractice() {
    card_form.style.display = 'none';
    flashcard_container.style.display = 'none';
    practice_container.style.display = 'block';

}

practice_btn.addEventListener('click', ShowPractice)
card_form.addEventListener('submit', (e) => {
    if(card_name.value !== "" && card_description.value !== "") {
         card = new FlashCard(card_name.value , card_description.value);
         card.createCard();
    } else {
        console.log('NOpe');
    }
   
    e.preventDefault();
})


