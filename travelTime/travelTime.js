// Elements for 18X
var travelTimeId_18X = "updateTime_18X";
var updateTimeElem_18X = document.getElementById(travelTimeId_18X);

// Elements for Mongkok Van
var travelTimeId_mk = "updateTime_mk";
var updateTimeElem_mk = document.getElementById(travelTimeId_mk);

// Elements for 5X
var travelTimeId_5X = "updateTime_5X";
var updateTimeElem_5X = document.getElementById(travelTimeId_5X);

function initMap() {

// Calculate Water St to North Point (18X)

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

// Calculate North St to Yau Ma Tei (MK Van)

  var directionsService_mk = new google.maps.DirectionsService();
  var request_mk = {
    origin: "22.2833195,114.1289208",
    destination: "22.3153212,114.173002",
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
  
// Calculate Kwong Sang Hong Bldg to Kennedy Town (5X)

  var directionsService_5X = new google.maps.DirectionsService();
  var request_5X = {
    origin: "22.2779839,114.1775731", // 298 Computer Zone
    destination: "22.2850092,114.1318056", // Sai Cheung Street
    travelMode: "DRIVING",
    waypoints: [{location: "22.2795922,114.1618817", stopover: false}], // China Bank Tower
    optimizeWaypoints: true,
    drivingOptions: {
      departureTime: currentDate,
      trafficModel: "bestguess"
    }
  }
  directionsService_5X.route(request_5X, function(result, status) {
    if (status == 'OK') {
      var travelTimeSeconds_5X = result.routes[0].legs[0].duration_in_traffic.value;
      var minutes_5X = Math.floor(travelTimeSeconds_5X / 60);
      updateTimeElem_5X.textContent = minutes_5X
    } else {
      console.error(status)
    }
  });

}
