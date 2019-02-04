var fs = require('fs');

module.exports.writeToFile = function (path, body) { 
    fs.appendFileSync(path, JSON.stringify(body, null, 2) , function (error) {
        if (error) {
            console.log('File write err', error);
            throw error;
        };
        console.log('Saved!');
      });
};