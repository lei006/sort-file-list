/**
 * @copyright lei006 Software Ltd. 2022 http://lei006.it
 * @date 2022-05-18
 * @author WangLei <lei006@qq.com>
 */

'use strict';


/**
 * Sort File
 * @param {Array} length
 * @param {Object} options
 */
function SortFile(filelist, options) {
  filelist || (filelist = []);
  options || (options = {});
  
  options.reverse || false;
  options.diff_is_number || false; //不同部分是数字
  //options.node || true;
  options.separator || (options.separator = ".");

  console.log("separator = ", options.separator);
  

  
  function order_func(str_a, str_b, str_options) {
    let order_add = 1;
    let order_dec = -1;

    if(str_options.reverse == true) {
      order_add = -1;
      order_dec = 1;  
    }


    if(options.diff_is_number == true) {
      //不同的部分是数字...

      let num_a = Number(str_a);
      let num_b = Number(str_b);

      if(num_a>num_b) {
        return order_add;
      }
      else if(num_a<num_b) {
        return order_dec;
      }
      else {
        return 0;
      }

    }else{

      if(str_a>str_b) {
        return order_add;
      }
      else if(str_a<str_b) {
        return order_dec;
      }
      else {
        return 0;
      }

    }

    function isIntNum(val) {
      var regPos = / ^\d+$/; // 非负整数
      var regNeg = /^\-[1-9][0-9]*$/; // 负整数
      if(regPos.test(val) || regNeg.test(val)){
          return true;
      }else{
          return false;
      }
    }



  }



  filelist.sort(function(file_a,file_b){


      let file_a_list = file_a.split(options.separator);
      let file_b_list = file_b.split(options.separator);


      let file_a_list_length = file_a_list.length;
      let file_b_list_length = file_b_list.length;

      let length = file_a_list_length<file_b_list_length?file_a_list_length:file_b_list_length;

      for (let i = 0; i < length; i++) {
        const element_a = file_a_list[i];
        const element_b = file_b_list[i];

        ///////////////////////////////////////////////
        // 去除，相同部分--开始
        let str_a_len = element_a.length;
        let str_b_len = element_b.length;
        // 最少长度
        let str_min_len = str_a_len<str_b_len?str_a_len:str_b_len;

        let diff_pos = 0;
        for (let i = 0; i < str_min_len; i++) {
          const ele_a = element_a[i];
          const ele_b = element_b[i];
          if(ele_a !== ele_b) {
            diff_pos = i; //计录二个字符串不同的起始位置...
            break;
          }
          if( (i + 1) == str_min_len) {
            // 解决 相同长度，取得的长度少一的BUG
            diff_pos = i+1;
            break;
          }

        }
  
        let diff_str_a = (element_a.substring(diff_pos));
        let diff_str_b = (element_b.substring(diff_pos));

        // 去除，相同部分--结束
        ///////////////////////////////////////////////

        //找同一节点...
        let ret_val = order_func(diff_str_a, diff_str_b, options);
        if(ret_val != 0) {
          return ret_val;
        }
      }

      if(file_a_list_length > file_b_list_length) {
        //节点长 a比b长
        return order_add;
      }
      else if(file_a_list_length < file_b_list_length) {
        //节点长 b比a长
        return order_dec;
      }
      else {
        //一样长
        return 0;
      }


  });
  
  return filelist;
}

module.exports = SortFile.default = SortFile;
