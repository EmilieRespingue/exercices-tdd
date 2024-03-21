module.exports = function(cars){
    const repaintedCars = [];
    for (const car of cars) {
        const repaintedCar = { ...car }; // Clone the original car object
        if (repaintedCar.colour === "Red") {
            repaintedCar.colour = "Pink";
        }
        repaintedCars.push(repaintedCar);
    }
    return repaintedCars;
 
}