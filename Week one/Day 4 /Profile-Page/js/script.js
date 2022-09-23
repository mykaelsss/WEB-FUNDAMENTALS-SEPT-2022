
function editName(element){
    document.querySelector("#jane").innerText= "Cindy Smith";
        }




function removeRequest(element){
    let userRequest = document.querySelector( ".userp" );
    userRequest.remove();
    let decreaseConnectionRequests = document.querySelector(".two");
    decreaseConnectionRequests.innerText--
}


function increaseConnections(element){
    let increaseYourConnections = document.querySelector(".fZero")
    increaseYourConnections.innerText++
}
