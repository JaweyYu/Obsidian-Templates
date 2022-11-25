/*
 * @Author          : 稻米鼠
 * @Date            : 2022-11-22 13:18:46
 * @LastEditTime    : 2022-11-25 08:51:59
 * @FilePath        : \ob-templates\Templater-Scripts\Get-Year-Progress.js
 * @Description     : 
 * @HomePage        : https://github.com/dmscode/Obsidian-Templates
 */
function get_year_progress(length=20){
  const now = new Date()
  const year = now.getFullYear()
  const yearStart = new Date(year, 0)
  const yearEnd = new Date(year+1, 0)
  const progress = (now-yearStart)/(yearEnd-yearStart)
  const prefix = ''.padStart(Math.round(length*progress), '▓')
  const suffix = ''.padStart(length-Math.round(length*progress), '░')
  return 'Year progress: '+prefix+suffix+' '+(progress*100).toFixed(2)+'%'
}
module.exports = get_year_progress;