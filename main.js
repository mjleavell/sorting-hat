// VARIABLES
const sortingHat = [
    {
        houseName: "Gryffindor",
        houseColor: "rgb(174,0,1)",
        houseText: "rgb(238,186,48)"
    },
    {
        houseName: "Hufflepuff",
        houseColor: "rgb(240,199,94)",
        houseText: "rgb(114,98,85)"
    },
    {
        houseName: "Ravenclaw",
        houseColor: "rgb(34,47,91)",
        houseText: "rgb(148,107,45)"
    },
    {
        houseName: "Slytherin",
        houseColor: "rgb(42,98,61)",
        houseText: "rgb(170,170,170)"
    }
];

const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const printMultipleToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML += stringToPrint;
};

const letsGetStartedClick = () => {
    document.getElementById('start-button').addEventListener('click', (e) => {
        let formString =
        `<form class="w-50 mx-auto">
            <h3>Enter First Year's Name</h3>
            <div class="form-row">
                <div class="col-md-auto">
                    <label for="student-name" class="col-form-label mx-0">Student Name</label>
                </div>
                <div class="col-6">
                    <input type="text" class="form-control" id="studentName" placeholder="Full Name">
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-primary" id="sort-house-btn">Sort Me!</button>
                </div>
            </div>
        </form>`;
        printToDom(formString, 'student-form');
    })
}

const getRandomHouse = () => {
    document.getElementById('student-form').addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id === "sort-house-btn") {
            let randomHouse = sortingHat[Math.floor(Math.random() * 4)];
            console.log(randomHouse.houseName);
            let cardString = `
            <div class="card" style="width: 18rem;">
                <div class="card-body" style="background-color:${randomHouse.houseColor}; color:${randomHouse.houseText}; border: 3px outset ${randomHouse.houseColor};">
                    <h3 class="card-name">${studentName.value}</h3>
                    <p class="card-house">${randomHouse.houseName}</p>
                    <button type="submit" class="btn btn-primary" id="expel-btn">Expel</button>
                </div>
            </div>`;
            printMultipleToDom(cardString, 'student-card-result');
        }
    })
}

// FUNCTIONS
letsGetStartedClick();
getRandomHouse();