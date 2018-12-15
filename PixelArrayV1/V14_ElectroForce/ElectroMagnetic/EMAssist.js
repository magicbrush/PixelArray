// ----------- ElectroMagnetic Assist-----------------//

function value2B(value)
{
  return map(value,minValue,maxValue,-1,1);
}

function value2E(y,z)
{
  var ex = map(y,minValue,maxValue,-1,1);
  var ey = map(z,minValue,maxValue,-1,1);
  return createVector(ex,ey);
}





