function listen(){
document.getElementById(".button").addEventListener("click", function(event){
    event.preventDefault()
  });
}

function upload(){
    console.log("hello")
    let formel = document.querySelector(".form")
    console.log(new FormData(document.querySelector(".form")))
    fetch("http://localhost:3000/posts", {
        method: "POST",
        body: new FormData(formel)
    })
}