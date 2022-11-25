/*
 * @Author          : 稻米鼠
 * @Date            : 2022-11-22 13:18:46
 * @LastEditTime    : 2022-11-25 08:51:43
 * @FilePath        : \ob-templates\Templater-Scripts\Get-Sentence.js
 * @Description     : 
 */
async function get_sentence (tp, type) {
  const apis = {
    '毒鸡汤': 'https://api.oick.cn/dutang/api.php',
    '社会语录': 'https://api.oick.cn/yulu/api.php',
    '舔狗日记': 'https://api.oick.cn/dog/api.php',
    '一言': 'https://api.oick.cn/yiyan/api.php',
    '诗词': 'https://v1.jinrishici.com/all.txt',
  }
  if(!type){
    type = await tp.system.suggester(Object.keys(apis), Object.keys(apis), false, '一言')
  }
  const url = type && apis[type] ? apis[type] : apis['一言']
  const response = await fetch(url)
  const data = await response.text()
  return data
}
module.exports = get_sentence;