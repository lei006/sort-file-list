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

  
  function order_func(str_a, str_b, is_number) {


    if(is_number == true) {
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
  }
  //取得字符串，最后数字的位置
  function get_last_num_pos(str){
    let pos = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      const element = str.charAt(i);
      if(isNaN(element)) {
        break;
      }else{
        pos = i;
      }
    }



    return pos;
  }
  
  function field_sep(str){
    let out = {str:"", num:0};
    let pos = 0;
    if(str.length)


    for (let i = str.length - 1; ; i--) {
      if(i<0) {
        break;
      }

      const element = str.charAt(i);
      //console.log(element);
      if(isNaN(element)) {
        pos = i;
        break;
      }
      pos = i;

    }

    out.str = str.substring(0, pos);
    out.num = str.substring(pos);
    console.log("field_sep", str, "  pos=", pos, out);
    

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

      let length = file_a_list_length<file_b_list_length?file_a_list_length:file_b_list_length;

      for (let i = 0; i < length; i++) {
        const element_a = file_a_list[i];
        const element_b = file_b_list[i];

        
        if(element_a === element_b) {
          continue; //二者完全相同,比较下一节点
        }

        let sep1 = field_sep(element_a);
        let sep2 = field_sep(element_b);
        

        ///////////////////////////////////////////////
        // 区分，相同部分与字相同部分--开始
        let a_last_num_pos = get_last_num_pos(element_a);
        let b_last_num_pos = get_last_num_pos(element_b);

        //取字母部分
        let diff_str_a = element_a.substring(0, a_last_num_pos);
        let diff_str_b = element_b.substring(0, b_last_num_pos);
        
        //取数字部分..
        let diff_num_a = element_a.substring(a_last_num_pos);
        let diff_num_b = element_b.substring(b_last_num_pos);

        let ret_val = 0;

        ///////////////////////////////////////////////
        //字母部分不同..则按字母部分排序
        if(diff_str_a != diff_str_b){
          ret_val = order_func(diff_str_a, diff_str_b, false);
          return ret_val;
        }
        
        ///////////////////////////////////////////////
        //字母部分相同..则按数字部分排序
        ret_val = order_func(diff_num_a, diff_num_b, true);
        if(ret_val != 0) {
          return ret_val;
        }

        ///////////////////////////////////////////////
        // 还有一种可能就是 aa010.txt  aa00010.txt --不处理，进入下一个节点
        
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
