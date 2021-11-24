const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/6798dc4986-private.pem.key',
  certPath: './awsCerts/6798dc4986-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a2w4letmfk56v9-ats.iot.us-east-1.amazonaws.com',
  clientId: 'ControladorSemaforo',
  region: 'us-east-1',
});



module.exports = { device };
