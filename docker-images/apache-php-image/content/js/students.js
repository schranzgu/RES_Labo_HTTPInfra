$(function() {
	console.log("Loading students");

		function loadStudents(){
		$.getJSON( "/api/students/", function( students ){
			console.log(students);
			var message = "Nobody is here";
			if ( students.length > 0 ) {
				message = students[0].firstName + " " + students[0].lastName;
			}
			$(".section-heading").text(message);
		});
	};
	loadStudents();
	setInterval( loadStudents, 2000 );
});
