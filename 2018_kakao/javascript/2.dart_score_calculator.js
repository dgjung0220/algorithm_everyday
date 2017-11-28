/**
 * 2. 다트 게임(난이도: 하)

카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.
다트 게임은 총 3번의 기회로 구성된다.
각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수^1 , 점수^2 , 점수^3 )으로 계산된다.
옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
 */

var TARGET = '1D2S3T*';

var set = new Array;
var result = 0;
function StringBuffer() {
    this.__strings__ = new Array;
}
StringBuffer.prototype.append = function(str) {
    this.__strings__.push(str);
}
StringBuffer.prototype.toString = function() {
    return this.__strings__.join("");
}

var extractScore = (input) => {
    var i = 0;
    var score = new StringBuffer();
    var temp;
    while(true) { 
        temp = parseInt(input[i]);
        if (isNaN(temp)) {break;} 
        score.append(temp);
        i++;
        if (i == input.length) {break;}
    }

    TARGET = input.substr(i, TARGET.length);
    return score.toString();
}

var extractBonus = (input) => {
    var i = 0;
    var bonus = new StringBuffer();
    var temp;
    
    while(true) { 
        temp = parseInt(input[i]);
        if (!isNaN(temp)) {break;} 
        bonus.append(input[i]);
        i++;
        if (i == input.length) {break;}
    }
    
    TARGET = input.substr(i, TARGET.length);
    return bonus.toString();
    
} 

for (var i = 0; i < 3; i++) {
    var score = extractScore(TARGET);
    var bonus = extractBonus(TARGET);

    var gameSet = {
        score : score,
        bonus : bonus[0],
        option : bonus[1],
        total : 0
    }
    set.push(gameSet);
}

for (var i = 0; i < set.length; i++) {
    switch (set[i].bonus) {
        case 'S':
            set[i].total = set[i].score;
            break;
        case 'D':
            set[i].total = Math.pow(set[i].score,2);
            break;
        case 'T':
            set[i].total = Math.pow(set[i].score,3);
            break;
        default:
            break;
    }

    if (set[i].option === '*') {
        set[i].total *= 2;
        if (i-1 >= 0) {
            set[i-1].total *= 2;
        }
    } else if (set[i].option === '#') {
        set[i].total *= -1;
    }
}

for (var i in set) {
    result += parseInt(set[i].total);
}
console.log(result);