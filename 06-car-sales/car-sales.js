module.exports = function(carsSold){

        const totals = {};
        for (const car of carsSold) {
          if (!totals[car.make]) {
            totals[car.make] = car.price;
          } else {
            totals[car.make] += car.price;
          }
        }
        return totals;
      }
