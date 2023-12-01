type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

// console.log(argumentsLength(1, 2, 3, {}, true, false));

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  for (let i = 0; i < nums.length; i++) {
    console.log(init + nums[i]);
  }
  return 1;
}
// reduce([1, 2, 3, 4], () => 1, 0);
