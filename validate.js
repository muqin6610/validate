/**
*@Name 常用正则验证
*@Author  QinBiao(qinbiao_web@163.com)
*@GitHub  https://github.com/muqin6610/reg
*@Version 1.0
 */

class Reg {
  constructor() {
    this.regDatas = {
      "负浮点数": /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/,
      "正浮点数": /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,
      "整数": /^-?[1-9]\d*$/,
      "正整数": /^[1-9]\d*$/,
      "负整数": /^-[1-9]\d*$/,
      "中国邮政编码": /[1-9]\d{5}(?!\d)/,
      "日期格式": /^\d{4}-\d{1,2}-\d{1,2}/,
      "汉字": /^[\u4e00-\u9fa5]{0,}$/,
      "数字": /^[0-9]*$/,
      "邮箱": /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      "手机": /^(0\d{2,3}\-)?([2-9]\d{6,7})+(\-\d{1,6})?$|^1(3|4|5|6|7|8|9)\d{9}$/g,
      "电话": /^([0-9]{3,4}-)?[0-9]{7,8}$/,
      "URL": /^http[s]?:\/\/.*/,
      "特殊字符": /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im,
      "身份证": /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      "QQ": /^[1-9][0-9]{4,10}$/,
      "微信": /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
      "车牌": /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    }
  }
  /**
  * @param {*} value
  * @param {string} str
  * @return {boolean}
  */
  toRegular(value, str) {
    if (!this.regDatas.hasOwnProperty(str)) {
      throw new Error(str + "类型不存在,请输入正确的正则验证类型!")
    }
    return this.regDatas[str].test(value)
  }
}
