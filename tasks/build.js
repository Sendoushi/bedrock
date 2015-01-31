/*jshint node:true, es3:false, latedef:false*/
'use strict';

var fs = require('fs');
var path = require('path');

// Set config if doesn't exist
if (!fs.existsSync(path.resolve('../app/config/config.json'))) {
    fs.createReadStream(path.resolve('../app/config/config.json.local')).pipe(fs.createWriteStream(path.resolve('../app/config/config.json')));
}

// TODO: Copy app resources files into prod
// TODO: Minimize all javascript into one file
// TODO: Take care of less / scss / sass files
// TODO: Minimize all css into one file
// TODO: What about lazy loading?
