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

concert-this accepts artists as an input, and returns that artist's upcoming performances venue name, location, and the date of each show. 

[![Image from Gyazo](https://i.gyazo.com/600e5570b174617ca42e1d9bc8d9f1b6.gif)](https://gyazo.com/600e5570b174617ca42e1d9bc8d9f1b6)

### spotify-this-song

### movie-this

### do-what-it-says

### Logging the data



## More Info

The **github** for this project can be found here: [Github](https://github.com/nataliebrickley/KNA-Music)
___
This project was created and is maintained by **Natalie Brickley,** **Kevin Gorham,** and **Andres Valdes**. 

Contact us at <NattalieRose@gmail.com>, <Kevin.Gorham@gmail.com>, and <LightsProgrammer@gmail.com>.