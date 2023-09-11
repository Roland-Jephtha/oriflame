// alert("welcome")

function cal() {

    let base=document.getElementById("b").value
    let height=document.getElementById("h").value


    let sum = 0.5* Number(base) * Number(height)   
    document.getElementById("answer").innerHTML= "Answer: " +  sum

}

// let Name = prompt("what is your name")


// if (Name == "efe") {

//     alert("The owner of this pc is "+ Name + " so i will open")
    
// } else {

//     alert("error, am not opening for you")
    
// }


let i;
let j;

for (i = 0; i<=11; i++) {


    for ( j = 0; j<=11; j++) {

        console.log(i + " x " + j + " = " + i*j)
        // document.write(i + " x " + j + " = " + i*j + "<br>")

    }

    console.log("************************")
    // document.write("************************")



        
}








