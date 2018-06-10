var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = new express();




app.get('/', function (req, res) {
  res.send(generateStudents());
});

app.listen(3000, function () {
  console.log('Accepting HTTP requests on port3000!');
});


function generateStudents(){
	var numberOfStudents = chance.integer({min:0, max:10});
	console.log(numberOfStudents);
	var students = [];
	for(var i = 0; i < numberOfStudents; i++){
		var gender = chance.animal();
		students.push({
			gender:gender
		});
	};
	console.log(students);
	return students;
}
