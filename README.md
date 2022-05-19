#[sort-file-list](https://github.com/lei006/sort-file-list)

排序文件列表

## Installation

sort-file-list is available as an [npm package](https://www.npmjs.com/package/sort-file-list).

```sh
npm i sort-file-list
```

## Document

### sort-file-list([length],[options])

#### length
看示例

#### options
{boolean|object} default {}, true=={specials: true}

##### options.specials
{boolean|string} should contain specials, default false, if is string, only contain assigned specials.

## Example

```javascript

const SortFile = require('sort-file-list');



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

[wanglei](https://github.com/lei006)

## License

This project is licensed under the terms of the MIT license
