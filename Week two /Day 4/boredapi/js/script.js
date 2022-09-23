


async function fetchActivityToDo(){
    let response = await fetch("https://www.boredapi.com/api/activity");
    console.log(response);
    let activityData = await response.json();
    console.log(activityData);
    let activityURL = activityData.message;
    let resultActivity = document.querySelector( ".activity" )
    // resultActivity.innerHTML = resultActivity;
    resultActivity.innerText = activityData;
}



function activity(element){
    fetchActivityToDo();
}
