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