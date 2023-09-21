function distanceFromHqInBlocks(pickupLoaction) {
  const hqLocation = 42;
  return Math.abs(pickupLoaction - hqLocation);
}

function distanceFromHqInFeet(pickupLoaction) {
  const blockDistance = distanceFromHqInBlocks(pickupLoaction);
  const feetBlocks = 264;

  return blockDistance * feetBlocks;
}

function distanceTravelledInFeet(start, destination) {
  const blockDistance = Math.abs(start - destination);
  const feetBlocks = 264;

  return feetBlocks * blockDistance;
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);

  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled - 400 && distanceTravelled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
