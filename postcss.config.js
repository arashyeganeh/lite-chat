const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        cssnano({
            preset: 'default',
        }),
        'postcss-preset-env',
        tailwindcss,
        autoprefixer
    ],
};