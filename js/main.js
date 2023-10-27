const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function() {
    makeMenu(e);
});

const todaysLunch = document.querySelector(".todays-lunch1"); // välkomns meddelande i todays-lunch sectionen
const nameOfCompany = document.getElementById("nameOfCompany"); // input för company name
const nrOfPpl = document.getElementById("nrOfPpl"); // antal personer
const radioButton = document.getElementsByName("typeOfMeal"); // referens till radio knappen

function makeMenu(e) {
    e.preventDefault();
    createAndPrint("h2", "Thank you and welcome! <br>", nameOfCompany.value, "");
    createAndPrint("p", "You are ", nrOfPpl.value, " persons in your company.");


    let selectedValue = ""; // sparar värdet från radioknappen (meat eller fish)
    for (let i = 0; i < radioButton.length; i++) { // loopar igenom arrayen radioButton
        if (radioButton[i].checked) { // kollar om radio button är checked
            selectedValue = radioButton[i].value;
            break; // Bryt loopen när en markerad knapp hittas
        }
    }
    createAndPrint("p", "Your choosed to eat ", selectedValue, " today!");
}

function createAndPrint(elem, text, elemRef, textEnd) {
    const newElem = document.createElement(elem);
    newElem.innerHTML = text + elemRef + textEnd
    todaysLunch.appendChild(newElem);
}

// let selecetedAdditions = [];
// const additions = document.getElementsByName("additions");
// for (let i = 0; i < additions.length; i++) {
//     if (additions[i].checked) {
//         selecetedAdditions.push(additions[i].value);

//     }
// }


