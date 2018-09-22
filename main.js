// VARIABLES
const sortingHat = [
    {
        houseName: "gryffindor",
        houseColor: "scarlet",
        houseText: "gold"
    },
    {
        houseName: "hufflepuff",
        houseColor: "yellow",
        houseText: "black"
    },
    {
        houseName: "ravenclaw",
        houseColor: "blue",
        houseText: "bronze"
    },
    {
        houseName: "slytherin",
        houseColor: "green",
        houseText: "silver"
    }
];

const studentNameInputElem = document.getElementById('student-name');

const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
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
                    <input type="text" class="form-control" id="student-name" placeholder="Full Name">
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
    document.addEventListener('click', (e) => {
        if (e.target.id === "sort-house-btn") {
            let randomHouse = sortingHat[Math.floor(Math.random() * 4)];
            console.log(randomHouse.houseName);
            let cardString = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-name">${studentNameInputElem.value}</h5>
                    <p class="card-house">${randomHouse.houseName}</p>
                    <button type="submit" class="btn btn-primary" id="expel-btn">Expel</button>
                </div>
            </div>`;
            printToDom(cardString, 'student-card-result');
        }
    })
}
        // for (let i = 0; i < sortingHat.houseName.length; i++){
            // console.log(sortingHat.houseName[i].value);
        // }
//         let sortingHatKeys = Object.keys(sortingHat);
//         let randomHouse = Math.random() * 4);
//         // let randomHouse - sortingHat[Math.floor(Math.random())*4];
//         console.log('house', randomHouse);
//     //     for (let i = 0; i < e.length; i++){
    //         let cardString = `
    //         <div class="card" style="width: 18rem;">
    //             <div class="card-body">
    //                 <h5 class="card-name">${studentNameInputElem.value}</h5>
    //                 <p class="card-house">${sortingHat[i].houseName}</p>
    //                 <button href="#" class="btn btn-primary" id="expel-btn">Expel</button>
    //             </div>
    //         </div>`;
    //         printToDom(cardString, 'student-card-result');
    //     }



// FUNCTIONS
letsGetStartedClick();
getRandomHouse();