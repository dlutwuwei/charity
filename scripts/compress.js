const fs = require('fs');
const path = require('path');
const ChromeExtension = require('crx');
/* eslint import/no-unresolved: 0 */
const name = require('../build/manifest.json').name;
const argv = require('minimist')(process.argv.slice(2));

const keyPath = argv.key || 'key.pem';
argv.codebase = argv.codebase || 'http://localhost:8000/beijing-charity.crx';
const existsKey = fs.existsSync(keyPath);
const crx = new ChromeExtension({
  appId: argv['app-id'],
  codebase: argv.codebase,
  privateKey: existsKey ? fs.readFileSync(keyPath) : null
});

crx.load(path.resolve('build'))
  .then(() => crx.pack())
  .then((archiveBuffer) => {
    fs.writeFileSync(`${name}.zip`, archiveBuffer);

    if (!argv.codebase || !existsKey) return;
    crx.pack(archiveBuffer).then((crxBuffer) => {
      const updateXML = crx.generateUpdateXML();

      fs.writeFileSync('update.xml', updateXML);
      fs.writeFileSync(`${name}.crx`, crxBuffer);
    });
  });
