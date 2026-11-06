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


const Challenges = [
    {
        id: 1,
        titre: "30 Days Running",
        photo: "assets/running.png",
        createdBy: "you",
        duree: 30,
        daysLeft: 12,
        status: "In progress",

        participants: [
            {
                id: 1,
                name: "Sarah",
                lastname: "boushaba",
                avatar: "https://i.pravatar.cc/40?img=1",
                score: 3200
            },
            {
                id: 2,
                name: "Ahmed",
                lastname: "boushaba",
                avatar: "https://i.pravatar.cc/40?img=14",
                score: 3122
            },
            {
                id: 3,
                name: "Aymen",
                lastname: "boushaba",
                avatar: "https://i.pravatar.cc/40?img=12",
                score: 2900
            },
            
        ]
    },
     {
        id: 1,
        titre: "30 Days Running",
        photo: "assets/running.png",
        createdBy: "you",
        duree: 30,
        daysLeft: 12,
        status: "In progress",

        participants: [
            {
                id: 1,
                name: "simo",
                lastname: "labibi1",
                avatar: "https://i.pravatar.cc/40?img=1",
                score: 3200
            },
            {
                id: 2,
                name: "labobo",
                lastname: "labibi2",
                avatar: "https://i.pravatar.cc/40?img=14",
                score: 3122
            },
            {
                id: 3,
                name: "haitam",
                lastname: "labibi3",
                avatar: "https://i.pravatar.cc/40?img=12",
                score: 2900
            }
        ]
    }, {
        id: 1,
        titre: "30 Days Running",
        photo: "assets/running.png",
        createdBy: "you",
        duree: 30,
        daysLeft: 12,
        status: "In progress",

        participants: [
            {
                id: 1,
                name: "simo",
                lastname: "labibi1",
                avatar: "https://i.pravatar.cc/40?img=1",
                score: 3200
            },
            {
                id: 2,
                name: "labobo",
                lastname: "labibi2",
                avatar: "https://i.pravatar.cc/40?img=14",
                score: 3122
            },
            {
                id: 3,
                name: "haitam",
                lastname: "labibi3",
                avatar: "https://i.pravatar.cc/40?img=12",
                score: 2900
            }
        ]
    },
    {
        id: 1,
        titre: "30 Days Running",
        photo: "assets/running.png",
        createdBy: "you",
        duree: 30,
        daysLeft: 12,
        status: "In progress",

        participants: [
            {
                id: 1,
                name: "simo",
                lastname: "labibi1",
                avatar: "https://i.pravatar.cc/40?img=1",
                score: 3200
            },
            {
                id: 2,
                name: "labobo",
                lastname: "labibi2",
                avatar: "https://i.pravatar.cc/40?img=14",
                score: 3122
            },
            {
                id: 3,
                name: "haitam",
                lastname: "labibi3",
                avatar: "https://i.pravatar.cc/40?img=12",
                score: 2900
            }
        ]
    },
];

// foe the participants page
const participantlis = [
    {
        id: 1,
        name: "Ahmed",
        avatar: "https://i.pravatar.cc/40?img=3",
        completedChallenges: 5,
        status: "Active",
        score: 4200
    },
    {
        id: 2,
        name: "Rebecca",
        avatar: "https://i.pravatar.cc/40?img=5",
        completedChallenges: 5,
        status: "Active",
        score: 4330
    },
    {
        id: 3,
        name: "Sarah",
        avatar: "https://i.pravatar.cc/40?img=7",
        completedChallenges: 5,
        status: "Active",
        score: 3400
    },
    {
        id: 4,
        name: "Mina",
        avatar: "https://i.pravatar.cc/40?img=9",
        completedChallenges: 5,
        status: "Active",
        score: 1200
    }
];

const challengesList = document.querySelector(".challengesList");

if (challengesList) {
    
Challenges.forEach(challenge => {

    challengesList.innerHTML += `<div class="challengesHeader  ">
                    <div class="d-flex justify-content-between ">
                        <div class="challheaderMain py-4">
                            <div class="challengesHeaderInfo d-flex align-items-center  gap-2">
                                <div class="challengesIcon">
                                    <img class="rounded-pill" src="${challenge.photo}" alt="logo" width="40" height="40">
                                </div>

                                <div>
                                    <h6 class="mb-0  fw-semibold">${challenge.duree} Days Running</h6>
                                    <small class="text-muted">Created by you • 3 participants</small>
                                </div>
                            </div>
                        </div>

                        <div class="timeLeft d-flex align-items-center gap-3">
                            <p>${challenge.daysLeft} days left</p>
                            <p class=" badge rounded-pill bg-success">${challenge.status} </p>
                        </div>
                    </div>

                    <div class="border-bottom border-dark pb-4">
                        <div class="topInchallenge ">
                            <div class="topHeader d-flex gap-2">
                                <i class="topIocn"><i class="fa-solid fa-medal"></i></i>
                                <p class="topLAbel">Top in this challenge</p>
                            </div>
                        </div>
                 <div class="TopRanked d-flex flex-column gap-3 bg-success bg-light rounded-3 p-4">

                 ${renderChallengeParticipants(challenge.participants)}

                    </div>
                </div>
              </div>`

});
}

function renderChallengeParticipants(participants) { 

    let result =  "";
    participants.forEach((participant, index) => {
                result += `<div class="TopInRank d-flex flex-row justify-content-between">
                            <div class="d-flex  gap-3 align-items-center">
                                <span
                                    class="badge rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center"
                                    style="width: 24px; height: 24px;">${index + 1}</span>
                                <img src="${participant.avatar}" alt="Sarah" class="rounded-circle" width="28"
                                    height="28">
                                <span class="name ">${participant.name}</span>
                                <span class="name ">${participant.lastname}</span>
                            </div>
                            <div>
                                <span class="points text-success small fw-medium">${participant.score} pts</span>
                            </div>
                        </div>`

    });

    return result;
}

const Allparticipants = document.querySelector(".Allparticipants")

if (Allparticipants) {

participantlis.forEach((aparticipant , index )=> {
    
    Allparticipants.innerHTML += `

                            <div class="d-flex flex-column gap-3 bg-light rounded-3  p-4  ">
                                <div class="TopInRank d-flex flex-row justify-content-between border-bottom pb-4">
                                    <div class="d-flex gap-4 align-items-center">
                                        <span></span>
                                        <img src="${aparticipant.avatar}" alt="Sarah" class="rounded-circle"
                                            width="35" height="35">
                                        <div>
                                            <h6 class="mb-0  fw-semibold">${aparticipant.name}</h6>
                                            <small class="text-muted">${aparticipant.completedChallenges} challenges comapleted</small>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column align-items-center">
                                        <span class="badge bg-warning text-success px-3 py-2">${aparticipant.status}</span>
                                        <span class="points text-dark small fw-medium">${aparticipant.score}</span>
                                    </div>
                                </div>
                            </div>`
});
}



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




