const devPresets = ['@vue/babel-preset-app']
const buildPresets = ['@babel/preset-env']
module.exports = {
  presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets,
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
}
