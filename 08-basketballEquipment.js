function basketballEquipment(input){
    let annualTrainingFee = Number(input[0]);

    let sneakersPrice = 0.6 * annualTrainingFee;
    let outfitPrice = 0.8 * sneakersPrice;
    let basketballPrice = (1/4) * outfitPrice;
    let accessoriesPrice = (1/5) * basketballPrice;

    let totalPrice = annualTrainingFee + sneakersPrice + outfitPrice + basketballPrice + accessoriesPrice;
    console.log(totalPrice);

}

basketballEquipment(["365"]);