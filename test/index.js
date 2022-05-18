/**
 * @copyright lei006 Software Ltd. 2022 http://lei006.it
 * @date 2022-05-18
 * @author WangLei <lei006@qq.com>
 */

'use strict';

var assert = require('assert');
const random = require('string-random');



var SortFile = require('../index').default;

/*
console.log(random());
console.log(random(16));
console.log(random(16, { numbers: false }));
console.log(random(16, { letters: false }));
console.log(random(16, { letters: 'ABCDEFG' }));
console.log(random(16, { specials: true }));
console.log(random(16, { specials: true, numbers: false, letters: false }));
console.log(random(16, { specials: ':;', numbers: false, letters: false }));
console.log(random(16, true));
*/


function run(fn, times) {
  while (times > 0) {
    fn();
    times--;
  }
}

describe('length', function () {

  describe('The order', function () {
    it('无扩展名-文件-正序', function () {
      run(function () {

        let test_array = ['a','ab','abc','111',"cC","D","A",'zz','c','333','222'];

        var out_array = SortFile(test_array);
        assert(out_array[0] === '111' && out_array[out_array.length - 1] === 'zz');
      }, 1);
    });
  });

  describe('Reverse order', function () {
    it('无扩展名-文件-倒序', function () {
      run(function () {
        let test_array = ['a','ab','abc','111',"cC","D","A",'zz','c','333','222'];
        var out_array = SortFile(test_array, {reverse:true});
        console.log(out_array);
        assert(out_array[0] === 'zz' && out_array[out_array.length - 1] === '111');
      }, 1);
    });
  });

});

describe('node', function () {

  describe('node', function () {
    it('多扩展名节点-序顺-00', function () {
      run(function () {
        let test_array = ['a.txt','ab.txt','abc.txt'];
        var out_array = SortFile(test_array);
        console.log(out_array);

        assert(out_array[0] === 'a.txt' && out_array[out_array.length - 1] === 'abc.txt');
      }, 1);
    });
  });

  describe('node', function () {
    it('多扩展名节点-序顺-01', function () {
      run(function () {
        let test_array = ['b.a.txt','b.a02.txt','b.a01.txt','b.a1.txt','b.abc.txt'];
        var out_array = SortFile(test_array);
        console.log(out_array);

        assert(out_array[0] === 'b.a.txt' && out_array[out_array.length - 1] === 'b.abc.txt');
      }, 1);
    });
  });

  describe('node', function () {
    it('多扩展名节点-序顺-02', function () {
      run(function () {
        let test_array = ['b.0.txt','b.8.txt','b.7.txt','b.6.txt','b.3.txt'];
        var out_array = SortFile(test_array);
        console.log(out_array);

        assert(out_array[0] === 'b.0.txt' && out_array[out_array.length - 1] === 'b.8.txt');
      }, 1);
    });
  });



});

describe('diff_is_number', function () {


  describe('node', function () {
    it('多扩展名节点-序顺-01', function () {
      run(function () {
        let test_array = ['b.00.txt','b.08.txt','b.07.txt','b.06.txt','b.03.txt'];
        var out_array = SortFile(test_array, {diff_is_number:true});
        console.log(out_array);

        assert(out_array[0] === 'b.00.txt' && out_array[out_array.length - 1] === 'b.08.txt');
      }, 1);
    });
  });
  describe('node', function () {
    it('多扩展名节点-序顺-02', function () {
      run(function () {
        let test_array = ['b.1.txt','b.22.txt','b.09.txt','b.12.txt','b.23.txt'];
        var out_array = SortFile(test_array, {diff_is_number:true});
        console.log(out_array);

        assert(out_array[0] === 'b.1.txt' && out_array[out_array.length - 1] === 'b.23.txt');
      }, 1);
    });
  });
  /*

  describe('node', function () {
    it('多扩展名节点-序顺-03', function () {
      run(function () {
        let test_array = ['b.zab1.txt','b.zab22.txt','b.zab09.txt','b.zab12.txt','b.zab23.txt'];
        var out_array = SortFile(test_array, {diff_is_number:true});
        console.log(out_array);

        assert(out_array[0] === 'b.1.txt' && out_array[out_array.length - 1] === 'b.23.txt');
      }, 1);
    });
  });
  */

});


