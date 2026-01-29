아래 Javascript, ECMAScript6+ 에 대한 설명에 따라 답변하시오.
내용	
1. Javascript의 var 키워드의 문제점에 대해 설명하고 해결 방안에 대해 제시하시오.

변수명이 겹치더라도 오류가 발생하지 않기 때문에 원하는 결과값이 다르게 발생할 수 있다.
동일한 변수명으로 새로운 변수가 선언되면, 기존 코드에서 동일한 이름으로 사용되던 변수에 할당된 값이 사라지므로, 해당 변수를 참조하고 있는 프로그램에서 오류가 발생할 가능성이 있다.
변수 선언시 var 대신 let을 사용하면 된다.

2. 아래 코드는 Javascript (ECMAScript6+)의 객체를 디스트럭처링한 코드이다. 이때 무엇이 잘못되었는지 설명하고 해결방안을 제시하시오.

const king = {

    name: '이성계',

    tombName: '태조',

    birth: '1335-11-04',

    death: '1408-06-27'

};

const { birth, name, tomb, death } = king;

객체의 프로퍼티 키(key)와 동일한 변수명으로 값을 추출해야한다.
그러므로 tomb를 tombName으로 고쳐주면된다.

3. 다음 코드에서 map 메서드가 예상과 다른 결과를 반환하는 이유를 설명하고, 올바르게 수정하시오.

const users = [

    { id: 1, name: "이성계" },
    { id: 2, name: "이방과" },
    { id: 3, name: "이방원" }
];

 

const userMap = users.map(user => {

    user.id = user.id * 2;

});

 

console.log(userMap);     // 예상 결과: [2, 4, 6]

console.log(users);           // 예상 결과: [{ id: 1, name: "이성계" }, { id: 2, name: "이방과" }, { id: 3, name: "이방원" }]

 

- 요구사항
 
위 코드에서 map 메서드가 예상한 대로 동작하지 않는 이유를 설명하시오.

users 배열을 변경하지 않으면서 새로운 배열을 생성하도록 코드를 수정하시오.
 