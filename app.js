//assignment1

const getRandomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

console.log(getRandomColor());

function changeBackgroundColor() {
    let mybody=document.getElementsByTagName("body")[0];
    // let mybody=document.querySelector("body");

    mybody.style.backgroundColor = getRandomColor()
    // document.body.style.backgroundColor = getRandomColor() 
}

changeBackgroundColor()

//assignment2

let count = 0

function updateCounter(){
    // let title = document.getElementById('title')
    // title.innerHTML = '<h1>Thanks for joining the BootCamp 🎉</h1>'
    // let btn = document.getElementById('btn')
    // btn.style.display = 'none'
    let counterButton = document.getElementById('counterButton')
    console.log(count)
    
    console.log(counterButton)
    // counterButton.count = count
    document.getElementById('count').innerHTML = count
    count += 1
    console.log(count)
}

updateCounter()