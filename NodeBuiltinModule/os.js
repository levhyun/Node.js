const os = require('os');

// OS Information : 운영체제 정보
console.log(`os.arch(): ${os.arch()}`) // 프로세스 아키텍쳐 정보
console.log(`os.platform(): ${os.platform()}`) // 운영체제 플랫폼 정보
console.log(`os.type(): ${os.type()}`) // 운영체제의 종류
console.log(`os.uptime(): ${os.uptime()}`) // 운영체제 부팅 후 흐른 시간(초)
console.log(`os.hostname(): ${os.hostname()}`) // 컴퓨터 이름
console.log(`os.release(): ${os.release()}\n`) // 운영체제 버전

// PATH : 경로
console.log(`os.homedir(): ${os.homedir()}`) // 홈 디렉터리 경로
console.log(`os.tmpdir(): ${os.tmpdir()}\n`) // 임시 파일 저장 경로

// CPU Information : 중앙처리장치 정보
console.log('os.cpus(): ',os.cpus()) // 컴퓨터 코어 정보
console.log(`os.cpus().length: ${os.cpus().length}\n`) // 컴퓨터 코어 수

// Memory Information : 기억장치 정보
console.log(`os.freemem(): ${os.freemem()}`) // 사용 가능 메모리
console.log(`os.totalmem(): ${os.totalmem()}`) // 전체 메모리 용량