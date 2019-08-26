

require("dotenv").config();


var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");
var fs = require('fs');
var axios = require("axios");


const keys = require("./assets/javascript/keys.js");
console.log(keys);
var divider = "\n------------------------------------------\n\n";

var Omdb = function () {

    this.movieThis = (movie){
        var url = "http://www.omdbapi.com/?i=tt3896198&apikey="
    }
}


