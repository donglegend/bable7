// import rollup from 'rollup';
const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
// const json = require('rollup-plugin-json');
const rollUpPluginBabel = require('rollup-plugin-babel');

const inputOptions = {
  treeshake: false,
  input: 'src/app.js',
  plugins: [
    // json(),
    nodeResolve({
      jsnext: false,
      browser: true,
      extensions: ['.js', '.vue', '.json'],
    }),
    commonjs({ include: /node_modules/ }),
    rollUpPluginBabel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: '77',
              android: '2',
            },
            debug: true,
            useBuiltIns: false,
          },
        ],
      ],
      exclude: 'node_modules/**',
      externalHelpers: true,
      runtimeHelpers: true,
      plugins: [
        '@babel/plugin-transform-runtime',
        // [
        //   '@babel/plugin-transform-runtime',
        //   {
        //     corejs: 2,
        //   },
        // ],
        // '@babel/plugin-transform-object-assign',
      ],
    }),
  ],
};
const outputOptions = {
  file: 'dist/bundle.js',
  name: 'hotel-common',
  format: 'es',
};

// module: es module ,无法tree shaking 。

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  // console.log(bundle);
  // console.log(bundle.imports); // an array of external dependencies
  // console.log(bundle.exports); // an array of names exported by the entry point
  // console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);
  // console.log(code);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}
build();
