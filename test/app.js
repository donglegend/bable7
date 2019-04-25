import { add } from './add';
function app() {
  add(1, 2);
  console.log(Object.assign({}, { ...{ name: 'd' } }));
  const _a = Array.of(3, 11, 8);
}
app();
