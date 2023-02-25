const ButtonGenerator = document.querySelector("#btn-gerar");
const containerDivError = document.querySelector(".containerHTML");
const insertPass = document.querySelector('.local-pass-display');


ButtonGenerator.addEventListener("click", () => {
    getConfigGenerator();
});

function getConfigGenerator(){

    const PasswordSize = document.querySelector("#input-pass-size").value;
    const PasswordCharacters = document.querySelector("#input-pass-characters").checked;
    const PasswordNumbers = document.querySelector("#input-pass-numbers").checked;
    const PasswordCapitalLetter = document.querySelector("#input-pass-capital-letter").checked;
    const PasswordLowerCase = document.querySelector("#input-pass-lowercase").checked;


    if(PasswordCharacters === false && PasswordNumbers === false && PasswordCapitalLetter === false && PasswordLowerCase === false) {

            containerDivError.innerHTML = "<p id='text-error'>Selecione pelo menos uma opção</p>";
            const removeElement = document.querySelector("#text-error")
            setTimeout(() => {
                removeElement.remove()
            }, 10000)
    }
        if(PasswordCharacters === true || PasswordNumbers === true || PasswordCapitalLetter === true || PasswordLowerCase === true){
            if (PasswordSize > 30 || PasswordSize < 3){
                containerDivError.innerHTML = "<p id='text-error'>Não é possivel gerar numeros com o tamanho menor que 3 ou acima de 30</p>";

                setTimeout(()=>{
                    const removeElement = document.querySelector("#text-error")
                    removeElement.remove()
                }, 10000)
            } else{
                viewOptionsAndMakeString(PasswordCharacters, PasswordNumbers, PasswordCapitalLetter, PasswordLowerCase, PasswordSize)

            }
        }
}

function viewOptionsAndMakeString(PasswordCharacters, PasswordNumbers, PasswordCapitalLetter, PasswordLowerCase, PasswordSize){
    let PasswordCharsTotal = "";

    if(PasswordCharacters === true){
        PasswordCharsTotal += "!@#$&*()+-*/?";
    }
    if(PasswordNumbers === true){
        PasswordCharsTotal += "0123456789";
    }
    if(PasswordCapitalLetter === true){
        PasswordCharsTotal += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(PasswordLowerCase === true){
        PasswordCharsTotal += "abcdefghijklmnopqrstuvwxyz";
    }

    passwordGenerator(PasswordCharsTotal, PasswordSize)
}

function passwordGenerator(passHead, passSize) {
    let password = "";

    for (let i = 0; i < passSize; i++) {
        let randomNumber = Math.floor(Math.random() * passHead.length);
        password += passHead.substring(randomNumber, randomNumber + 1);
    }
    insertPass.innerText = password
}
