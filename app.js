let movieInput=document.getElementById("movie-input");
let addMovie=document.getElementById("addMovie");
let clearBtn=document.getElementById("clearBtn");
let movieCount=document.getElementById("movieCount");
let movieList=document.getElementById("movieList");
let mode=document.querySelector(".mode");
let container=document.querySelector(".main-container");

let movies=[];

const showMovies = () => {
    movieList.innerHTML="";
    movies.forEach((movie)=>{
        let li=document.createElement("li");
        li.innerText=movie;
        li.className="li-class";
        movieList.appendChild(li);
    });
    movieCount.innerText=movies.length;
};

// addMovie.addEventListener("click", ()=>{
//     const movieName=movieInput.value.trim();
//     if(movieName!==""){
//         movies.push(movieName);
//         movieInput.value="";
//         showMovies();
//     }
// });

const addNewMovie = () => {
    const movieName = movieInput.value.trim();
    if (movieName !== "") {
        movies.push(movieName);
        movieInput.value = "";
        showMovies();
    }
};

addMovie.addEventListener("click", addNewMovie);

movieInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addNewMovie();
    }
});


clearBtn.addEventListener('click', ()=>{
    movies=[];
    showMovies();
});

let flag=0;

mode.addEventListener("click", function f1(){
    if(flag===0){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        mode.innerText="Light";
        container.style.border="2px solid black";
        mode.style.border="2px solid black";
        flag=1;
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        mode.innerText="Dark";
        container.style.border="2px solid white";
        mode.style.border="2px solid white";
        flag=0;
    }
})