let c = [1, 2];
let d = [1, 2, 3];
let e = [
  function foo() {
    dosomething();
  },
  function bar() {
    dosomething();
  },
];

var foo = Boolean(!!bar);
