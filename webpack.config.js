module.exports = (env) => {
  if (env === 'development' || env === 'production') {
    return require(`./webpack.${env}.config.js`);
  } else {
    console.warn('Wrong webpack build parameter.');
  }
};