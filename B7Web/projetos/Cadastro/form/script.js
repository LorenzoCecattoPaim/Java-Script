let LoreValidator = {
    handleSubmit: ( item ) => {
        item.preventDefault()
        let send = true

        let inputs = form.querySelectorAll('input')

        LoreValidator.clearError()


        for( let i=0; i<inputs.length; i++){
            let input = inputs[i]
            let check = LoreValidator.checkInput(input)

            if(check !== true){
                send = false

                LoreValidator.showError(input, check)
            }
        }

        if(send){
            form.submit()
        }
    },
    checkInput:(input) =>{
        let rules = input.getAttribute('data-rules')

        if(rules!= null){
            rules = rules.split('|')
            for(let k in rules){
                let Rdetails = rules[k].split('=')

                switch(Rdetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo não pode estar vazio'
                        }
                    break
                    case 'min':
                        if(input.value.length < Rdetails[1]){
                            return 'Campo tem que ter pelo menos '+Rdetails[1] +' caracteres'
                        }
                    break
                    case 'email':
                        if(input.value != ''){
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())){
                                return 'E-mail digitado não é válido!'
                            }
                        }
                    break
                }
            }
        }

        return true
    },
    showError:(input, error) => {
        input.style.borderColor = '#FF0000'

        let errorElement = document.createElement('div')
        errorElement.classList.add('error')
        errorElement.innerHTML = error

        input.parentElement.insertBefore(errorElement,input.ElementSibling)
    },
    clearError: () => {
        let inputs = form.querySelectorAll('input')
        for(let i=0; i < inputs.length; i++){
            inputs[i].style = ''
        }
        let errorElement = document.querySelectorAll('.error')
        for(let i=0; i < errorElement.length; i++){
            errorElement[i].remove()
        }
    }

    
}


let form = document.querySelector('.b7validator')
form.addEventListener('submit', LoreValidator.handleSubmit)





