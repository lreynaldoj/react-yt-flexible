const babel = require('@rollup/plugin-babel').default;
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: !production,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: !production,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            extensions: ['.js', '.jsx']
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            extensions: ['.js', '.jsx'],
            babelHelpers: 'bundled'
        }),
        commonjs()
    ],
    external: ['react', 'react-dom']
};
