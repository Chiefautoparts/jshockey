'use strict';

var League = [];

var East = [];
var West = [];

var Northern = ['Philadelphia Cabbage Schuckers', 'Pittsburgh Shark Punchers', 'Washington Engines', 'Boston Bar Brawlers', 'Buffalo Untamed Wings', 'Salem Witch burners'];
var SouthEastern = ['North Carolina Rocketmen', 'Tallahassee Swamp Kings', 'Miami King Pins', 'Atlanta Hood Crawlers', 'Atlantic City Fist Pumpers', 'El Paso Nachos'];

var Central = ['Chicago Deep Dishes', 'Detroit Dog Fighters', 'Toronto Mountees', 'Nebraska Screaming Banshees', 'Colorado Green Leafs', 'Manatoba Moiuntain Men'];
var Pacific = ['Seattle Fighting Salmon', 'San Fransico Sadomites', 'Portland Hipsters', 'Sasskatoon sasskatooners', 'Jueno Moose Jockeys', 'San Jose Rainbow Dancers'];

East.push(Northern);
East.push(SouthEastern);
West.push(Central);
West.push(Pacific);

// var randNum = Math.floor((Math.random() * 100) + 50);

// function Team(city, name, division, off, def, goal){
// 	this.city = city;
// 	this.name = name;
// 	this.division = division;
// 	this.off = randNum;
// 	this.def = randNum;
// 	this.goal = randNum;

// 	var teamStats = "Offense: " + this.off + ", Defense: " + this.def + ", Goalie: " + this.goal + ".";

// 	console.log('The ' + this.city + ' ' + this.name + ' have been created.');
// 	var write = document.wrtie('The ' + this.city + ' ' + this.name + ' have been created.');
// }

