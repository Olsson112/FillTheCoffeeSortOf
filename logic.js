document.addEventListener('keydown', function (event) { move(event.key) });
document.addEventListener('keyup', function (event) { stop() });


var cup = {
    topPosition: 0,
    leftPosition: 0,
    degrees: 0
}

var pot = {
    topPosition: 0,
    leftPosition: 0,
    degrees: 0
}

var imageToMove = "cup"
var timer
var selectedKey

function move(key) {
    let image = document.getElementById(imageToMove)
    
    selectedKey = key
    var imageToUpdate

    if(imageToMove == "cup") {
        imageToUpdate = cup
    } else {
        imageToUpdate = pot
    }

    if(!timer) {
        timer = setInterval(() => {
            if(selectedKey == "ArrowUp") {
                imageToUpdate.topPosition -= 2
            } else if (selectedKey == "ArrowDown") {
                imageToUpdate.topPosition += 2
            } else if (selectedKey == "ArrowLeft") {
                imageToUpdate.leftPosition -= 2
            } else if (selectedKey == "ArrowRight") {
                imageToUpdate.leftPosition += 2
            } else if (selectedKey == "q") {
                imageToUpdate.degrees--
            } else if (selectedKey == "w") {
                imageToUpdate.degrees++
            }

            image.style.transform = 'rotate(' + imageToUpdate.degrees + 'deg)'
            image.style.top = imageToUpdate.topPosition.toString() + "px"
            image.style.left = imageToUpdate.leftPosition.toString() + "px"
        }, 10);
    }
}

function stop() {
    clearInterval(timer)
    timer = undefined
}

function selectImage(imageName) {
    imageToMove = imageName
}