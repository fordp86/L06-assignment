// fetchSunRise function
let sunsetRequest = new XMLHttpRequest();

let baseURL = "https://api.sunrise-sunset.org/json?";


async function fetchSunRise(){
    let myLatitude = document.getElementById("lat").value;
    let myLongitude = document.getElementById("lng").value;

    //create data url
    let myURL = baseURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today";

    //convert data to JSON
    var mySunset = await fetch(myURL).then(res => res.json());
    console.log(mySunset);
    //Get Sunset Div
    var showSunrise = document.getElementById('showSunrise');

    //check if input has a lat and long
    if(myLatitude && myLongitude){
        //create sunrise paragraph
        var getSunset = document.createElement('p');
        getSunset.innerHTML = 'Sunrise Time: ' + mySunset.results.sunrise;
        //create sunset paragraph
        var getSunRise = document.createElement('p');
        getSunRise.innerHTML = 'Sunset Time: ' + mySunset.results.sunset;
        
        //Show Sunrise and Sunset
        showSunrise.appendChild(getSunset);
        showSunrise.appendChild(getSunRise);
    }  
    
    //check myURL
    console.log(myURL);
}

fetchSunRise();