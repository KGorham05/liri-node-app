require("dotenv").config();
var keys                = require("./keys.js");
var moment              = require('moment');
var axios               = require("axios");
// var spotify          = new Spotify(keys.spotify);
var command             = process.argv[2];
var searchTerm          = '';
var date                = '';
var createSearchTerm    = function () {
    for (var i = 3; i < process.argv.length; i++) {
        searchTerm += process.argv[i];
    }
    console.log(searchTerm);
};
var concertThis         = function () {
    console.log(bandsUrl);
    axios
        .get(bandsUrl)
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                // name of the venue
                console.log("Venue name: " + response.data[i].venue.name);
                // venue location
                console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country);
                // date formatted with moment.js
                var timeString = response.data[i].datetime;
                var date = timeString.substr(0, 10);
                var dateFormatted = moment(date, "YYYY-MM-DD").format("MM/DD/YYYY")
                console.log(dateFormatted);
            }

        });
};
var spotifyThis         = function () {
// node liri.js spotify-this-song '<song name here>'

// This will show the following information about the song in your terminal/bash window

// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.

// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

// The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

// Step One: Visit https://developer.spotify.com/my-applications/#!/

// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.
};
// var movieThis           = function () {};
// var doIt                = function () {};



console.log(command);

moment().format();
createSearchTerm();

var bandsUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";


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