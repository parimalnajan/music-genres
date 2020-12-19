import React, { useState,  } from 'react';

import './App.css';

function App() {
  var [genre, setGenre] = useState("pop");
 
  var message = "Select a genre and explore my favourite artists!";

  var database = {
     pop: {
        1: {
           song: "Sunflower",
           artist: "Post Malone, Swae Lee",
           album:"Spider-Man OST",
           link:"https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P",
        },
        2: {
           song: "Connection",
           artist: "OneRepublic",
           album: "Connection",
           link:" https://open.spotify.com/embed/track/3T4UodGkfZObJ43RtA5KFU " 
        },
        3: {
          song: " ",
          artist: " ",
          album: " ",
          link:" "
       },

     },

     jpop: {
        1: {
           song: "Nandemonaiya",
           artist: "Radwimps",
           album: "Your Name OST",
           link:"https://open.spotify.com/embed/track/0aNViFstXhvXTq0bs9naro"   
        },
        2: {
           song: "For You",
           artist: "AZU",
           album: "Naruto Shippuden ED",
           link: "https://open.spotify.com/embed/track/1ygmjo6QUjvB41PUevGjIe" 
        },
     },

     edm: {
        1: {
          song: "Shetler ",
          artist: "Porter Robinson ",
          link: "https://open.spotify.com/embed/track/2CgOd0Lj5MuvOqzqdaAXtS",
          album:"Single",
       },
       2: {
        song: "Fly Away ",
        artist: "TheFatRat",
        link: "https://open.spotify.com/embed/track/0hTrQoqDmFnA4S1PC265e1", 
        album:"Single",
     },


     },
  };

 //console.dir(database);
  let genres=Object.keys(database);

  //console.log(genres);


 function ClickHandler(key){

    console.log(key);
    setGenre(key);
    let temp=database.key;
    console.log(temp);
    
    console.log(Object.keys(database[genre]))
    //console.log(temp.artist)
    //setRender(database.genre);
    //console.log(temp);
    //setGenre(temp);
   

     }



  return (
    <div className="App">
      <header className="App-header">
     
        <h2>Music Shuffle</h2>
        <h5>{message}</h5>
      
        <h5>{genres.map((genre,index)=>
            <span className="genre-list" onClick={()=>ClickHandler(genre)}>{genre}</span>)}
          </h5>
         
        <div className="genre-render">
            <p id="genre-name">{genre}</p>
            <div>{Object.keys(database[genre]).map((key)=>(
              <div className="song-wrap">

                  <div id="row" >
                    <div>
                        <p><b>Song:</b></p>                 
                        <p><b>Artist:</b></p>
                        <p><b>Album:</b></p> 
                      </div>
                      <div>
                          <p>{database[genre][key].song}</p>
                          <p>{database[genre][key].album}</p>
                        <p>{database[genre][key].artist}</p>
                      </div>
                    </div>
                  <div className="inline-wrapper"> </div>
                  <div> <iframe title="song" src={database[genre][key].link} width="500" height="80" frameborder="0" allowtransparency="true" ></iframe></div>


               </div>))
            }</div>
        </div>

      </header>
    </div>
  );
}

export default App;