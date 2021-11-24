const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/10578-private.pem.key',
  certPath: './awsCerts/10578-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a3db0douoabkpk-ats.iot.us-east-1.amazonaws.com',
  clientId: 'proyectWebIoT',
  region: 'us-east-1',
});



module.exports = { device };
