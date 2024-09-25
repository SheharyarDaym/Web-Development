let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click" , (e) =>{
        const input = document.querySelector("input");
        if(e.target.innerHTML == "=")
        {
            try{
                string = eval(string);
                if(!isFinite(string)){
                    throw new Error("Invalid Calculation");
                }
                input.value = string;
            }

            catch(error){
                input.value = "Error"; 
                string = "";
            }
        }

        else if(e.target.innerHTML == "C"){
            string = "";
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})