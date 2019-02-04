/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Billie Jean", "Eye of the Tiger", "Immigrant Song", "Flying without Wings"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images=["https://img.discogs.com/va-9ph723y7ayF0ayZgjv_LLxbM=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-309649-1201009566.jpeg.jpg",
"https://images-na.ssl-images-amazon.com/images/I/61Gm3XmbNpL._SX355_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVMIkQrLKlkOjGt3eN72E_PGDi3DSZAYUsdbYEZmnXiO04anJbg","https://images-na.ssl-images-amazon.com/images/I/41QW6YD3SRL.jpg"]
var artists=["Michael Jackson","Survivor","Led Zeppelin","Ruben Studdard"]
var lengths=[294,246,147,224]
var links=["https://www.youtube.com/watch?v=Kr4EQDVETuA","https://www.youtube.com/watch?v=ktQ8FbzniLU","https://www.youtube.com/watch?v=y8OtzJtp-EM","https://www.youtube.com/watch?v=QhqUt3CAJUI"]


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(x){
    $("#songs").append("<p> " + x + ".</p>");
});
    images.forEach(function(x){
        $("#images").append("<img src= " + x + ">");
    
});
        artists.forEach(function(x){
            $("#artists").append("<p>" + x + "</p>");
        });
            lengths.forEach(function(x){
                $("#length").append("<p>" + x + "</p>");
        }); 
        links.forEach(function(x) {
            $("#links").append("<a href=" + x + ">Watch</a>");
        });
}
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.

var newSong=$("#song").val();
    songs.push(newSong);
var imageUrl=$("#image").val();
    images.push(imageUrl);
var artistName=$("#artist").val();
    artists.push(artistName);
var songLength=$("#length").val();
    lengths.push(songLength);
var songLink=$("#link").val();
    links.push(songLink);
    

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
