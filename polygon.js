function getShape(){
    var sides = prompt("The Naked Rhino would like you to enter the number of sides");
    switch(sides) {
        case "0":
            alert("Number of sides=0\nName of polygon = There are no polygons with zero sides!");
            break;
            case "1":
                alert("Number of sides=1\nName of polygon = Monogon");
                break;
                case "2":
                alert("Number of sides=2\nName of polygon = Bigon");
                break;
                case "3":
                alert("Number of sides=3\nName of polygon = Trigon");
                break;
                case "4":
                alert("Number of sides=4\nName of polygon = Tetragon");
                break;
                case "5":
                alert("Number of sides=5\nName of polygon = Pentagon");
                break;
                case "6":
                alert("Number of sides=6\nName of polygon = Hexagon");
                break;
                case "7":
                alert("Number of sides=7\nName of polygon = Heptagon");
                break;
                case "8":
                alert("Number of sides=8\nName of polygon = Octagon");
                break;
                case "9":
                alert("Number of sides=9\nName of polygon = Enneagon");
                break;
                case "10":
                alert("Number of sides=10\nName of polygon = Decagon");
                break;
    }
}
function validateEntry(sides){
    sides=Math.round(sides);
    if (sides < 0){
        sides = Math.abs(sides);
    }
    if(sides>10){
        alert("You entered a number higher than 10! Try again between 0-10");
    }
}
getShape();
validateEntry();

