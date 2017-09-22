/*jslint esnext:true*/

const fs = require('fs');
const path = require('path');

module.exports = function (req, res, next) {
  //console.log(req);
  //console.log(req.url);
  if (req.url === '/api/images') {
    let data={};
    
    //_dirname returns the name of the directory in which this file is executing
    const imagesFolder = path.join(__dirname,'Images');
    data.items = fs.readdirSync(imagesFolder);
    //console.log(JSON.stringify(items));
    //res.end(JSON.stringify(items));

    //console.log(list);
    res.end(JSON.stringify(data));
  } else {
    next()
  }
}
