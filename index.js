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

  // 返回值的正负值
  let order_add = 1;
  let order_dec = -1;

  //处理倒序..
  if(options.reverse == true) {
    order_add = -1;
    order_dec = 1;  
  }

  
  function order_func(step_a, step_b) {

      //字符串部分比较
      if(step_a.str > step_b.str) {
        //字符串-大于
        return order_add;
      }
      else if(step_a.str < step_b.str) {
        //字符串-小于
        return order_dec;
      }

      // 数字部分比较
      if(step_a.num > step_b.num) {
        return order_add;
      }
      else if(step_a.num < step_b.num) {
        return order_dec;
      }
      else {
        return 0;
      }
  }
  
  
  function field_sep(str){
    let out = {str:"", num:0};
    let pos = str.length;

    for (let i = str.length - 1; ; i--) {
      if(i<0) {
        break;
      }

      const element = str.charAt(i);
      if(isNaN(element)) {
        pos = i + 1;
        break;
      }
      pos = i;
    }


    if(pos>0){
      out.str = str.substring(0, pos);
    }

    out.num = str.substring(pos);
    if(out.num == ""){
      out.num = "0";
    }
    out.num = Number(out.num);

    //console.log(pos, '->', out, " [", str, "]", );
    
    return out;
  }




  filelist.sort(function(file_a,file_b){

      if(file_a === file_b) {
        return 0; //二者完全相同,比较下一节点
      }


      let file_a_list = file_a.split(options.separator);
      let file_b_list = file_b.split(options.separator);


      let file_a_list_length = file_a_list.length;
      let file_b_list_length = file_b_list.length;

      if(file_a_list_length == file_b_list_length) {
          //节点数相同..
          let length = file_a_list_length;
          for (let i = length-1; i >= 0; i--) {
            const element_a = file_a_list[i];
            const element_b = file_b_list[i];
  
            if(element_a === element_b) {
              continue; //二者完全相同,比较下一节点
            }
  
            let sep1 = field_sep(element_a);
            let sep2 = field_sep(element_b);
            
            let ret_val = 0;
  
            ///////////////////////////////////////////////
            //字母部分相同..则按数字部分排序
            ret_val = order_func(sep1, sep2);
            if(ret_val != 0) {
              return ret_val;
            }
          }
      }else{
        //节点数不同，从头比较...
        let length = file_a_list_length<file_b_list_length?file_a_list_length:file_b_list_length;
        for (let i = 0; i < length; i++) {
          const element_a = file_a_list[i];
          const element_b = file_b_list[i];

          
          if(element_a === element_b) {
            continue; //二者完全相同,比较下一节点
          }

          let sep1 = field_sep(element_a);
          let sep2 = field_sep(element_b);
          
          let ret_val = 0;

          ///////////////////////////////////////////////
          //字母部分相同..则按数字部分排序
          ret_val = order_func(sep1, sep2);
          if(ret_val != 0) {
            return ret_val;
          }
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

