// import '@babel/polyfill';
import { add } from './add';

const DATA = {
  name: 'data',
};

function app() {
  add(1, 2);
  console.log([1, 4, -5, 10].find(n => n < 0));
  console.log(Object.assign({}, { ...{ name: 'd' } }));
  const _a = Array.of(3, 11, 8);
  const _arr = [2, 3, ...[3, 4, 5]];
  console.log(_arr);
  console.log(`version `, _a);
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve();
  //   });
  // });
}

// app();
export default app;
