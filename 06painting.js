function repainting(input) {
    let nylonQuantity = Number(input[0]);
    let painQuantity = Number(input[1]);
    let ThinnerQuantity = Number(input[2]);
    let workHours = Number(input[3]);
    
    let nylonSum = (nylonQuantity + 2) * 1.50;
    let paintSum = (1.10 * painQuantity) *14.50;
    let thinnerSum = ThinnerQuantity * 5;

    let materialsSum = nylonSum + paintSum + thinnerSum + 0.40;
    let paymentPerHour = 0.3 * materialsSum;
    let totalPayment = workHours * paymentPerHour;
    let totalSum = materialsSum + totalPayment;


    console.log(totalSum);
}

repainting (["10", "11", "4", "8"]);