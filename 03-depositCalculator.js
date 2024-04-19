function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;

    let sum = depositedSum + depositPeriod * ((depositedSum * annualInterestRate ) / 12)
    
    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);