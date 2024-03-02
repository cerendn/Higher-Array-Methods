const students = [
    {
        fullName: "Berkay Turna",
        age: 25,
        isDeleted: false,
        score: 93,
        isActive: true,
        courses: ["JavaScript", "React", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
        ],
    },
    {
        fullName: "Cenk Grid Kaynak",
        age: 32,
        isDeleted: false,
        score: 85,
        isActive: true,
        courses: ["JavaScript", "React Native", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Korhan Kosece", topics: [".Net Core"] },
        ],
    },
    {
        fullName: "Ali Riza Taskiran",
        age: 24,
        isDeleted: false,
        score: 95,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ],
    },
    {
        fullName: "Hakan Berke Temur",
        age: 24,
        isDeleted: false,
        score: 90,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ],
    },
    {
        fullName: "Barkin Sayin",
        age: 22,
        isDeleted: false,
        score: 92,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ],
    },
    {
        fullName: "Mert Kirant",
        age: 23,
        isDeleted: false,
        score: 80,
        isActive: true,
        courses: ["Expressjs", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Onur Ege Erkek",
        age: 22,
        isDeleted: false,
        score: 88,
        isActive: true,
        courses: ["Expressjs", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Firat Can Tas",
        age: 24,
        isDeleted: false,
        score: 60,
        isActive: false,
        courses: ["Expressjs", "Node.js", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Ceren Dincer",
        age: 27,
        isDeleted: false,
        score: 100,
        isActive: true,
        courses: ["JavaScript", "HTNL"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Baris Peker",
        age: 38,
        isDeleted: true,
        score: 75,
        isActive: false,
        courses: ["JavaScript", "HTNL"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
];
const isScoreMin = students.some((student) => {
    return student.score > 82
});
console.log(isScoreMin);

const isScoreMax = students.some((student) => {
    return student.score > 95
});
console.log(isScoreMax);
//implicit return
//const isScoreMin = students.some((student) => student.score > 82);

const isActives = students.every((student) => student.isActive)
console.log(isActives);

const findCeren = students.findIndex((student) => student.fullName === "Ceren Dincer");
console.log(findCeren);

const findC = students.find((student) => student.fullName === "Ceren Dincer");
console.log(findC);


// const sortedStudentByAge = students.sort((age1,age2) => age1.age - age2.age);
// console.log(sortedStudentByAge);

const sortedScore = students.sort((score1, score2) => {
    if (score1.fullName.toUpperCase() < score2.fullName.toUpperCase()) {
        return -1;
    } else if (score1.fullName.toUpperCase() > score2.fullName.toUpperCase()) {
        return 1;
    } else return 0;
});
console.log(sortedScore);

const sortedName = students.sort((name1, name2) => name1.fullName.toLowerCase() > name2.fullName.toLowerCase() ? 1 : -1);
console.log(sortedName);

let reduceNumbers = [3, 5, 9, 7, 10, 23]
let totalReduce = 5;
reduceNumbers.forEach((element) => totalReduce += element);
console.log(totalReduce);

let total = reduceNumbers.reduce((acc,number) => acc + number, 5);
console.log(total);

const activeStudents = students.reduce((acc,currentStudent) => {
    if(currentStudent.isActive){
        acc.push(currentStudent.fullName)
    }
    return acc;
},[])
console.log(activeStudents);

const nums =[3,9,7,6,8,10,20,23,89,97]
const hasEvenNum = nums.filter(num => num % 2 === 0);
console.log(hasEvenNum);
const newNums = hasEvenNum.map(num => num * 5);
console.log(newNums);

const totalNums = newNums.reduce((acc,num) => acc + num);
console.log(totalNums);
