
const songData =[
    {
        id: 1, 
        name: "Shape of you", 
        artist: "Ed Sheeren", 
        img: "img/shape of you.jpg", 
        genre : "Pop", 
        source:"songs/Shape Of You.weba"
    },
    {
        id: 2, 
        name: "Levitating", 
        artist: "Dua Lipa", 
        img: "img/Levitating.jpg", 
        genre : "Hip Hop", 
        source:"songs/Levitating.weba"
    },
    {
        id: 3, 
        name: "Baby", 
        artist: "Justin Bieber", 
        img: "img/Baby.jpg", 
        genre : "Pop", 
        source:"songs/Baby.weba"
    },
    {
        id: 4, 
        name: "World's Smallest Violin", 
        artist: "AJR", 
        img: "img/World Smallest Violin.jpg", 
        genre : "Rock", 
        source:"songs/World's Smallest Violin.weba"
    },
    {
        id: 5, 
        name: "Closer", 
        artist: "The Chainsmoker", 
        img: "img/Closer.jpg", 
        genre : "Pop", 
        source:"songs/Closer.weba"
    },
    {
        id: 6, 
        name: "Love Story", 
        artist: "Taylor shift", 
        img: "img/Love story.jpg", 
        genre : "Pop", 
        source:"songs/Love Story.weba"
    },
    {
        id: 7, 
        name: "Stereo Hearts", 
        artist: "Gym Class Heroes", 
        img: "img/Stereo Hearts.jpg", 
        genre : "Pop", 
        source:"songs/Stereo Hearts.weba"
    },
    {
        id: 8, 
        name: "Stay", 
        artist: "The Kid Laroi", 
        img: "img/Stay.jpg", 
        genre : "Hip Hop", 
        source:"songs/Stay.weba"
    },
    {
        id: 9, 
        name: "Into the Unknown", 
        artist: "Idina Menzel", 
        img: "img/Into the Unknown.jpg", 
        genre : "Pop", 
        source:"songs/Into the Unknown.weba"
    },
    {
        id: 10, 
        name: "How far I'll go", 
        artist: "Auli'i Cravalho", 
        img: "img/How far i'll go.jpg", 
        genre : "Pop", 
        source:"songs/How Far I'll Go.weba"
    },
]; 

const toggler = document.querySelector(".switch");
const cardEle = document.querySelectorAll(".card");
const songInfoEle = document.querySelector(".song-info-container");
const bodyEl = document.querySelector("body");
const buttonEle = document.querySelectorAll(".btn");
const searchEle = document.querySelector(".search-bar");
const songQueueEle = document.querySelector(".song-queue");
const songImageEle = document.querySelector(".song-img");
const songNameEle = document.querySelector(".song-name");
const artistNameEle = document.querySelector(".artist-name");
const audioEle = document.querySelector(".audio-controls");
const checkboxEl = document.querySelector(".check-box");
const playListElement = document.querySelectorAll(".playlist");

let playList = {};


toggler.addEventListener('click',()=>{
    
    if(!checkboxEl.checked){
        checkboxEl.checked = true;
        toggleDarkTheme();
    }
    else{
        checkboxEl.checked = false;
        toggleLightTheme();
    }
});

function toggleDarkTheme(){
    const songEles = document.querySelectorAll(".song");
    songEles.forEach((ele)=>{
        ele.style.backgroundColor = "#64696C";
    });
    console.log(playListElement);
    playListElement.forEach((ele)=>{
        console.log(ele);
        ele.style.backgroundColor = "#64696C";
    });
    cardEle.forEach((card)=>{
        card.style.backgroundColor = "#263238";
        card.style.boxShadow = "-1px -1px 5px 0.1px #64696C";
    });
    buttonEle.forEach((button)=>{
        button.style.backgroundColor = "darkviolet";
    });

    bodyEl.style.backgroundColor = "#565657";
    bodyEl.style.color = "white";
    songInfoEle.style.backgroundColor = "#64696C";
    songInfoEle.style.boxShadow = "-1px -1px 5px 0.1px #64696C";
    searchEle.style.backgroundColor = "#263238";
}

