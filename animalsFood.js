function dogCatShop(input){
    let dogFoodOrder = Number (input[0]);
    let catFoodOrder = Number (input[1]);
    let dogFoodPrice = 2.5;
    let catFoodPrice = 4.0;
    let sentDogFood = (dogFoodOrder * dogFoodPrice);
    let sentCatFood = (catFoodOrder * catFoodPrice);
    let finalPriceBe = sentDogFood + sentCatFood;
    console.log(`${finalPriceBe} lv.`);
    
    }
    
    dogCatShop(["5", "4"])