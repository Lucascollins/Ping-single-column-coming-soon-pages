'use strict'


window.addEventListener('load',()=>{
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let btn = document.querySelector("#btn")
    let input = document.querySelector("#input")
    let emailConfirm = document.getElementById("active")
    let validationForms

    input.addEventListener('input',()=>{
        validationForms = emailRegex.test(input.value)
        if(validationForms == true){
            btn.disabled = false
            btn.addEventListener('click',(e)=>{
                e.preventDefault()
                reset(input,btn)
                displayOn(emailConfirm)
                setTimeout(() => noneDisplay(emailConfirm), 4000);
            })   
        }
        if(validationForms == false){
            btn.disabled = true
        }
        
    })
})

const displayOn = (element)=>{
    element.style.display = "list-item"

}

const noneDisplay = (element)=>{
    element.style.display = "none"
}

const reset = (input,btn)=>{
    input.value = ""
    btn.disabled = true
    
}
