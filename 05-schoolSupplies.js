function schoolSupplies(input) {
    let penPackets = Number(input[0]);
    let markerPackets = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let price = penPackets * 5.8 + markerPackets * 7.2 + detergentLiters * 1.2;
    let discount = discountPercent * price;

    let finalPrice = price - discount;
    console.log(finalPrice);

}

schoolSupplies([["2", "3", "4", "25"]]);