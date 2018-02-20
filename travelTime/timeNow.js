//Variables

var currentDate = new Date(); //this is the prototype for getting time information
	
var dow = currentDate.getDay();			//get the day-of-week today
var h = currentDate.getHours();			//get the hour now
var m = currentDate.getMinutes();			//get the minute now

var year = currentDate.getFullYear();		//get year
var month = currentDate.getMonth();		//get month now
var day = currentDate.getDate();			//get date now

function pad2(number) {
	return (number < 10 ? '0' : '') + number
}
