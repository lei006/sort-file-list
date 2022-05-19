#[sort-file](https://github.com/lei006/sort-file)

Generate random string

## Installation

sort-file is available as an [npm package](https://www.npmjs.com/package/sort-file).

```sh
npm i sort-file
```

## Document

### random([length],[options])

#### length
{number} the length of the result, default 8

#### options
{boolean|object} default {}, true=={specials: true}

##### options.numbers
{boolean|string} should contain numbers, default true, if is string, only contain assigned numbers.

##### options.letters
{boolean|string} should contain letters, default true, if is string, only contain assigned letters.

##### options.specials
{boolean|string} should contain specials, default false, if is string, only contain assigned specials.

## Example

```javascript

const SortFile = require('sort-file');
//import random from 'sort-file';
let test_array = ['a','ab','abc','111',"cC","D","A",'zz','c','333','222'];
var out_array = SortFile(test_array);
console.log(out_array); 
[ '111', '222', '333','A',   'D',   'a','ab',  'abc', 'c','cC',  'zz']

let test_array = ['a','ab','abc','111',"cC","D","A",'zz','c','333','222'];
var out_array = SortFile(test_array,{reverse:true});
console.log(out_array); 
['zz',  'cC',  'c', 'abc', 'ab',  'a', 'D',   'A',   '333', '222', '111']


let test_array = ['b.a.txt','b.a02.txt','b.a01.txt','b.a1.txt','b.abc.txt'];
var out_array = SortFile(test_array);
console.log(out_array);
[ 'b.a.txt', 'b.a01.txt', 'b.a02.txt', 'b.a1.txt', 'b.abc.txt' ]


let test_array = ['ac.b.7.txt','ac.b.00.txt','ac.b.08.txt','ac.b.00018.txt','ac.b.0026.txt','ac.b.03.txt'];
var out_array = SortFile(test_array, {diff_is_number:true});
console.log(out_array);
[
  'ac.b.00.txt',
  'ac.b.03.txt',
  'ac.b.7.txt',
  'ac.b.08.txt',
  'ac.b.00018.txt',
  'ac.b.0026.txt'
]



let test_array = ['ac02.b.aaa7.txt','ac2.b.aaa00.txt','ac00002.b.aaa08.txt','ac00003.b.aaa00018.txt','ac00001.b.aaa0026.txt','ac0004.b.aaa03.txt'];
var out_array = SortFile(test_array, {diff_is_number:true, reverse:true});
console.log(out_array);
separator =  .
[
  'ac0004.b.aaa03.txt',
  'ac00003.b.aaa00018.txt',
  'ac00002.b.aaa08.txt',
  'ac02.b.aaa7.txt',
  'ac2.b.aaa00.txt',
  'ac00001.b.aaa0026.txt'
]

```

## Contribute

[Liang Xingchen](https://github.com/lei006)

## License

This project is licensed under the terms of the MIT license
