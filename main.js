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

const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const letsGetStartedClick = () => {
    document.getElementById('start-button').addEventListener('click', () => {
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
            <button type="submit" class="btn btn-primary">Sort Me!</button>
            </div>
        </div>
        </form>`;
        printToDom(formString, 'studentForm');
    })
}


// FUNCTIONS
letsGetStartedClick();