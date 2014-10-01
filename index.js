var marked = require('marked');
var fs = require('fs');
var exec = require('child_process').exec;

var DEFAULT_BROWSER = 'chromium';

var cbkExec = function(err) {
  if (err) {
    throw err;
  }
}

var cbkWriteFile = function(generatedFile, err) {
  if (err) {
    throw err;
  }

  console.log('Successfully generated to ' + generatedFile);

  exec(DEFAULT_BROWSER + ' ' + generatedFile, cbkExec);
}

var cbkReadFile = function(filePath, err, content) {
  if (err) {
    throw err;
  }

  var generatedFile = filePath + '.html';

  fs.writeFile(generatedFile, marked(content), cbkWriteFile.bind(null, generatedFile));
};

exports.run = function(filePath) {
  fs.readFile(filePath, 'utf8', cbkReadFile.bind(null, filePath));
};

module.exports = exports;

var fileOrigin = process.argv[2];

if (!fileOrigin) {
  throw new Error('Required: path to a file');
}

exports.run(fileOrigin);
