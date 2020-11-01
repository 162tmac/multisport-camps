document.querySelector('#children').addEventListener('change', ()=>{
    if (document.querySelector('#children').value === 1) {
        document.querySelector('#child2').style.display = "none";
        document.querySelector('#child3').style.display = "none";
    } else if (document.querySelector('#children').value === 2) {
        document.querySelector('#child2').style.display = "block";
        document.querySelector('#child3').style.display = "none";
    } else if (document.querySelector('#children').value === 3) {
        document.querySelector('#child2').style.display = "block";
        document.querySelector('#child3').style.display = "block";
    }
})