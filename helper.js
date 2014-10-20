// Make sure the user can't check-in initially
$("form").hide();
$("p#message").html("Please enable geolocation...");

// Find the users location using geolocation
watchUser = navigator.geolocation.watchPosition(success);

// success is run when watchPosition is successful
function success(position){

	// Test if tracking worked in browser console
	console.log("Tracking was successful!");

	// View position object in browser console
	console.log(position);

	// Capture user location coordinates in variables
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

} // END success
