let homebtn = document.getElementById("home")
let personalbtn = document.getElementById("personal")
let carbtn = document.getElementById("car")

homebtn.addEventListener('click', () => {
    document.querySelector('label').innerHTML = "Home loan amount:";
    homebtn.classList.toggle('btn-click');
    personalbtn.classList.remove('btn-click');
    carbtn.classList.remove('btn-click');
});

personalbtn.addEventListener('click', () => {
    document.querySelector('label').innerHTML = "Personal Loan Amount:";
    homebtn.classList.remove('btn-click');
    personalbtn.classList.toggle('btn-click');
});

carbtn.addEventListener('click', () => {
    document.querySelector('label').innerHTML = "Car Loan Amount:";
    carbtn.classList.toggle('btn-click');
    homebtn.classList.remove('btn-click');
    personalbtn.classList.remove('btn-click');
});

// ----------------------------------------------------------
const rangeSlider = document.getElementById('rangeSlider');
const loanamount = document.getElementById('loanAmount');


rangeSlider.addEventListener('input', () => {
    loanamount.value = rangeSlider.value;
});

const rateslide = document.getElementById('rateslide');
let interestRate = document.getElementById('interestRate');
rateslide.addEventListener('input', () => {
    interestRate.value = rateslide.value;
});

const tenureslide = document.getElementById('tenureslide');
let loanTenure = document.getElementById('loanTenure');
tenureslide.addEventListener('input', () => {
    loanTenure.value = tenureslide.value;
});

// ------------------------------------------------------------

// calulation part start here 

let btnsubmit = document.getElementById('calculate');

btnsubmit.addEventListener('click', () => {
    if (loanamount.value == "" && interestRate.value == "" && loanTenure.value == "") {
        alert("Please enter the details");
    }
    else if (loanamount.value == "") {
        alert("Please enter the amount");
    }
    else if (interestRate.value == "") {
        alert("Please enter the interest Rate");
    }
    else if (loanTenure.value == "") {
        alert("Please enter the loan Tenure");
    }
    else {
        document.querySelector(".resultbox").style.display = 'block';
        let p = loanamount.value;

        const monthlyrate = interestRate.value / 12 / 100;
        const tensureinmonths = loanTenure.value * 12;
        const emi = (p * monthlyrate * Math.pow(1 + monthlyrate, tensureinmonths)) / (Math.pow(1 + monthlyrate, tensureinmonths) - 1);

        document.getElementById('emi').innerHTML = `₹${Math.floor(emi)}`;
        document.getElementById('Principalamount').innerHTML = `₹${p}`;
        document.getElementById('totalamount').innerHTML = `₹${parseInt((Math.floor(emi)) * tensureinmonths) + parseInt(p)}`;
    }
});



// ------------------progress bar------------------- 

const circularProgress = document.querySelector('.circular-progress');
const progressValue = document.getElementById('progress-value');

let totalProgress = 0;

function updateProgress(progress) {
    const percentage = Math.min(progress, 150); // Limit it to 100%
    console.log(percentage)
    circularProgress.style.background = `conic-gradient(#4caf50 ${percentage * 3.6}deg, #ddd 0deg)`;
    progressValue.textContent = `${Math.round(percentage)}%`;

    if (percentage <= 30) {
        circularProgress.style.background = `conic-gradient(#f44336 ${percentage * 3.6}deg, #ddd 0deg)`;
    } 
    else if (percentage <= 70) {
        circularProgress.style.background = `conic-gradient(#ff9800 ${percentage * 3.6}deg, #ddd 0deg)`;
    } 
    else {
        circularProgress.style.background = `conic-gradient(#4caf50 ${percentage * 3.6}deg, #ddd 0deg)`;
    }
}


rateslide.addEventListener("input", () => {
    totalProgress = parseInt(rateslide.value) + parseInt(tenureslide.value) * 2;
    updateProgress(totalProgress);
});

interestRate.addEventListener("input", () => {
    totalProgress = parseInt(interestRate.value)+ parseInt(tenureslide.value) * 2;
    updateProgress(totalProgress);
    rateslide.value=interestRate.value;
});


tenureslide.addEventListener("input", () => {
    totalProgress = parseInt(rateslide.value) * 2 + parseInt(tenureslide.value);
    updateProgress(totalProgress);
});

loanTenure.addEventListener("input", () => {
    totalProgress = parseInt(loanTenure.value)*2 + parseInt(interestRate.value);
    updateProgress(totalProgress);
    tenureslide.value=loanTenure.value;
});

loanamount.addEventListener('input', () => {
    rangeSlider.value = loanamount.value;
});



















