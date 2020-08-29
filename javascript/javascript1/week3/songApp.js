const songDatabase = [
  {
    songId: 1,
    title: "My baby",
    artist: "Soggy socks",
  },
  {
    songId: 2,
    title: "3 nails in wood",
    artist: "The carpenters",
  },
  {
    songId: 3,
    title: "Blacker than black",
    artist: "Instant coffee",
  },
  {
    songId: 4,
    title: "When is enough too little?",
    artist: "The spies girls",
  },
];

const myPlaylist = [];

function addSongToDb(song) {
  myPlaylist.push(song); //adds a song to myPlayList
  songDatabase.push([myPlaylist]); //Adds myPlaylist to the database
  console.log(songDatabase);
}

addSongToDb({
  songId: 5,
  title: "Tonight",
  artist: "Tyrese",
});
