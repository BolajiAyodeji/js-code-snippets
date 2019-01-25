// Check driver's driving speed
// Speed limit == 70km/hr ==> Speed OK
// Speed limit < 70km/hr ==> Speed OK
// For every 5km > Speed limit ==> One point++
// Speed limit >= (12 points) ==> License suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (speed < speedLimit + kmPerPoint) {
  console.log('Speed OK');
  return;
  }

  if (points >= 12)
  console.log('License suspended');

  else
  console.log(points + ' points');
}

checkSpeed(130);
