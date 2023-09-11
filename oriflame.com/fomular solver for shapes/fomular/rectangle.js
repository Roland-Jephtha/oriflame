alert("welcome")

function cal() {

    let lenght=document.getElementById("l").value
    let breaht=document.getElementById("b").value


    let sum =  Number(lenght) * Number(breaht)   
    document.getElementById("answer").innerHTML= "Answer: " +  sum

}