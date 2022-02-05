console.log("Hey");

// Initializing Variables
let songIndex = 0;
let audioElement = new Audio('SongsP/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPlay1 = document.getElementById('masterPlay1');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "", filePath: "SongsP/1.mp3", coverPath: "CoverP/1.jpg"},
    {songName: "", filePath: "SongsP/2.mp3", coverPath: "CoverP/2.jpg"},
    {songName: "", filePath: "SongsP/3.mp3", coverPath: "CoverP/3.jpg"},
    {songName: "", filePath: "SongsP/4.mp3", coverPath: "CoverP/4.jpg"},
    {songName: "", filePath: "SongsP/5.mp3", coverPath: "CoverP/5.png"},
    {songName: "", filePath: "SongsP/6.mp3", coverPath: "CoverP/6.jpg"},
    {songName: "", filePath: "SongsP/7.mp3", coverPath: "CoverP/7.jpg"},
    {songName: "", filePath: "SongsP/8.mp3", coverPath: "CoverP/8.jpg"},
    {songName: "", filePath: "SongsP/9.mp3", coverPath: "CoverP/9.jpg"},
    {songName: "", filePath: "SongsP/10.mp3", coverPath: "CoverP/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

masterPlay1.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay1.classList.remove('fa-play-circle');
        masterPlay1.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay1.classList.remove('fa-pause-circle');
        masterPlay1.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `SongsP/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;    
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterPlay1.classList.remove('fa-play-circle');
        masterPlay1.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `SongsP/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;        
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterPlay1.classList.remove('fa-play-circle');
    masterPlay1.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `SongsP/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterPlay1.classList.remove('fa-play-circle');
    masterPlay1.classList.add('fa-pause-circle');
})