let isPlaying = true;


let value = 0;
let forwardBtn = document.querySelector("#forward");
let backwardBtn = document.querySelector("#backward");
let playBtn = document.querySelector("#play");
let audio = new Audio();
let flag = 0;
var selectedSong = 0;

let list = [{
        name: "Hua Main",
        url: "Hua.mp3",
        id: 0,
        img: "download.jpeg"
    },
    {
        name: "Satranga",
        url: "Satranga.mp3",
        id: 1,
        img: "2.jpeg"
    },
    {
        name: "Arjan Vailly",
        url: "Vailly.mp3",
        id: 2,
        img: "download.jpeg"
    },
    {
        name: "Saari Duniya Jalaa ",
        url: "Saari.mp3",
        id: 3,
        img: "2.jpeg"
    }
]

function main() {

    let clutter = "";
    list.forEach((song, index) => {


        clutter += `<div class="song-card" id="${index}" >
    <div class="part1" >
       <img src="${list[index].img}">
       <h2>${song.name}</h2>
    </div>
    <h6>duration 2.34</h6>
    </div>`





    });

    audio.src = list[selectedSong].url;
    document.querySelector("#all-songs").innerHTML = clutter;


}

main();
document.querySelector("#all-songs").addEventListener("click", (e) => {
    let leftImage = "";
    console.log(list[e.target.id].img)
    leftImage += `<img src="${list[e.target.id].img}">`;
    document.querySelector("#left").innerHTML = leftImage;
    selectedSong = e.target.id;
    main();
    playBtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    audio.play();



})




playBtn.addEventListener("click", () => {
    if (flag == 0) {
        playBtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        main();
        audio.play();
        flag = 1;
    } else {
        playBtn.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        main();
        flag = 0;
        audio.pause();
    }
})


forwardBtn.addEventListener("click", (e) => {
    selectedSong++
    main();
    audio.play();
});
backwardBtn.addEventListener("click", (e) => {
    selectedSong--;
    main();
    audio.play();
});