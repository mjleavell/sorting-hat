// VARIABLES
const sortingHat = [
    {
        houseName: "Gryffindor",
        houseColor: "rgb(174,0,1)",
        houseText: "rgb(238,186,48)",
        houseImage: "../images/Gryffindor.png"
    },
    {
        houseName: "Hufflepuff",
        houseColor: "rgb(240,199,94)",
        houseText: "rgb(114,98,85)",
        houseImage: "../images/hufflepuff.jpg"
    },
    {
        houseName: "Ravenclaw",
        houseColor: "rgb(34,47,91)",
        houseText: "rgb(148,107,45)",
        houseImage: "../images/ravenclaw.jpg"
    },
    {
        houseName: "Slytherin",
        houseColor: "rgb(42,98,61)",
        houseText: "rgb(170,170,170)",
        houseImage: "../images/slytherin.jpg"
    }
];

let voldemort = {
    houseName: "Voldemort's Army",
    houseColor: "rgb(105,105,105)",
    houseText: "rgb(101,198,82)",
    houseImage: "../images/voldemort.jpg"
};

const sortBtn = document.getElementById('sort-house-btn');

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
            `<form>
                <h3>Enter First Year's Name</h3>
                <div class="form-row">
                    <div class="col-md-auto">
                        <label for="student-name" class="col-form-label mx-0">Student Name</label>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="studentName" placeholder="Full Name">
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-secondary" id="sort-house-btn">Sort Me!</button>
                    </div>
                </div>
                <div id="form-result"></div>
            </form>`;
        printToDom(formString, 'student-form');
    })
}

const getRandomHouse = () => {
    document.getElementById('student-form').addEventListener('click', (e) => {
        e.preventDefault();
        const studentInput = document.getElementById('studentName').value;
        if (e.target.id === "sort-house-btn") {
            if (studentInput === "") {
                let modalString = "Please enter a student name. Invisibility Cloak is no match for the Sorting Hat!"
                printToDom(modalString, 'form-result');
            } else if (studentInput !== "") {
                let randomHouse = sortingHat[Math.floor(Math.random() * 4)];
                let cardString = `
                <div class="card">
                    <img class="card-img-top" src="${randomHouse.houseImage}" alt="Card image cap">
                    <div class="card-body" style="background-color:${randomHouse.houseColor}; color:${randomHouse.houseText};">
                        <h3 class="card-name">${studentName.value}</h3>
                        <p class="card-house">${randomHouse.houseName}</p>
                        <button type="submit" class="btn btn-secondary expel-btn">Expel</button>
                    </div>
                </div>`;
                printMultipleToDom(cardString, 'student-card-result');
                document.getElementById('studentName').value = '';
                document.getElementById('form-result').innerHTML = '';
                expelStudent();
            }
        }
    })
}

const expelStudent = () => {
    const expelButtons = document.getElementsByClassName('expel-btn');
    for (let i = 0; i < expelButtons.length; i++) {
        const expel = expelButtons[i];
        expel.addEventListener('click', (e) => {
            const cardToDelete = e.target.parentNode.parentNode;
            const name = e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
            cardToDelete.remove();
            voldemortArmy(name);
        })
    }
}

const voldemortArmy = (name) => {
    let expelCard = `
    <div class="card army-card">
        <img class="card-img-top" src="./images/voldemort1.jpg" alt="Card image cap">
        <div class="card-body" style="background-color:${voldemort.houseColor}; color:${voldemort.houseText};">
            <h3 class="card-name">${name}</h3>
            <p class="card-house">Voldemort's Army</p>
        </div>
    </div>`;
    printMultipleToDom(expelCard, "voldemort-army");
}

// FUNCTIONS
letsGetStartedClick();
getRandomHouse();