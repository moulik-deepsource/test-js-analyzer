type x = {f: number}

var obj = {'foo': 'bar'};

type T =
  | [1, 2, 4]
  | [1, 2, 3]
  | {b: string}
  | {a: string}
  | (() => void)
  | (() => string)
  | "b"
  | "a"
  | 'b'
  | 'a'
  | readonly string[]
  | readonly number[]
  | string[]
  | number[]
  | B
  | A
  | undefined
  | null
  | string
  | any;
