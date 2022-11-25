/*
 * @Author          : 稻米鼠
 * @Date            : 2022-11-22 13:18:46
 * @LastEditTime    : 2022-11-25 08:52:03
 * @FilePath        : \ob-templates\Templater-Scripts\Sort-Tasks-Lines.js
 * @Description     : 
 * @HomePage        : https://github.com/dmscode/Obsidian-Templates
 */
async function sort_lines(tp){
  const content = await tp.file.selection()
  if(!content || !content.length) return
  return content.split(/\r?\n/g).sort().join('\n')
}
module.exports = sort_lines;