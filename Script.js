function AlertFunction(model)
{
  var details;

  var X = [
     '\n0-60 MPH: 4.4 s',
     '\nTop Speed: 155 mph',
     '\nRange: 351 mi',
     '\nPower: 417 hp',
     '\nCargo: 88 cu ft'
  ].join('');

  var model_3 = [
   '\n0-60 MPH: 4.4 s',
   '\nTop Speed: 145 mph',
   '\nRange: 322 mi',
   '\nPower: 346 hp',
   '\nCargo: 44 cu ft'
  ].join('');

  var S = [
   '\n0-60 MPH: 3.7 s',
   '\nTop Speed: 155 mph',
   '\nRange: 391 mi',
   '\nPower: 517 hp',
   '\nCargo: 60 cu ft'
].join('');

var Y = [
   '\n0-60 MPH: 4.8 s',
   '\nTop Speed: 135 mph',
   '\nRange: 316 mi',
   '\nPower: 346 hp',
   '\nCargo: 68 cu ft'
].join('');

var R = [
   '\n0-60 MPH: 1.9 s',
   '\nTop Speed: over 250 mph',
   '\nRange: 620 mi',
   '\nPower: no info',
   '\nCargo: no info '
].join('');

var Cyber = [
   '\n0-60 MPH: <2.9 s',
   '\nTop Speed: no info',
   '\nRange: 500+ mi',
   '\nPower: no info',
   '\nCargo: 100 cu ft'
].join('');
 
var Semi = [
   '\n0-60 MPH: 20 s (with 80k lb)',
   '\nTop Speed: 60 mph',
   '\nRange: 300 or 500 mi',
   '\nPowertrain: 4 motors',
].join('');


 if (model == 'X')
    {
     details = X;
    }
 else if (model == '3')
    {
     details = model_3;
    }
 else if (model == 'S')
    {
    details = S;
    }
 else if (model == 'Y')
    {
    details = Y;
    }
 else if (model == 'R')
{
 details = R;
}
else if (model == 'Cyber') 
{
   details = Cyber;
}
else if (model == 'Semi')
{
   details = Semi;
}
 else 
   {
      details = 'NO INFO'
   }


  alert('You selected Tesla model ' + model + '\n ' + details)


}