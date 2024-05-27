const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFile = path.resolve(__dirname, 'arduino.env');

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  console.warn(`Environment file ${envFile} not found`);
}

// Forward to CRA's start script
require('react-scripts/scripts/start');
