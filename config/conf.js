const path = require('path');

const resolvePath = dir => path.join(__dirname, '..', dir);
const directory = {
  SRC: resolvePath('src'),
  DIST: resolvePath('public'),
};
const HTMLTemplateSettings = {
  title: 'Currency converter',
  og: {
    title: 'currency converter',
    description: 'Simple currency converter use react, redux, redux-saga, webpack 4',
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
