const path = require('path');

const resolvePath = dir => path.join(__dirname, '..', dir);
const directory = {
  SRC: resolvePath('src'),
  DIST: resolvePath('public'),
};
const HTMLTemplateSettings = {
  title: 'React stater kit with rematch & webpack 4 - By NIC',
  og: {
    title: '',
    description: '',
    image: '',
  },
};
const region = process.env.REGION || 'en';
const port = process.env.PORT || 3000;

module.exports = {
  resolvePath,
  directory,
  HTMLTemplateSettings,
  region,
  port,
};
