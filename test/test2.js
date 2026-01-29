// const king = {

//     name: '이성계',

//     tombName: '태조',

//     birth: '1335-11-04',

//     death: '1408-06-27'

// };

// const { birth, name, tomb, death } = king;

// console.log(king);

const users = [

    { id: 1, name: "이성계" },
    { id: 2, name: "이방과" },
    { id: 3, name: "이방원" }
];

const userMap = users.map(user => {

    user.id = user.id * 2;

});

console.log(userMap);
console.log(id);
console.log(users);