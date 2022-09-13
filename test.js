// const fs = require('fs');
// fs.writeFile('./sang.txt', "상 바보", function(error){
//   if(error) {
//     throw error;
//   }
// });

const fs = require('fs');
fs.mkdir('./sang', function(error){
  if(error) {
    throw error;
  }
});