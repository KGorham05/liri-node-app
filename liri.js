require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var moment = require('moment');
var axios = require("axios");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchTerm = '';
var searchSpaced = '';
var liriResponse = '';


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
var logMovieData = function (response) {
    liriResponse = "-------------------- Response --------------------\r\nTitle: " + response.data.Title + "\r\nYear released: " + response.data.Year + "\r\nIMDB Rating: " + response.data.imdbRating + "\r\nRotten Tomatoes: " + response.data.Ratings[1].Value + "\r\nCountry produced: " + response.data.Country + "\r\nLanguage: " + response.data.Language + "\r\nPlot: " + response.data.Plot + "\r\nActors: " + response.data.Actors + "\r\n----------------------- End ----------------------";
    console.log(liriResponse);
    fs.appendFile("log.txt", liriResponse, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Content added to log.txt")
        }
    })
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
                // name of the venue, venue location, formatted date
                liriResponse = "\r\nVenue name: " + response.data[i].venue.name + "\r\nLocation: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country + "\r\n" + dateFormatted;
                console.log(liriResponse);
                fs.appendFile("log.txt", liriResponse, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Content added to log.txt")
                    }
                })
            }
            console.log("----------------------- End ----------------------")
        });
};
var spotifyThis = function () {
    // node liri.js spotify-this-song '<song name here>'
    if (searchSpaced) {
        spotify.search({ type: 'track', query: searchSpaced, limit: 10 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            };
            console.log("-------------------- Response --------------------")
            for (var i = 0; i < data.tracks.items.length; i++) {
                // This will show the following information about the song in your terminal/bash window
                liriResponse = "\r\nArtist: " + data.tracks.items[i].album.artists[0].name + "\r\nSong Name: " + data.tracks.items[i].name + "\r\nPreview Url: " + data.tracks.items[i].preview_url + "\r\nAlbum Name: " + data.tracks.items[i].album.name + "\r\n--------------------------------------------------";
                console.log(liriResponse);
                fs.appendFile("log.txt", liriResponse, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Content added to log.txt")
                    }
                })
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
var movieThis = function () {
    // node liri.js movie-this '<movie name here>'
    if (searchTerm) {
        axios
            .get(movieUrl)
            .then(function (response) {
                logMovieData(response);
            });
    } else {
        // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        axios
            .get(mrNobodyUrl)
            .then(function (response) {
                logMovieData(response);
            });
    };

};
var doIt = function () {
    // node liri.js do-what-it-says
    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log(error);
        }
        var dataArr = data.split(",");
        var val = dataArr[1];
        command = dataArr[0];
        searchSpaced = val.substring(1, (val.length - 1));
        searchTerm = searchSpaced.replace(/\s/g, '');
        movieUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + searchSpaced;
        bandsUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";

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
    });
};


moment().format();
createSearchTerm();
createSearchTermSpaced();

var bandsUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";
var movieUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + searchSpaced
var mrNobodyUrl = "http://www.omdbapi.com/?apikey=trilogy&t=mr.nobody"

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


