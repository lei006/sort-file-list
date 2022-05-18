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
let list = {"11.txt", "22.txt", "33.txt"}
console.log(SortFile(list));        //jcBvYzfa
/*
console.log(random(16));      //d9oq0A3vooaDod8X
console.log(random(16, {numbers: false}));     //AgfPTKheCgMvwNqX
console.log(random(16, {letters: false}));     //0889014544916637
console.log(random(16, {letters: 'ABCDEFG'})); //055B1627E43GA7D8
console.log(random(16, {specials: true}));     //,o=8l{iay>AOegW[
console.log(random(16, {specials: true, numbers: false, letters: false}));    //)-[+$^%+$|)-{(]%
console.log(random(16, {specials: ':;', numbers: false, letters: false}));    //:;:;;;:;;;;;;;::
console.log(random(16, true)); //SMm,EjETKMldIM/J
*/
```

## Contribute
[lei006 Software](http://lei006.it)

[Liang Xingchen](https://github.com/liangxingchen)

## License

This project is licensed under the terms of the MIT license
