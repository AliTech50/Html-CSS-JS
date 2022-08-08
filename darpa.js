
const imgs = [
   "img/darpa.jpg",
   "img/darpa-gene.jpg",
  "img/darpa-simian.jpg"
]

const imgs2 = [
   "img/darpa-robotics-challenge.jpg",
   "img/darpa-robotics-challenge2.jpg"
]

const imgs3 = [
  "img/darpa-clock.jpg",
  "img/darpa-darpa.jpg"
]

const container = document.getElementById("container")
const container2 = document.getElementById("container2")
const container3 = document.getElementById("container3")

function renderImages() {
  let imgsDOM = ""
  for(let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt="Nature" src="${imgs[i]}" width="474" height="250">`

  }

  if(container){
    container.innerHTML = imgsDOM
  }

}

function renderImages2() {
  let imgs2DOM = ""
  for(let i = 0; i < imgs2.length; i++) {
    imgs2DOM += `<img alt="Nature" src="${imgs2[i]}" width="400" height="235">`

  }

  if(container2){
    container2.innerHTML = imgs2DOM
  }

}

function renderImages3() {
  let imgs3DOM = ""
  for(let i = 0; i < imgs3.length; i++) {
    imgs3DOM += `<img alt="Nature" src="${imgs3[i]}" width="710" height="370">`

  }

  if(container3){
    container3.innerHTML = imgs3DOM
  }

}

renderImages()
renderImages2()
renderImages3()
