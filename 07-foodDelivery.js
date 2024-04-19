function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let groupPrice = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
    let desertPrice = 0.2 * groupPrice;

    let totalPrice = groupPrice + desertPrice + 2.50;

    console.log(totalPrice);

}

foodDelivery(["2", "4", "3"]);