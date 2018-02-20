// Elements for 18X
var travelTimeId_18X = "updateTime_18X";
var updateTimeElem_18X = document.getElementById(travelTimeId_18X);

// Elements for Mongkok Van
var travelTimeId_mk = "updateTime_mk";
var updateTimeElem_mk = document.getElementById(travelTimeId_mk);

function initMap() {

// Calculate Water St to North Point

  var directionsService_18X = new google.maps.DirectionsService();
  var request_18X = {
    origin: "22.2874255,114.1383956",
    destination: "22.2925641,114.2008828",
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: currentDate,
      trafficModel: "bestguess"
    }
  }
  directionsService_18X.route(request_18X, function(result, status) {
    if (status == 'OK') {
      var travelTimeSeconds_18X = result.routes[0].legs[0].duration_in_traffic.value;
      var minutes_18X = Math.floor(travelTimeSeconds_18X / 60);
      updateTimeElem_18X.textContent = minutes_18X
    } else {
      console.error(status)
    }
  });

// Calculate North St to Yau Ma Tei

  var directionsService_mk = new google.maps.DirectionsService();
  var request_mk = {
    origin: "22.2833195,114.1289208",
    destination: "22.3131821,114.1713361",
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: currentDate,
      trafficModel: "bestguess"
    }
  }
  directionsService_mk.route(request_mk, function(result, status) {
    if (status == 'OK') {
      var travelTimeSeconds_mk = result.routes[0].legs[0].duration_in_traffic.value;
      var minutes_mk = Math.floor(travelTimeSeconds_mk / 60);
      updateTimeElem_mk.textContent = minutes_mk
    } else {
      console.error(status)
    }
  });

}
