document.querySelector('#children').addEventListener("change", ()=>{
    let noOfChildren = document.querySelector('#children').value;
    let child2 = document.querySelector('#child2');
    let child3 = document.querySelector('#child3');

    if (noOfChildren === "1") {
        child2.style.display = "none";
        child2.required = false;
        child3.style.display = "none";
        child3.required = false;
    } else if (noOfChildren === "2") {
        child2.style.display = "block";
        child2.required = true;
        child3.style.display = "none";
        child3.required = false;
    } else if (noOfChildren === "3") {
        child2.style.display = "block";
        child2.required = true;
        child3.style.display = "block";
        child3.required = true;
    }
})