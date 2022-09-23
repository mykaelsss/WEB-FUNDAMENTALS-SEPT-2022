


async function fetchDogImage(){
    let repsonse = await fetch ( "https://dog.ceo/api/breeds/image/random" );
    console.log(repsonse);
    let dogData = await repsonse.json();
    console.log( dogData );
    let imageURL = dogData.message;
    let resultSection = document.querySelector( ".retrieve" );
    resultSection.innerHTML = `<img src="${imageURL}" alt="Dog Image" />`;
}


function retrieveDog(element){
    console.log("You clicked the button")
    fetchDogImage();
    console.log( "This will come first!" );
}
