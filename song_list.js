//song list
let All_song = [
{
     name: "Here Now",
     path: "3.mp3",
     img: "3.jpg",
     singer: "Snoh Aalegra"
   },
{
    name: "Cosmic Dawn / Eight Dimension",
    path: "20.mp3",
    img: "20.jpg",
    singer: "Salami Rose Joe Louis"
   },
{
     name: "Taste You on My Breath",
     path: "5.mp3",
     img: "xx.jpg",
     singer: "vbnd"
   },
   {
     name: "Choose Your Weapon",
     path: "1.mp3",
     img: "HK.jpg",
     singer: "Hiatus Kaiyote"
   },
   {
     name: "Thank You Lord",
     path: "4.mp3",
     img: "4.jpg",
     singer: "Faith Evans"
   },
   {
     name: "Something To Do",
     path: "6.mp3",
     img: "5.jpg",
     singer: "Blood Orange"
   },
{
     name: "First Snow",
     path: "7.mp3",
     img: "7.jpg",
     singer: "Count Bass D"
   },
   {
    name: "Lost in Space / Great Scott / 22-26",
    path: "8.mp3",
    img: "8.jpg",
    singer: "Thundercat"
   },
{
    name: "Experience",
    path: "9.mp3",
    img: "9.jpg",
    singer: "Daedulus"
   },
{
    name: "A Cappella",
    path: "11.mp3",
    img: "11.jpg",
    singer: "Daniel Caesar"
   },
{
    name: "Tell Meeeee",
    path: "12.mp3",
    img: "12.jpg",
    singer: "Salami Rose Joe Louis"
   },
{
    name: "Laser Lights",
    path: "13.mp3",
    img: "13.jpg",
    singer: "Rex Orange County"
   },
{
    name: "Lead Existence",
    path: "14.mp3",
    img: "14.jpg",
    singer: "King Krule"
   },
{
    name: "Darkseid",
    path: "15.mp3",
    img: "15.jpg",
    singer: "Isaiah Rashad"
   },
{
    name: "We'll Die",
    path: "16.mp3",
    img: "16.jpg",
    singer: "Thundercat"
   },
{
    name: "Hello Welcome",
    path: "17.mp3",
    img: "17.jpg",
    singer: "Homeshake"
   },
{
    name: "Fear of Intimacy",
    path: "18.mp3",
    img: "18.jpg",
    singer: "Zack Villere"
   },
{
    name: "Yebba's Heartbreak",
    path: "19.mp3",
    img: "19.jpg",
    singer: "Yebba"
   },
{
     name: "White",
     path: "2.mp3",
     img: "2.jpg",
     singer: "Odd Future, Frank Ocean"
   },
{
    name: "Go Round",
    path: "21.mp3",
    img: "21.jpg",
    singer: "Cortex"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/