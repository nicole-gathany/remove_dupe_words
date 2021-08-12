function removeDuplicateWords (s) {
let arr = [...new Set(s.split(' '))]
return arr.join(' ')
}