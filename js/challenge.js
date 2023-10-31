let count = 0
let numberLikes = {}
let plus = document.querySelector("#plus")
let counter = document.querySelector("#counter")
let minus = document.querySelector("#minus")
let like = document.querySelector("#heart")
let updatedLikes = document.querySelector(".likes")
let form = document.querySelector("#comment-form")
//let resume = document.querySelector("#resume")

// let intervalId = setInterval(myCallback, 1000);


let pause = document.querySelector("#pause")

like.addEventListener("click", onLike)
plus.addEventListener("click", adder)
minus.addEventListener("click", decrementor)
document.addEventListener("DOMContentLoaded", () => {
    setInterval(()=>{
    adder()
    },1000)
})

form.addEventListener("submit",(e)=>{
    newComment(e.target["comment-input"].value)
    e.preventDefault()
    form.reset()
}
)

pause.addEventListener("click",(e)=>{
    buttonDisabler()
})
// function myCallback(){
//     count += 1;
//     counter.innerHTML = count;
// }


function adder(){
    if(plus.disabled===false)
    count++
    updatesCounter()
}

function decrementor(){
    count--
    updatesCounter()
}

function updatesCounter(){
    counter.innerText = count
}

function onLike(){
    if(numberLikes[count]>0){
        numberLikes[count]++
    }
    else{
        numberLikes[count]=1
    }
    console.log(numberLikes)
    updatesLikes()
}

function updatesLikes(){
    updatedLikes.innerHTML=""
    for(key in numberLikes){
        let li = document.createElement("li")
        li.textContent = `${key} has been liked ${numberLikes[key]}`
        updatedLikes.appendChild(li)
    }
}

function newComment(comment){
    let p = document.createElement('p')
    p.textContent = `${comment}`
    document.querySelector('#list').appendChild(p)
}

//  function pauser(){
//      clearInterval(intervalId);
//      //pause.style.display = 'none';
//      //resume.style.display = '';
// }

function buttonDisabler(){
    if (pause.innerHTML === "resume"){
    like.disabled = false
    minus.disabled = false
    plus.disabled = false
    submit.disabled = false
    pause.innerHTML = "pause"}
    else {
        like.disabled = true
        minus.disabled = true
        plus.disabled = true
        submit.disabled = true
        pause.innerHTML = "resume"
    }
}

// function buttonEnabler(){
//     like.enabled = true
//     minus.enabled = true
//     plus.enabled = true
//     submit.enabled = true
//     resume.innerHTML = "pause"
// }
//function resumer(){
    //intervalId = setInterval(myCallback, 1000);
    //pause.style.display = '';
    //resume.style.display = 'none';
//}