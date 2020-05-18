const fs - require('fs');
const {v4: uuidv1} = require('uuid');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function (app) {
  app.get('/api/notes', function (req, res) {
    readFileAsync('./db/db.json', 'utf8')
    .then(function (notesData) {
      var notes = JSON.parse(notesData)
      res.json(notes);
      console.log(notes);
    })
    .catch(function (err) {
      console.log(err);
    });
  });
}