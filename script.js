const result = document.getElementById("inputext");

const calculate = (number) => {
    result.value = result.value + number;

}

const Result = ()=> {
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Enter a Valid Input");
    }
}

function clr(){
    result.value = "";
}