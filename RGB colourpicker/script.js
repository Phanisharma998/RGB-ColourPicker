    var body = document.querySelector("body")
    var red = document.querySelector(".red")
    var green = document.querySelector(".green")
    var blue = document.querySelector(".blue")
    var values= document.querySelector(".values")

    function rgb(){
        let r1 = red.value
        let g1 = green.value
        let b1 = blue.value
        values.innerHTML = `rgb (${r1},${g1},${b1}) `
        document.body.style.backgroundColor = ` rgb(${r1},${g1},${b1}) `
    }
