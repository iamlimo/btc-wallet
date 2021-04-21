function closeDeposit(){
    let deposit = document.getElementById('deposit')

deposit.addEventListener('click', function(){
    document.getElementById("overlay").style.display = "block";
})


document.getElementById("close").addEventListener('click', function(){
     document.getElementById("overlay").style.display = "none";
})
}
closeDeposit()

function copyValue(){
    let copyIcon = document.getElementById('copied')
    let inputValue = document.getElementById('wallet-input').value;

copyIcon.addEventListener('click', function(){
    alert(`${inputValue} copied`)
})

}

copyValue()



