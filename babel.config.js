module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-transform-async-generator-functions',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
