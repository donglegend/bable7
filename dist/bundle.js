function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function(key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

function add(a, b) {
  console.log('加法:');
  console.log([3, 11, 8, 4].includes(3));
  console.log(Object.assign({}, objectSpread({}, a))); // return new Promise((resolve, reject) => {
  //   resolve(a + b);
  // });
}

var DATA = {
  name: 'data',
};

function app() {
  add(1, 2);
  console.log(
    [1, 4, -5, 10].find(function(n) {
      return n < 0;
    })
  );
  console.log(
    Object.assign(
      {},
      objectSpread(
        {},
        {
          name: 'd',
        }
      )
    )
  );

  var _a = Array.of(3, 11, 8);

  var _arr = [2, 3].concat([3, 4, 5]);

  console.log(_arr);
  console.log('version ', _a); // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve();
  //   });
  // });
} // app();

export default app;
