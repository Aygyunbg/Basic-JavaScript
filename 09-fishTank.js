function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentTaken = Number(input[3]);

    let volume = length * width * height;
    
    // това е формула за Обем която се смята.
    
    //сега на следващият ред трябва да преобразуваме от кубични литри в литри, като разделим на 1000.
    
    let volumeInL = volume / 1000;
    let volumTaken = (percentTaken / 100) * volumeInL;
    
    // porcentTaken тук е процента 0,17 от 100
    
    let volumeFree = volumeInL - volumTaken;

    console.log(volumeFree)
}

fishTank(["85", "75", "47", "17"]);