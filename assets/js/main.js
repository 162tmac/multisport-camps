document.querySelector('#children').addEventListener("change", ()=>{
    let noOfChildren = document.querySelector('#children').value;
    let childName2 = document.querySelector('#childName2');
    let childAge2 = document.querySelector('#childAge2');
    let childName3 = document.querySelector('#childName3');
    let childAge3 = document.querySelector('#childAge3');
    let childName4 = document.querySelector('#childName4');
    let childAge4 = document.querySelector('#childAge4');
    let childName5 = document.querySelector('#childName5');
    let childAge5 = document.querySelector('#childAge5');

    let child2 = document.querySelector('#child2');
    let child3 = document.querySelector('#child3');
    let child4 = document.querySelector('#child4');
    let child5 = document.querySelector('#child5');

    if (noOfChildren === "1") {
        child2.style.display = "none";
        childName2.required = false;
        childAge2.required = false;
        child3.style.display = "none";
        childName3.required = false;
        childAge3.required = false;
        child4.style.display = "none";
        childName4.required = false;
        childAge4.required = false;
        child5.style.display = "none";
        childName5.required = false;
        childAge5.required = false;
    } else if (noOfChildren === "2") {
        child2.style.display = "flex";
        childName2.required = true;
        childAge2.required = true;
        child3.style.display = "none";
        childName3.required = false;
        childAge3.required = false;
        child4.style.display = "none";
        childName4.required = false;
        childAge4.required = false;
        child5.style.display = "none";
        childName5.required = false;
        childAge5.required = false;
    } else if (noOfChildren === "3") {
        child2.style.display = "flex";
        childName2.required = true;
        childAge2.required = true;
        child3.style.display = "flex";
        childName3.required = true;
        childAge3.required = true;
        child4.style.display = "none";
        childName4.required = false;
        childAge4.required = false;
        child5.style.display = "none";
        childName5.required = false;
        childAge5.required = false;
    } else if (noOfChildren === "4") {
        child2.style.display = "flex";
        childName2.required = true;
        childAge2.required = true;
        child3.style.display = "flex";
        childName3.required = true;
        childAge3.required = true;
        child4.style.display = "flex";
        childName4.required = true;
        childAge4.required = true;
        child5.style.display = "none";
        childName5.required = false;
        childAge5.required = false;
    } else if (noOfChildren === "5") {
        child2.style.display = "flex";
        childName2.required = true;
        childAge2.required = true;
        child3.style.display = "flex";
        childName3.required = true;
        childAge3.required = true;
        child4.style.display = "flex";
        childName4.required = true;
        childAge4.required = true;
        child5.style.display = "flex";
        childName5.required = true;
        childAge5.required = true;
    }
})

document.querySelector('#camps-list a').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(this).tab('show')
})