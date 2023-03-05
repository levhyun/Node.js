const path = require('path')

const string = __filename

console.log(`path.sep: ${path.sep}`) // 경로 구분자
console.log(`path.delimiter: ${path.delimiter}\n`) // 환경변수 구분자

console.log(`path.dirname(): ${path.dirname(string)}`) // 파일이 위치한 폴더 경로
console.log(`path.extname(): ${path.extname(string)}`) // 파일의 확장자
console.log(`path.basename(string): ${path.basename(string)}`) // 파일의 이름(확장자 포함)
console.log(`path.basename - extname: ${path.basename(string, path.extname(string))}\n`) // 파일의 이름(확장자 미포함) - basename()의 두 번째 인수로 파일의 확장자를 전달

console.log('path.parse():,',path.parse(string)) // 파일의 경로를 root, dir, base, ext, name으로 분리
console.log(`path.format(): ${path.format({
    dir: path.parse(string)['dir'], /* 현재 폴더 경로 */
    name: path.parse(string)['name'], /* 현재 파일 이름 (확장자 미포함) */
    ext: path.parse(string)['ext'], /* 현재 파일 확장자 */
})}`) // path.parse()한 객체를 파일 경로와 병합
console.log(`path.normalize(): ${path.normalize('C\\users\\\\\\test\\\\Node.js\\\\\\NodeBuiltinModule\\\\\\\\path.js')}\n`) // /나 \를 여러번 사용하여도 정상적인 경로 반환

// 파일의 경로가 절대경로인지 상대경로인지를 true나 false반환
console.log(`path.isAbsolute(C:\\): ${path.isAbsolute('C:\\')}`) // true
console.log(`path.isAbsolute(./home): ${path.isAbsolute('./home')}\n`) // false

console.log(`path.relative(): ${path.relative('C:\\users\\test\\path.js', 'C:\\')}`) // 첫 번째 인자값의 경로에서 두 번째 인자값의 경로로 가는 방법 반환
console.log(`path.join(): ${path.join(__dirname, '..', '..', '/users', '.', '/test')}`) // 하나의 경로로 병합 - /를 만나면 상대경로로 인식
console.log(`path.resolve(): ${path.resolve(__dirname, '..', '/users', '.', '/test')}`) // 하나의 경로로 병합 - /을 만나면 절대경로로 인식
