const person = [
    {"name":"홍길동","age":20,"nationality":"대한민국"},
    {"name":"김기범","age":30,"nationality":"미국"},
    {"name":"오로","age":40,"nationality":"프랑스"},
    {"name":"봉순","age":50,"nationality":"아프리카"}
];

//[2] : 출력
console.log('--------------------------------------');
console.log(person[0].name+" "+person[0].age+" "+person[0].nationality); //홍길동 20 대한민국 출력
console.log(person[2].name+" "+person[2].age+" "+person[2].nationality); //오로 40 프랑스 출력

//[3] : 반복
console.log('--------------------------------------전개연산자');
const str1 = "korea";
console.log(...str1); // 전개 연산자
console.log([...str1]); //__proto__ --> Array
console.log({...str1}); //__proto__ --> Object

//[4] : 반복 가능한 객체 --> for ..of, ...(전개 연산자)
console.log('--------------------------------------for..of');
//of = 배열의 값을 출력
for (let value of person) { //person --> iterable 즉, 반복 가능한 객체가 오면 된다.
    console.log(value);
}
//in = 배열의 경우 index출력 객체인 경우 key를 출력
console.log('--------------------------------------for..in');
for (let i in person) {   //index 0, 1, 2, 3
    console.log(i);
}



//[5] : 수정
console.log('--------------------------------------역따음표');
person[0].name="홍길순";
person[0].age="13";
console.log(`홍길동의 이름이 ${ person[0].name }으로 수정되었고, 나이는 ${ person[0].age }살로 수정되었습니다.`);
