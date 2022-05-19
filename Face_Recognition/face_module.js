const faceapi = require('face-api.js');
await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');