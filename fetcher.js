const request = require('request');
const fs = require('fs');
let urlInput = process.argv[2];
let path = process.argv[3]



const pageFetcher = (urlInput, path) => {

  if (!urlInput || !path) {
    console.log("Hello user, please input a valid url and path.")
    return;
  }


  request(urlInput, (error, response, body) => {
      if (error) {
        console.log( "This is an invalid url. Please try again!");     // Print the error if one occurred
        return;
      }

      fs.writeFile(path, body, function (error) {
        if (error) {
          console.log('This is an invalid path. Please try again!');
        }
        
        console.log(`Downloaded and ${body.length} saved size to ${path}`); // how to get file size?
    });

 });

}

pageFetcher(urlInput, path)