function toggleLightTheme(){
    const songEles = document.querySelectorAll(".song");
    songEles.forEach((ele)=>{
        ele.style.backgroundColor = "#0b81bc";
    });
    cardEle.forEach((card)=>{
        card.style.backgroundColor = "#6bb7de";
        card.style.boxShadow = "-1px -1px 5px 0.1px purple";
    });
    buttonEle.forEach((button)=>{
        button.style.backgroundColor = "blue";
    });
    bodyEl.style.backgroundColor = "white";
    bodyEl.style.color = "black";
    songInfoEle.style.backgroundColor = "#0573ab";
    songInfoEle.style.boxShadow = "-1px -1px 5px 0.1px purple";
    searchEle.style.backgroundColor = "white";
}


const dropdownEle = document.querySelector("#filter-selection");
const genre = ["All", "Pop", "Rock", "Hip Hop"]
genre.forEach((option)=>{
    const optionEle = document.createElement("option");
    optionEle.text = option;
    optionEle.value = option;
    optionEle.classList.add("genre-option");
    dropdownEle.appendChild(optionEle);
});

dropdownEle.addEventListener('change', ()=>{
    showSongs();
});


function showSongs(){
    songQueueEle.textContent = "";
    if(dropdownEle.value == "All"){
        songData.forEach((song)=>{
            createSong(song);
        });
    }
    else{
        songData.forEach((song)=>{
            console.log();
            if(dropdownEle.value === song.genre){
                createSong(song);
            }
        });
    }  
}

const searchSongEle = document.querySelector(".song-search");
const searchBtnEle = document.querySelector("#song-search-btn");
const clearSearchEle = document.querySelector("#close-btn");

searchSongEle.addEventListener('submit', (event)=>{
    event.preventDefault();
    const searchBarEle = document.querySelector("#song-search-bar");
    const searchedSong = searchBarEle.value;
    const songQueue = Array.from(songQueueEle.children);
    songFoundEle = songQueue.find((songEle)=> {
        return songEle.textContent.toLowerCase() === searchedSong.toLowerCase();
    });
    searchBtnEle.style.display = "none";
    clearSearchEle.style.display = "inline-block";
    if(!songFoundEle){
        alert("No song Found");
        return;
    }
    songQueueEle.textContent = "";
    songQueueEle.appendChild(songFoundEle);
});

clearSearchEle.addEventListener('click', clearSearch);

function clearSearch(){
    searchBtnEle.style.display = "inline-block";
    clearSearchEle.style.display = "none";
    showSongs();
    document.querySelector("#song-search-bar").text = "";
    document.querySelector("#song-search-bar").value = "";
}

showSongs();


function createSong(song){
    const songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.id = (`s${song.id}`);
    songElement.textContent = song.name;
    songQueueEle.appendChild(songElement);

    songElement.addEventListener('click', ()=>{
        currentSongEle.style.backgroundColor = (checkboxEl.checked)?"#64696C":"#0b81bc";
        currentSongIndex = songData.indexOf(song);
        currentSong = song;
        currentSongEle = songElement;
        audioEle.autoplay = true;
        renderCurrentSong();
    });
}

let currentSongIndex = 0;
let currentSong = songData[currentSongIndex];
let currentSongEle = document.querySelector(".song");
currentSongEle.style.backgroundColor = "#03557e";

function renderCurrentSong(){
    songImageEle.src = currentSong.img;
    songNameEle.textContent = currentSong.name;
    artistNameEle.textContent = currentSong.artist;
    audioEle.src = currentSong.source;
    audioEle.autoplay = true;
    currentSongEle.style.backgroundColor = "#03557e";
}

let songQueue = Array.from(songQueueEle.children);
const prevButtonEle = document.querySelector("#prev");
prevButtonEle.addEventListener('click', ()=>{
    songQueue = Array.from(songQueueEle.children);
    let index = songQueue.indexOf(currentSongEle);
    index--;
    if(index<0){
        index = songQueue.length-1;
    }
    selectSong(index);
});

const nextButtonEle = document.querySelector("#next");
nextButtonEle.addEventListener('click', ()=>{
    songQueue = Array.from(songQueueEle.children);
    let index = songQueue.indexOf(currentSongEle);
    index++;
    if(index>=songQueue.length){
        index = 0;
    }
    selectSong(index);
});

