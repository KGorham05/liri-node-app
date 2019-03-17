require("dotenv").config();
var keys = require("./keys.js");
var moment = require('moment');
var axios = require("axios");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchTerm = '';
var searchSpaced = '';
var date = '';
var createSearchTerm = function () {
    for (var i = 3; i < process.argv.length; i++) {
        searchTerm += process.argv[i];
    }
    console.log(searchTerm);
};
var createSearchTermSpaced = function () {
    for (var i = 3; i < process.argv.length; i++) {
        searchSpaced += process.argv[i] + " ";
    }
    console.log(searchSpaced);
};
var concertThis = function () {
    console.log(bandsUrl);
    axios
        .get(bandsUrl)
        .then(function (response) {
            console.log("-------------------- Response --------------------")
            for (var i = 0; i < response.data.length; i++) {
                // date formatted with moment.js
                var timeString = response.data[i].datetime;
                var date = timeString.substr(0, 10);
                var dateFormatted = moment(date, "YYYY-MM-DD").format("MM/DD/YYYY")
                // name of the venue
                console.log("Venue name: " + response.data[i].venue.name);
                // venue location
                console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country);
                // date formatted MM/DD/YYYY
                console.log(dateFormatted);
            }
            console.log("----------------------- End ----------------------")
        });
};
var spotifyThis = function () {
    // node liri.js spotify-this-song '<song name here>'
    if (process.argv[3]) {
        spotify.search({ type: 'track', query: searchSpaced, limit: 10 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            };
            console.log("-------------------- Response --------------------")
            for (var i = 0; i < data.tracks.items.length; i++) {
                // This will show the following information about the song in your terminal/bash window
                console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
                console.log("Song Name: " + data.tracks.items[i].name);
                console.log("Preview Url: " + data.tracks.items[i].preview_url);
                console.log("Album Name: " + data.tracks.items[i].album.name);
            }
            console.log("----------------------- End ----------------------")
        });
    } else {
        // If no song is provided then your program will default to "The Sign" by Ace of Base.
        spotify.search({ type: 'track', query: "The Sign", limit: 8 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("-------------------- Response --------------------")
            console.log("Artist: " + data.tracks.items[7].album.artists[0].name);
            console.log("Song Name: " + data.tracks.items[7].name);
            console.log("Preview Url: " + data.tracks.items[7].preview_url);
            console.log("Album Name: " + data.tracks.items[7].album.name);
            console.log("----------------------- End ----------------------")
        });
    };









};
// var movieThis           = function () {};
// var doIt                = function () {};



console.log(command);

moment().format();
createSearchTerm();
createSearchTermSpaced();

var bandsUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";
var movieUrl = ""


switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doIt();
        break;
    default:
        console.log("Input is in incorrect format");
};


// What Each Command Should Do



// node liri.js movie-this '<movie name here>'

// This will output the following information to your terminal/bash window:

//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

// It's on Netflix!

// You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

// node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

// Edit the text in random.txt to test out the feature for movie-this and concert-this.