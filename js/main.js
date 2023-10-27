const nrOfPpl = document.getElementById("nrOfPpl"); // antal personer





// meddelande

const nameOfCompany = document.getElementById("nameOfCompany"); // input för company name
const welcome = document.querySelector(".welcome"); // välkomns meddelande
welcome.innerHTML += `<br> ${nameOfCompany.value}`;

// ----------------------------------

const radioButton = document.getElementsByName("typeOfMeal"); // referens till radio knappen

let selectedValue = ""; // sparar värdet från radioknappen (meat eller fish)
for (let i = 0; i < radioButton.length; i++) { // loopar igenom arrayen radioButton
    if (radioButton[i].checked) { // kollar om radio button är checked
      selectedValue = radioButton[i].value;
      break; // Bryt loopen när en markerad knapp hittas
    }
}

const lunchHeader = document.getElementsByClassName("lunch-header");
lunchHeader.innerHTML = `<br> ${selectedValue}`;

console.log(selectedValue + " selected value");

// ----------------------------------

