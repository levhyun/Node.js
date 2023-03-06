const url = require('url')

// basic
const { URL } = url
const newUrl = new URL('https://github.com/levhyun') // url 객체 생성

console.log('new URL():', newUrl) // url 객체
console.log(`url.format(): ${url.format(newUrl)}\n`) // 분해되었던 url 객체를 복구하여 조립 


// searchParamas
const testUrl = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')

console.log('searchParams:', testUrl.searchParams) // testUrl에서 search부분을 담은 객체
console.log(`searchParams.getAll(): ${testUrl.searchParams.getAll('category')}`) // 키에 해당하는 모든 값을 반환
console.log(`searchParams.get(): ${testUrl.searchParams.get('limit')}`) // 키에 해당하는 첫 번째 깂만 반환
console.log(`searchParams.has(): ${testUrl.searchParams.has('page')}\n`) // 해당 키가 있는지 없는지 검사하여 true/false 반환

console.log('searchParams.keys():', testUrl.searchParams.keys()) // searchParams의 모든 키를 반복기 객체로 반환
console.log('searchParams.values():', testUrl.searchParams.values(), '\n') // searchParams의 모든 값을 반복기 객체로 반환

testUrl.searchParams.append('filter', 'es3'); // 해당 키를 추가 - 중복 추가 가능
testUrl.searchParams.append('filter', 'es5'); // 해당 키를 추가 - 중복 추가 가능
console.log(`[수행] testUrl.searchParams.append('filter', 'es3');\n[수행] testUrl.searchParams.append('filter', 'es5');\n[결과] testUrl.searchParams.getAll('filter'): ${testUrl.searchParams.getAll('filter')}\n`)

testUrl.searchParams.set('filter', 'es6'); // 같은 키를의 값들을 모두 삭제 후 해당 키 추가
console.log(`[수행] testUrl.searchParams.set('filter', 'es6');\n[결과] testUrl.searchParams.get('filter'): ${testUrl.searchParams.get('filter')}\n`)

testUrl.searchParams.delete('filter'); // 해당 키를 삭제
console.log(`[수행] testUrl.searchParams.delete('filter');\n[결과] testUrl.searchParams.get('filter'): ${testUrl.searchParams.get('filter')}\n`)

console.log(`searchParams.toString(): ${testUrl.searchParams.toString()}`) // searchParams 객체를 문자열로 변환
testUrl.search = testUrl.searchParams.toString()