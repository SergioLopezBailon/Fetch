window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const api=`https://api.darksky.net/forecast/c934ddd5ad2b595e92eb48b5fe9d6910/${lat},${long}`;
        });
    }
});