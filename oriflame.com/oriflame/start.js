
alert("welcome to oriflame sofab spo")


alert("TO BUY A PRODUCT YOU HAVE TO ADD CHAT TO SPO OWNER")




const searchInput  = document.getElementById("search");
const container = document.getElementById("products")
const items = container.querySelectorAll(".product");


searchInput.addEventListener('input', () =>{
    const searchTerm = searchInput.value.toLowerCase();

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm))  {
            item.style.display = "block";

        } else{
            item.style.display = 'none'
        };
    }
        
        )


}




)
