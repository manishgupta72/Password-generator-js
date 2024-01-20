let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.innerText = inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.innerText = inputSlider.value;
})

genBtn.addEventListener('click', () => {

    passBox.value = generatePassword();
})

let lowerchar = 'abcdefghijklmnonpqrstuvwxyz';
let upperchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numberchar = "1234567890";
let symbolchar = "~!@#$%&*^";

function generatePassword() {
    let genPassword = "";
    let allcharaters = "";


    allcharaters += lowercase.checked ? lowerchar : "";
    allcharaters += uppercase.checked ? upperchar : "";
    allcharaters += numbers.checked ? numberchar : "";
    allcharaters += symbols.checked ? symbolchar : "";

    if(allcharaters=="" || allcharaters.length==1)
    {
        return generatePassword;
    }

    let i = 0;

    while (i <= inputSlider.value) {
        genPassword += allcharaters.charAt(Math.random() * allcharaters.length);
        i++;
    }

    return genPassword;

}

copyIcon.addEventListener('click',()=>{
    if(passBox.value!="" || passBox.value.length>=1)
    {
         navigator.clipboard.writeText(passBox.value);
         copyIcon.innerHTML="check"
         copyIcon.title="Password Copied"
    }
    setTimeout(() => {
        copyIcon.innerHTML="content_copy"
         copyIcon.title="Password Copied"
    }, 3000);
})
