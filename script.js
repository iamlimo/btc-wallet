let deposit = document.getElementById('deposit')

deposit.addEventListener('click', function(){
    document.getElementById("overlay").style.display = "block";
})


document.getElementById("close").addEventListener('click', function(){
     document.getElementById("overlay").style.display = "none";
})