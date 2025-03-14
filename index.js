/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */



//                         ________________Given Parameters____________________

// made conversions for parameters

const initial_Velocity = 2.78;                     // velocity (km/second) - Starting speed of spacecraft
const acceleration = 3;                            // acceleration (m/s^2) - Acceleration of spacecraft
const Duration = 3600;                             // seconds (1 hour) - Duration of calculation.
const initial_Distance = 0;                       // distance (km) - Starting distance from reference point
const initial_Fuel = 5000;                        // remaining fuel (kg) - Starting amount of fuel
const fuel_Consumption = 0.5;                     //(kg/s) - Rate at which fuel will burn
const acceleration_Km = acceleration / 1000;      // 1 km = 1000 m  convert m/s to km/s


//                     __________Define function to calculate new Velocity_____________

// Pick up an error with how the function below is called and make it robust to such errors 
//Made this into a function as the function was being called before it was defined.
//Added a check to make sure all inputs are numbers

function calc_NewVelocity(initial_Velocity, acceleration, Duration) { 

  if (typeof initial_Velocity !== "number" || typeof acceleration !== "number" || typeof Duration !== "number") {
    throw new Error("Invalid input: All parameters must be numbers.");
}
  return initial_Velocity + ( acceleration * Duration); 
}


//                      ___________________Calculations_____________________________

const new_Distance = initial_Distance + (initial_Velocity * Duration) //calcultes new distance
const remaining_Fuel = initial_Fuel-(fuel_Consumption * Duration) //calculates remaining fuel by subtracting the starting fuel with the fuel consumption compared to the duration.
const new_Velocity = calc_NewVelocity(initial_Velocity, acceleration_Km, Duration) //calculates new velocity based on acceleration and duration of trip.

if (remaining_Fuel < 0) {
  throw new Error("Fuel is now on reserve tank!");
}

//                   ________________Console.log Outputs of calculations___________________

//added .toFixed to limit output to 2 decimal points.

console.log(`Corrected New Velocity: ${new_Velocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${new_Distance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remaining_Fuel.toFixed(2)} kg`);






