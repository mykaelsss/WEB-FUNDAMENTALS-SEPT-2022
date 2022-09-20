var likeCount = 3;
var likeCountElement = document.querySelector("#likeCount");
function add1(){
    likeCount++;
    likeCountElement.innerText = likeCount + " like(s)"
}
