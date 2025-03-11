/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initial_Velocity = 2.78; // velocity (km/second) - Starting speed of spacecraft
const acceleration = 3; // acceleration (m/s^2) - Acceleration of spacecraft
const Duration = 3600; // seconds (1 hour) - Duration of calculation. changed from seconds to minutes.
const initial_Distance = 0; // distance (km) - Starting distance from reference point
const initial_Fuel = 5000; // remaining fuel (kg) - Starting amount of fuel
const fuel_Consumption = 0.5; //(kg/s) - Rate at which fuel will burn


const new_Distance = initial_Distance + (initial_Velocity*Duration) //calcultes new distance
const remaining_Fuel = fuel_Consumption*Duration //calculates remaining fuel
const new_Velocity = calc_NewVelocity(initial_Velocity, acceleration, Duration) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calc_NewVelocity = (initial_Velocity, acceleration, Duration) => { 
  return initial_Velocity + (acceleration*Duration) * 3600; //convert to km/h from km/s
}

console.log(`Corrected New Velocity: ${new_Velocity} km/h`);
console.log(`Corrected New Distance: ${new_Distance} km`);
console.log(`Corrected Remaining Fuel: ${remaining_Fuel} kg`);






