# LIRI Node Application

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## Technologies 

Technologies used in the creation of this application include: 

1. Javascript
2. Node
    * NPM Packages
        * dotEnv
        * Spotify API
        * Axios
            * Bands in Town API
            * OMDB API
        * Moment.js
3. Git

## Getting Started

### Test LIRI on your own machine

In order to use this LIRI app, you will need Node.js installed on your machine. Then, clone this repo to a directory on your computer. Next, navigate to the directory where you cloned this repo in your terminal. You'll need to enter NPM init, then NPM install to get the app functioning. Lastly, you'll need to supply your own API key for the Spotify API.

### Using LIRI

To use LIRI, begin by opening your terminal and navigating to the folder where you cloned this repo. 
![terminal image](https://i.gyazo.com/0a8989d13fc7bcaee940a716c0ebabf3.png)

LIRI will accept one of four commands:

* concert-this [artist]
* spotify-this-song [song name]
* movie-this [movie]
* do-what-it-says

To execute one of these functions, type Node liri.js [command] [argument] into the terminal. 

### concert-this

The concert-this command accepts artists as an input, and returns that artist's upcoming performances venue name, location, and the date of each show. 

[![Image from Gyazo](https://i.gyazo.com/600e5570b174617ca42e1d9bc8d9f1b6.gif)](https://gyazo.com/600e5570b174617ca42e1d9bc8d9f1b6)

### spotify-this-song

The spotify-this-song command accepts a song title as an input, and returns information about songs with that title. Specifically we return the artist name, song title, album name, and a URL to a preview of the song. 

[![Image from Gyazo](https://i.gyazo.com/4b0f5c34b091c36c689d364a7a181a1d.gif)](https://gyazo.com/4b0f5c34b091c36c689d364a7a181a1d)

### movie-this

The movie-this command accepts a movie title as an input, and returns information about that film. Specifically, we display the title, year released, various ratings, a plot summary, lead actors and actresses, the country it was produced in, and even the language of the film.

[![Image from Gyazo](https://i.gyazo.com/5008baa82fc97f491d0544d37a5acc5a.gif)](https://gyazo.com/5008baa82fc97f491d0544d37a5acc5a)

### do-what-it-says

In addition to accepting commands through the terminal, LIRI can also accept commands and arguments written in the random.txt file. 

The do-what-it-says command looks in the random.txt file and executes the LIRI search command indicated in that text file. Currently, the random.txt file displays one line: 

[![Image from Gyazo](https://i.gyazo.com/163401b6d0de25f66b8672dc8a9f598a.png)](https://gyazo.com/163401b6d0de25f66b8672dc8a9f598a)

In the example, we input 
>Node liri.js do-what-it-says


into the terminal. LIRI calls the spotify-this-song command with the argument "something about us" and returns information about a that song by Daft Punk. If you've cloned this repo, you can input different commands and parameters into the random.txt file and see how the do-what-it-says command returns different results. 

[![Image from Gyazo](https://i.gyazo.com/277be18cb393b518fddc79fa4bb19906.gif)](https://gyazo.com/277be18cb393b518fddc79fa4bb19906)

### Logging the data

In addition to printing the response to the console, LIRI also logs it's responses to a text file called log.txt.

[![Image from Gyazo](https://i.gyazo.com/4cd768ab6e61b3b5b907d0b8e5de627b.gif)](https://gyazo.com/4cd768ab6e61b3b5b907d0b8e5de627b)

## More Info

The **github** for this project can be found here: [Github](https://github.com/KGorham05/liri-node-app)
___
This project was created and is maintained by **Kevin Gorham**.  

Contact me at <Kevin.Gorham@gmail.com>