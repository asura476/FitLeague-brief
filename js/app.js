const Challenges = [
    {
        id: 1,
        titre: "30 Days Running",
        photo: "assets/logo.png",
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
            }
        ]
    },

    {
        id: 2,
        titre: "30 Days Running",
        photo: "assets/logo.png",
        createdBy: "you",
        duree: 30,
        daysLeft: 12,
        status: "In progress",

        participants: [
            {
                id: 4,
                name: "Maria",
                lastname: "Hailala",
                avatar: "https://i.pravatar.cc/40?img=25",
                score: 4200
            },
            {
                id: 5,
                name: "Kelsie",
                lastname: "salim",
                avatar: "https://i.pravatar.cc/40?img=26",
                score: 3002
            },
            {
                id: 6,
                name: "lharnounia",
                lastname: "boushaba",
                avatar: "https://i.pravatar.cc/40?img=35",
                score: 1459
            }
        ]
    }
];

const challengesList = document.querySelector(".challengesList");

Challenges.forEach(challenge => {
    
    challengesList.innerHTML += `<div class="challengesHeader">
                    <div class="d-flex justify-content-between ">
                        <div class="challheaderMain py-4">
                            <div class="challengesHeaderInfo d-flex align-items-center  gap-2">
                                <div class="challengesIcon">
                                    <img src="${challenge.photo}" alt="logo" width="40" height="40">
                                </div>

                                <div>
                                    <h6 class="mb-0  fw-semibold">${challenge.duree} Days Running</h6>
                                    <small class="text-muted">Created by you • 5 participants</small>
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
                        <div class="d-flex flex-column gap-3 bg-success bg-light rounded-3 p-4">
                            <div class="TopInRank d-flex flex-row justify-content-between">
                                <div class="d-flex  gap-3 align-items-center">
                                    <span
                                        class="badge rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center"
                                        style="width: 24px; height: 24px;">1</span>
                                    <img src="https://i.pravatar.cc/40?img=1" alt="Sarah" class="rounded-circle"
                                        width="28" height="28">
                                    <span class="name ">${challenge.duree} </span>
                                    <span class="name ">Hailala</span>
                                </div>
                                <div>
                                    <span class="points text-success small fw-medium">3,200 pts</span>
                                </div>
                            </div>

                            <div class="TopInRank d-flex flex-row justify-content-between">
                                <div class="d-flex  gap-3 align-items-center">
                                    <span
                                        class="badge rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center"
                                        style="width: 24px; height: 24px;">1</span>
                                    <img src="https://i.pravatar.cc/40?img=14" alt="Ahmed" class="rounded-circle"
                                        width="28" height="28">
                                    <span class="name ">Ahmed</span>
                                    <span class="name ">salim</span>
                                </div>
                                <div>
                                    <span class="points text-success small fw-medium">3,122 pts</span>
                                </div>
                            </div>
                            <div class="TopInRank d-flex flex-row justify-content-between">
                                <div class="d-flex  gap-3 align-items-center">
                                    <span
                                        class="badge rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center"
                                        style="width: 24px; height: 24px;">1</span>
                                    <img src="https://i.pravatar.cc/40?img=12" alt="Aymen" class="rounded-circle"
                                        width="28" height="28">
                                    <span class="name ">Aymen</span>
                                    <span class="name ">boushaba</span>
                                </div>
                                <div>
                                    <span class="points text-success small fw-medium">2,900 pts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
});