function selectSong(index){
    currentSongEle.style.backgroundColor = (checkboxEl.checked)?"#64696C":"#0b81bc";
    currentSongEle = songQueue[index];
    currentSongIndex = parseInt(currentSongEle.id.slice(1)) -1;
    currentSong = songData[currentSongIndex];
    renderCurrentSong();
}

let currentPlaylist = new Set();
const playListBtn = document.querySelector("#playlist-btn");
const currPlaylistEle = document.querySelector(".current-playlist");
const allPlaylistEle = document.querySelector(".all-playlist");
const playlistInputEle = document.querySelector("#playlist-input");

const formEle = document.querySelector(".search-container");
formEle.addEventListener('submit', createPlayList);

function createPlayList(event){
    event.preventDefault();
    const playListName = playlistInputEle.value;
    playlistInputEle.text = "";
    playlistInputEle.value = "";
    if(playListName in playList){
        alert("The playlist name already exists, create playlist with new name")
        return;
    }
    playList[`${playListName}`] = new Set();

    currentPlaylist = playList[`${playListName}`];
    renderAllPlaylist();
}

function renderAllPlaylist(){
    allPlaylistEle.textContent = "";
    for(let playListName of Object.keys(playList)){
        const playListEle = document.createElement("div");
        playListEle.textContent = playListName;
        playListEle.classList.add("song");
        playListEle.classList.add("playlist");
        allPlaylistEle.appendChild(playListEle);
        renderPlaylist();

        playListEle.addEventListener('click', ()=>{
            playListEle.style.backgroundColor = (checkboxEl.checked)?"#64696C":"#0b81bc";
            currentPlaylist = playList[`${playListName}`];
            renderPlaylist();
        });
    }
}


playListBtn.addEventListener('click', ()=>{
    if(Object.keys(playList).length === 0){
        alert("Create a playlist to add song");
        return;
    }
    currentPlaylist.add(currentSong);
    renderPlaylist();
});

function renderPlaylist(){
    currPlaylistEle.textContent = "";
    currentPlaylist.forEach((song)=>{
        const songElement = document.createElement("div");
        songElement.classList.add("song");
        songElement.textContent = song.name;
        currPlaylistEle.appendChild(songElement);
        songElement.style.backgroundColor = (checkboxEl.checked)?"#64696C":"#0b81bc";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "X";
        songElement.appendChild(deleteButton);
        deleteButton.addEventListener('click', ()=>{
            songElement.remove();
            currentPlaylist.delete(song);
            console.log(currentPlaylist);
        });
        songElement.addEventListener('click', ()=>{
            currentSongEle.style.backgroundColor = (checkboxEl.checked)?"#64696C":"#0b81bc";
            currentSongIndex = songData.indexOf(song);
            currentSong = song;
            currentSongEle = songElement;
            audioEle.autoplay = true;
            renderCurrentSong();
        });
    });
}



const searchPlaylistEle = document.querySelector(".playlist-search");
const searchPlaylistBarEle = document.querySelector("#playlist-search-bar");
const searchPlaylistBtnEle = document.querySelector("#playlist-search-btn");
const clearPlaylistSearchEle = document.querySelector("#playlist-close-btn");


searchPlaylistEle.addEventListener('submit', (event)=>{
    event.preventDefault();
    const searchedPlaylist = searchPlaylistBarEle.value;
    const PlaylistQueue = Array.from(allPlaylistEle.children);
    playlistFoundEle = PlaylistQueue.find((playListEle)=> {
        return playListEle.textContent === searchedPlaylist;
    });
    searchPlaylistBtnEle.style.display = "none";
    clearPlaylistSearchEle.style.display = "inline-block";
    if(!playlistFoundEle){
        alert("No Playlist Found");
        return;
    }
    allPlaylistEle.textContent = "";
    allPlaylistEle.appendChild(playlistFoundEle);
});

clearPlaylistSearchEle.addEventListener('click', clearPlaylistSearch);

function clearPlaylistSearch(){
    searchPlaylistBtnEle.style.display = "inline-block";
    clearPlaylistSearchEle.style.display = "none";
    renderAllPlaylist();
    document.querySelector("#song-search-bar").text = "";
    document.querySelector("#song-search-bar").value = "";
}






