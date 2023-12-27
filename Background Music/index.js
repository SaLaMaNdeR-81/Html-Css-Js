/*=======================================================*
*
* [ToDo]
*
*   - Make New Audio and Config Audio
*   - Make Random Picker Algoritm
*   - Give Firt Click in Windows
*   - if Audio is Puse Play Audio By First Click
*   - 
*
* [DeBug]
*
*   - Pervent IDM to Download Audio
*   - 
*
*=======================================================*/

let HasFirstClick = false
let MusicsList = ["./Musics/Haggstrom.mp3","./Musics/Danny.mp3","./Musics/Dry Hands.mp3","./Musics/Wet Hands.mp3"]
let PickRandom = Math.floor(Math.random() * MusicsList.length )

// ==========

let Music = new Audio( MusicsList[PickRandom] )
Music.preload = false 
Music.loop = true
Music.autoplay = true


function MusicPlay(){

    Music.play()

}

document.addEventListener('DOMContentLoaded',()=>{

    HasFirstClick = true

    function HandelFirstClick(event){
        console.log("First Click Detected");
        MusicPlay()

        document.removeEventListener('click' , HandelFirstClick )
    }
    document.addEventListener('click' , HandelFirstClick )
    
})

// ====================================================================

document.addEventListener('contextmenu' , (e)=>{
    e.preventDefault()
})

document.addEventListener( 'keydown' , (e)=>{

    if( e.ctrlKey && e.key === 's' ){
        e.preventDefault()
    }

    if( e.key === 'F12' || e.ctrlKey && e.shiftKey && e.key === 'I' ){
        e.preventDefault()
    }

    if( e.ctrlKey && e.shiftKey && e.key === 'J' ){
        e.preventDefault()
    }

    if( e.ctrlKey && e.key === 'u' ){
        e.preventDefault()
    }

} )

