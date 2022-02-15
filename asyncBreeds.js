const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    } else {
      functionToRunWhenThingsAreDone(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;

// const printOutCatBreed = breed => {console.log('Return Value: ', breed)};

// breedDetailsFromFile('Bombay', printOutCatBreed);