//map()
const arr = [1, 4, 10, 12];
const newArr = arr.map(item => item * 2);
console.log(newArr);

//forEach()
const moviesName = ["Yüzüklerin Efendisi", "Hobbit", "300 Spartalı", "The Notebook"]
moviesName.forEach(movie => console.log(movie));

//filter()
const words = ["banana", "apple", "orange", "grape"]
const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords);

//some()
const numbers = [1, 3, 5, 7, 9];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber);

//every()
const people = [
    { name: "Gül", age: 30 },
    { name: "Fatih", age: 25 },
    { name: "Yılmaz", age: 40 }
];
const allAdults = people.every(person => person.age >= 20);
console.log(allAdults);

//find()
const flowers =[
    {name:"Rose",color:"Red"},
    {name:"Chamomile",color:"Yellow"},
    {name:"Sunflowers",color:"Yellow"}
];
const yellowFlower = flowers.find(flowers => flowers.color === "Yellow");
console.log(yellowFlower);

//findIndex()
const candles=["Lavanta","Portakal","Tarçın","Gül","Vanilya","Sandal Ağacı","Paçuli"];
const vanilyaIndex = candles.findIndex(name => name === "Vanilya");
console.log(vanilyaIndex);

//sort()
const nums = [7,15,14,10,12,9,6];
nums.sort();
console.log(nums);

// reduce
const sayilar = [9,8,7,6,5,4];
const toplam = sayilar.reduce((accumulator,value) => accumulator + value);
console.log(toplam);

const nums1 =[100,20,70,2];
const maxNums = nums1.reduce((max,element) => max > element ? max :element);
const minNums = nums1.reduce((min,element) => min < element ? min:element);
console.log(maxNums);
console.log(minNums);

const greetPerson = ["Hoşgeldiniz","Keyifli","Alışverişler","Dileriz."];
const mergedText = greetPerson.reduce((value,argüman) => value + " " + argüman);
console.log(mergedText);

const items = ['elma', 'armut', 'kiraz', 'elma', 'üzüm', 'armut', 'elma'];
const itemCounts = items.reduce((obj,param) => {
    if(obj[param]) {
        obj[param] =0;
    }
    obj[param]++;
    return obj;
}, {});
console.log("Tekrar eden elemanlar" ,itemCounts);



