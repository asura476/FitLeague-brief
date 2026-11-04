//DUMMY DATA
let participants = [
    {
        name: "John Doe",
        rank: 1,
        points: 100,
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Jane Smith",
        rank: 2,
        points: 90,
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg"
    }
];

//VARIABLES TO USE LATER

let title = document.getElementById("exampleFormControlInput");
let description = document.getElementById("exampleFormControlTextarea2");
let goal = document.getElementById("exampleFormControlInput2");
let submitButton = document.getElementsByClassName("submitBtn");
let type = document.getElementById("exampleFormControlSelect2");
let metric = document.getElementById("exampleFormControlSelect3");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");

//FUNCTION TO GET THE VALUES OF THE INPUTS AND LOG THEM TO THE CONSOLE

title.addEventListener("input", () => {
    console.log("Title: " + title.value);
});

description.addEventListener("input", () => {
    console.log("Description: " + description.value);
});

goal.addEventListener("input", () => {
    console.log("Goal: " + goal.value);
});

type.addEventListener("change", () => {
    console.log("Type: " + type.value);
});

metric.addEventListener("change", () => {
    console.log("Metric: " + metric.value);
});

startDate.addEventListener("input", () => {
    console.log("Start Date: " + startDate.value);
});

endDate.addEventListener("input", () => {
    console.log("End Date: " + endDate.value);
});

submitButton[0].addEventListener("click", (e) => {
    e.preventDefault();
});