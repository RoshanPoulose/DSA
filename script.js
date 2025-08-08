// find the vowels

// function to find vowels count

// function vow(arr){
//     let vow=["a","e","i","o","u"]
//     let result={}
//       for(let item of vow){
//         if(result.inculdes[arr]){
//             result[item]++
//         }else{
//             result[item]=1
//         }
//     };
//     return result
// }
// let names="roshan"
// console.log(vow(names))

// function pali(arr){
//     let rev=""
//     for (let i=arr.length-1;i>=0;i--){
//         rev+=arr[i]
//     }
//     if(rev==arr){
//         return console.log(`${rev} is pali`)
//     }
//     else{
//         return console.log(`${rev} is not pali`)
//     }

// }
// console.log(pali("sas"))

// function fib(arr){

//     let a=0
//     let b=1
//     for(let i=1;i<=arr;i++){
//         console.log(a)
//         let total =a+b
//         a=b
//         b=total

//     }
// }

// console.log(fib(10))

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>
//         data.forEach(element => {
//            console.log(element.name)
//         })
// )

// let newss=async()=>{
//     let res= await fetch("https://jsonplaceholder.typicode.com/users")
//     let datas= await res.json()
//     datas.forEach((i)=>{
//         console.log(i.name)
//     })

// }
// newss()

// function dup(arr){
//     let news=[]
//     for(let i=0;i<arr.length;i++){
//         if(!news.includes(arr[i])){
//             news.push(arr[i])
//         }
//     }
//     return news
// }
// console.log(dup([1,2,3,4,1,2,4,6]))

// function sorts(arr){
//     let n=2
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     let news= arr
//     return news.length-n
// }

// console.log(sorts([4,5,6,3,4,6,1,5,8]))

// function counter(arr){
//    let result={}
//    for(let item of arr){
//       if(result[item]){
//         result[item]++
//       }
//       else{
//         result[item]=1
//       }
//    }
//    let equal=Object.values(result)
//    let firstcount=equal[0]
//    for(let i=0;i<=equal.length;i++){
//     if(firstcount !==equal[i]){
//         return false

//     }
//    }
//    return true

// }
// console.log(counter([1,1,2,2,3,3]))

// function count (arr){
//   let  data=arr.split("")
//   let vow=["a","e","i","o","u"]
//   let result={}
//   for(let item of data){
//     if(vow.includes(item)){
//         if(result[item]){
//           result[item]++
//         }
//         else{
//           result[item]=1
//         }
//     }
//   }
//   return result
// }
// console.log(count("roshan"))

// function vows(arr){
//   let data=arr.split("")
//   let vo=["a","e","i","o","u"]
//   let result={}
//   for(let item of data){
//     if(vo.includes(item)){
//        if(result[item]){
//         result[item]++
//        }
//        else{
//         result[item]=1
//        }
//     }
//   }
//   return result
// }

// console.log(vows("roshansa"))

// function dup(arr){
//    let result=[]
//    for(let item of arr){
//     if(!result.includes(item)){
//         result.push(item)
//     }
//    }
//    return result
// }
// console.log(dup([2,1,2,3,5,6,2]))

// function rev(arr){
//   let revs=""
//    for(let i=arr.length-1;i>=0;i--){
//         revs+=arr[i]
//    }
//    return revs
// }
// console.log(rev("roshan"))

// function sumeven(arr){
//    let sum=0
//    for(let num of arr){
//       if(num%2==0){
//         sum+=num
//       }
//    }
//    return sum

// }
// console.log(sumeven([1,2,3,4,5,6]))

// function tofind(arr){
//    let long=arr.split(" ")
//    let large=long[0]
//    for(let item of long){
//      if(large.length<=item.length){
//       large=item
//      }
//    }
//    return large
// }

// console.log(tofind("my name is sobithkopee"))

// function count(arr){
//    let data=arr.split(" ")
//    let result={}
//    for(let item of data){
//       if(result[item]){
//          result[item]++
//       }
//       else result[item]=1
//    }
//    return result
// }

// console.log(count("apple orange apple banana orange apple"))

// function short(arr){
//    let data= arr.split(" ")
//    let low=data[0]
//    for (let item of data){
//       if(item.length<low.length){
//          low=item
//       }
//    }
//    return low
// }
// console.log(short("elephant dog cat eagle tiger"))

// function tocap(arr){
//     let data=arr.split(" ")
//     for(let i=0;i<data.length;i++){
//        word=data[i]
//        data[i]=word[0].toUpperCase()+word.slice(1)
//     }
//     return data.join(" ")
// }
// console.log(tocap("my name is roshan"))

// let datas="My name is Roshan"
// let rev=datas.split("").reverse().join("")
// let das=rev.split(" ").reverse().join(" ")
// console.log(das)

// function uniq(arr) {
//   let data = arr.split("");
//   let result = {};
//   for (let item of data) {
//     if(result[item]){
//         result[item]++
//     }
//     else{
//       result[item]=1
//     }
//   }
//   for (let char of data) {
//     if (result[char] === 1) {
//       return char;
//     }
//   }

// }

// console.log(uniq("aabbcddd"));

// let alpa="aabbcddd"
// let ds=alpa.split("")
// let uni=[...new Set(ds)]
// console.log(uni)

// function  characters(arr){
//     let data=arr.split("")
//     let result={}
//     for(let item of data){
//          if(result[item]){
//              result[item]++
//          }else{
//           result[item]=1
//          }
//     }
//     let count =Object.values(result)
//     let  sa=[]
//     for(let iteam of count) {
//       if(iteam==1){
//         sa.push(iteam)
//       }
//     }
//     if(sa.length<1){
//       return false
//     }
//     else{
//       return true
//     }
// }

// console.log(characters("listen silent"))

// function isAngram(str1,str2){
//      let data1=str1.split("").sort().join("")
//      let data2=str2.split("").sort().join("")
//      if(data1===data2){
//       return true
//      }
//      return false
// }

// console.log(isAngram("sam","msa"))

// function isValid(str) {
//     let stack = [];

//     for (let char of str) {
//         if (char === '(') stack.push(')');
//         else if (char === '{') stack.push('}');
//         else if (char === '[') stack.push(']');
//         else {
//             if (stack.pop() !== char) return false;
//         }
//     }

//     return stack.length === 0;
// }
// console.log(isValid("()}"));   // true
// console.log(isValid("{(})"));   // false
// console.log(isValid("[(])"));   // false
// console.log(isValid("[]{}()"));

// function tos(str){
//   let stack=[]
//   for(let char of str){
//       if(char=="{") stack.push("}")
//       else if(char=="(") stack.push(")")
//       else if(char=="[") stack.push("]")
//       else{
//         if(stack.pop()!==char){
//           return false
//         }
//       }
//   }
//   return true
// }

// console.log(tos("[]{}()"))

// function sames(str1,str2){
//   let data1=str1.split("").sort().join("")
//   let data2=str2.split("").sort().join("")

//   if(data1==data2){
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(sames("roshan","osnrbha"))

// function diffet(arr){
//      let item=[]
//      for(let char of arr){

//      }

// }

//

// function toPrime(num) {
//   if (num <= 2) {
//     return "ites as prime number";
//   }
//   for (let i = 2; i <= num - 1; i++) {
//     if (num % i == 0) {
//       return "its a not prime prime";
//     } else {
//       return "its a prime number";
//     }
//   }
// }
// console.log(toPrime(2));
//  (10/3*b+b)-b

// function toPrime(num) {
//   if (num <= 2) {
//     return true;
//   }
//   for (let i = 2; i <= num - 1; i++) {
//     let b=0
//     for(let j=2;j<=num;j++){
//       if(b<=num){
//         b++
//       }
//     }
//     let a=num
//     let first=i/num
//     let second=first*num
//     let third=second+num
//     let last=third-num
//     if ( last==10) {
//       return false;
//     }
//      else {
//       return true;
//     }
//     return b
//   }
// }
// console.log(toPrime(6));

// let num=7
// let first = 10 / num;
// let second = first * num;

// let third = second + num;
// let last = third - num;

// console.log(third)

// let str = "programming";

// function uniq() {
//   let result = {};

//   let data = str.split("");
//   data.forEach((item) => {
//     if (result[item]) {
//       result[item]++;
//     } else {
//       result[item] = 1;
//     }
//   });
//   let uniq = [];
//   for (let key in result) {
//     if (result[key] === 1) {
//       uniq.push(key);
//     }
//   }
//   return uniq;
// }

// console.log(uniq(str));

// function uniqs(arr) {
//   let stack = [];
//   for (let char of arr) {
//     if (char == "{") stack.push("}");
//     else if (char == "[") stack.push("]");
//     else if (char == "(") stack.pop("]");
//     else {
//       if (stack.pop() !== char) {
//         return false;
//       }
//     }
//   }
//     return stack.length === 0;
// }

// console.log(uniqs("{[]}"));

// function counters(arr){
//     let counts=[]
//     let data=arr.split("")
//     for(let item of data){
//       if(item == " ") continue ;
//       if(counts[item]){
//         counts[item]++
//       }else{
//         counts[item]=1
//       }
//     }
//     return counts
// }
// console.log(counters("hello world"))

// function most(arr){
//   let count={}
//   for(let item of arr){
//     if(count[item]){
//       count[item]++
//     }
//     else{
//       count[item]=1
//     }
//   }
//   let data=Object.values(count)
//   let max=0
//   for(let num of data){
//     if(num>max){
//       max=num
//     }
//   }
//   return max

// }
// console.log(most([1, 3, 2, 3, 4, 1, 3, 2, 4]))

// function isAngram(str1,str2){
//       let data1=str1.split("").sort().join()
//       let data2=str2.split("").sort().join()
//       if(data1==data2){
//         return "its (An anagram "
//       }
//       else{
//         return "not"
//       }
// }
// console.log(isAngram("listens", "silent"))

// function flats(arr){
//       return arr.flat(Infinity)
// }
// console.log(flats([1,[2, 3], [4, [5, 6]]]))

// function dups(arr){
//     let num=[]
//     for(let item of arr ){
//       if(!num.includes(item)){
//         num.push(item)
//       }
//     }
//     return num

// }

// console.log(dups([1, 2, 2, 3, 4, 3, 5, 1]))

// function firstUniqueChar(arr){

//   let result={}
//   for(let item of arr.split("")){
//     if(result[item]){
//       result[item]++
//     }
//     else{
//       result[item]=1
//     }
//   }
//   return result

// }

// console.log(firstUniqueChar("aabbcc"))

// function nonrep(arr){
//     let data=arr.split("")
//     let result={}
//     for(let item of data){
//        if(result[item]){
//         result[item]++
//        }
//        else{
//         result[item]=1
//        }
//     }
//     for (let char of data){
//         if(result[char]==1){
//             return char
//         }
//     }

//     return null
// }
// console.log(nonrep("aabbcsc"))

// function toNo(arr){
//     let data=arr.split("")
//     let result={}
//     for(let iteam of data){
//         if(result[iteam]){
//             result[iteam]++
//         }
//         else{
//             result[iteam]=1
//         }
//     }
//     for(let char of data){
//         if(result[char]==1){
//             return char
//         }
//     }
//     return null
// }
// console.log(toNo("aabbccdef"));

// function  isAngram(str1,str2){
//     let data1=str1.split("").sort().join("")
//     let data2=str2.split("").sort().join("")
//     if(data1==data2){
//         return " its angram"
//     }
//     else{
//         return "not angram"
//     }

// }
// console.log(isAngram("listen", "silent"))

// function pali(num){
//         let arr=num.toString()
//         let num2=""
//         for(let i=arr.length-1;i>=0;i--){
//              num2+=arr[i]
//         }
//         if(num2==arr){
//             return "its palidrome "
//         }
//         return "not pali"

// }
// console.log(pali(121))

// function  fib(n){
//    let a=0
//    let b=1
//     let news=[]
//     for(let i=0;i<n;i++){
//        news.push(a)
//        let next=a+b
//        a=b
//        b=next

//     }
//     return news
// }

// console.log(fib(7))

// function isPowerOfTwo(n) {
//   if (n <= 0) return false;

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }

//   return true;
// }
// console.log(isPowerOfTwo(392))
// let num=1
// let num2=2
// console.log("num2")

// function outer(){
//   let name="roshan"
//   function inner(){
//     return `name${name}`
//   }
//   return inner
// }

// let na=outer()
// console.log(na())

// function outer(){
//   let name="roshan"
//   function inner(){
//     return name
//   }
//   return inner
// }

// let na=outer()

// console.log(na())

// function greet(name,callback){
//    console.log(name)
//    callback()
// }

// function saybye(){
//   console.log("goodbaye")
// }

// greet("roshan",saybye)

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(res=>res.json())
// .then(data=>{
//   data.forEach(item => {
//     console.log(item.email)
//   });
// })

// const datas =async()=>{
//   let value=await fetch("https://jsonplaceholder.typicode.com/comments")
//   let res= await value.json()
//   res.forEach((item)=>{
//     console.log(item.email)
//   })
// }
// datas()
// function counts(){
//   setTimeout(function (){
//     console.log("hello roshan")
//   },1000)
// }
// counts()
// function countr(){
//   let count=0
//   setInterval(function (){
//     // count++;
//     console.log("count",)
//   },1000)
// }
// countr()
// function countUp(){
//   let count = 0;
//   setInterval(function () {
//     count++;
//     console.log("Count:", );
//   }, 1000);
// }
// countUp();

// function vow(arr){
//     let vow=["a","e","i","o","u"]
//     if(vow.includes(arr)){
//         return "its a vowel"
//     }
//     return "not a vowels"
// }

// console.log(vow("a"))

// function dup(arr){
//     let data=[]
//     for(let item of arr){
//         if(!data.includes(item)){
//             data.push(item)
//         }
//     }
//     return data
// }
// console.log(dup([1,2,3,4,2,3,4,1,6]))

// function fact(num){
//     result=1
//     for(let i=2;i<=num;i++){
//         result*=i
//     }
//     return result
// }

// console.log(fact(5))

// function toLong(arr){
//      let n=arr.split(" ")
//      let max=[]
//      for(let item of n){
//         if(item.length>max.length){
//             max=item
//         }
//      }
//      return max

// }
// console.log(toLong("my name  is davibella "))

// function toMost(arr){
//     let result={}
//     let maxCount=0
//     let mostFreq=null
//     for(let item of arr){
//         if(result[item]){
//             result[item]++
//         }
//         else{
//             result[item]=1
//         }
//         if(result[item]>maxCount){
//             maxCount=result[item]
//             mostFreq=item

//         }
//     }
//     return mostFreq

// }
// console.log(toMost([1,5,3,4,4,6,4,3,4,3,5,6,8]))

// function toFindLargest(arr){
//     let max=0
//     for(let num of arr){
//         if(num>max){
//             max=num
//         }
//     }
//     return max
// }

// function sort(arr){
//     for(let i=0;i<=arr.length;i++){
//         for(let j=0;j<=arr.length;j++){
//             if(arr[j]>arr[j+1]){
//               let temp=arr[j]
//               arr[j]=arr[j+1]
//               arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sort([1,4,2,10,3,5,6,4]))

// function findcount(arr){
//     let result=[]
//      let vow=["a","e","i","o","u"]
//      for(let item of arr.split("")){
//         if(vow.includes(item)){
//             result.push(item)
//         }
//      }
//      return result
// }
// console.log(findcount("roshan"))

// function rev(arr){
//     let s=""
//     for(let i=arr.length-1;i>=0;i--){
//         s+=arr[i]
//     }
//     return s
// }
// console.log(rev("roshan"))
// function valu(arr){
//    let result={}
//    let data=arr.split("")

//    for(let item of data){
//     if(result[item]){
//       result[item]++
//     }
//     else{
//       result[item]=1
//     }
//    }
//    let datas=Object.values(result)
//    let v1=datas[0]
//    for(let data of datas){
//         if(v1!==data){
//           return false
//         }

//    }
//    return true
// }
// console.log(valu("abab"))
// function thePlane(arr) {
//   let data = arr.split(",");
//   let p = [];
//   let n = [];
//   for (let i = 0; i <= data.length; i++) {
//     let dum = data[i].trim().split(" ");
//     if (dum.includes("Board")) {
//       break;
//     } else if (dum.includes("ADD_PRIORITY")) {
//       p.push(dum[1]);
//     } else if (dum.includes("ADD_NORMAL")) {
//       n.push(dum[1]);
//     }
//   }
//   let board = [...p, ...n];
//   return board;
// }
// console.log(thePlane("ADD_NORMAL Alice , ADD_NORMAL Bob , ADD_PRIORITY Carol,Board, ADD_NORMAL David"));

// function music(m) {
//   let song = [];
//   let rem = [];
//   let not=[]
//   let newsong = [];
//   let data = m.split(",");
//   // let data=v.trim().split(" ")
//   for (let i = 0; i < data.length; i++) {
//     let val = data[i].trim().split(" ");
//     if (val.includes("ADD")) {
//       song.push(val[1]);
//     } else if (val.includes("REMOVE")) {
//       if(!song.includes[val[1]]){
//         not.push(`song ${val[1]} not found`)
//       }
//       rem.push(val[1]);

//     } else if (val.includes("PAYLIST")) {
//       newsong.sort()
//     }
//   }
//   for (let item of song) {
//     if (!rem.includes(item)) {
//       newsong.push(item);
//     }
//   }

//   return newsong
// }
// console.log(
//   music(
//     "ADD ShapeOfYou,ADD BlindingLights,ADD david,ADD Levitating,ADD Peaches,REMOVE BlindingLights,REMOVE SomeoneYouLoved,PLAYLIST,SHUFFLE,REMOVE Peaches,ADD Aam"
//   )
// );

// function lg(arr){
//   let large=arr[0]
//   for(let lg of arr){
//     if(lg>large){
//       large=lg
//     }
//   }
//   let second=[]
//   arr.forEach(item => {
//      if(item!==large){
//       second.push(item)
//      }
//   });
//   let seconds=second[0]
//   for(let num of second){
//     if(num>seconds){
//       seconds=num
//     }
//   }
//   return seconds
// }
// console.log(lg([1,5,7,3,2,4,2]))

// function fib(n){
//     let num=[]
//     let a=0
//     let b=1
//     for(let i=0;i<n;i++){
//        num.push(a)
//        let next=a+b
//        a=b
//        b=next

//     }
//     return num
// }
// console.log(fib(9))
//  function  count(){
//     const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
//     let resu={}
//     for(let item of arr){
//         if(resu[item]){
//             resu[item]++
//         }
//         else{
//             resu[item]=1
//         }
//     }
//     return resu

//  }

//  console.log(count())

//  function firstNonRepeating(arr){
//      let word=arr.split("")
//      let result={}
//      for(let item of word){
//         if(result[item]){
//             result[item]++
//         }
//         else{
//             result[item]=1
//         }
//      }

//      for(let char of word){
//         if(result[char]==1){
//             return char
//         }
//      }
//      return null
//  }
//  console.log(firstNonRepeating("aabbcc"))

// function div(num){
//     let div=[]
//     for(let i=0;i<num;i++){
//          if(num%i==0){
//             div.push(i)
//          }
//     }
//     return div
// }
// console.log(div(20))

// function sub(arr){
//     let data=arr.split("")
//     for(let i=0;i<=data.length;i++){
//       if()
//     }
// }
// function prime(num){
//     if(num<2){
//         return false

//     }
//     for(let i=2;i<=num-1;i++){
//         if(!num%i == 0){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }

// console.log(prime(7))

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(res=>res.json())
// .then(data=>data.forEach(item => {
//     console.log(item.name)
// }))

// let dats=async()=>{
//     let datas= await fetch("https://jsonplaceholder.typicode.com/comments")
//     let res= await datas.json()
//      res.forEach((item)=>{
//         console.log(item.name)
//     })
// }
// dats()

// function fors(num) {
//   let value = [];
//   let fiz=[]
//   let buz=[]
//   for (let i = 1; i <= num; i++) {
//     value.push(i);
//     if(i%3==0){
//         fiz.push(i)
//     }
//     else if(i%5==0){
//         buz.push(i)
//     }
//   }
//   return `fiz is =${fiz} buzz is ==${buz}`

// }
// console.log(fors(100))

// function counter(arr){
//     let data= arr
//     let result=[]
//     let news =[]
//     for(let item of data){
//         if(result.includes(item)){
//             news.push(item)
//         }else{
//             result.push(item)
//         }
//     }
//     return news
// }
// console.log(counter([1, 3, 2, 1, 4, 3]))

// function para(arr) {
//   let stack = [];
//   for (let char of arr) {
//     if (char == "{") stack.push("}");
//     else if (char == "[") stack.push("]");
//     else if (char == "(") stack.push(")");
//     else if (stack.pop() !== char) {
//       return false;
//     }
//   }
//   return stack;
// } 
// console.log(para("({[[]})"));   
// function kpos(arr,num){         
//     let nums =[]
//     let num2=[]          
//     for(let i=1;i<=arr.length-num;i++){
//         nums.push(i)       
//     }           
//     for(let j=arr.length-(num-1);j<=arr.length;j++){
//         num2.push(j)   
//     }  
                           
//     return [...num2,...nums]    
           
// }                      
// console.log(kpos([1,2,3,4,5],2))  
// function GroupAngrams(arr){   
                
// }                        
// console.log(GroupAngrams(["eat","tea","tan","ate","nat","bat"]))
    
    
// function max(arr){
//     let time = new Date().getTime()
//     return time 
// }     
        
// console.log(max())
       
       
// function theSum(arr,sum){
//     let num=[]
//     let temp=[]
//      for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==sum){
//                 temp.push([arr[i],arr[j]])
//               } 
            
//         }  
//      }   
          
//      return  temp  
   
// }

// console.log(theSum([1,2,3,4,5,6],7))


// function reverses(arr){
//     let num=arr.split(" ").reverse().join(" ")
//     return num


// }

// console.log(reverses(" I am Here"))           

// function nonRep(arr){      
//     let result={}                
//     for(let item of arr){                             
//        if(result[item]){                           
//         result[item]++                  
//        }                                                     
//        else{                      
//         result[item]=1                                         
//        }                      
//     }      
//     let num=[] 
//     for(let char of arr){
//         if(result[char]==1){  
//             num.push(char)
//         }     
//     }   
//     return num                   
    
               
// }               
                                 
// console.log(nonRep([1,3,5,3,5,2,1,4]))           


// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((res)=>res.json()) 
// .then((data)=>data.forEach(element => {
//     console.log(element.name)
// }))  



// const dub=async()=>{
//     const res= await fetch("https://jsonplaceholder.typicode.com/comments")
//     const data= await res.json()
//     data.forEach((item)=>{
//         console.log(item.name)
//     })
// }
// dub()
// let num=[152]
// let j=num.toString().split("")
// console.log(j)
  
// input [942]
// out Put[6]
// 9+4+2


// function nums(arr){
//     let data=arr.toString("").split("")
//     let datas=0
//     for(item of data){
//         let n=Number(item)
//         datas+=n
//     }  
//     let das=datas.toString().split("")
//      let value=0
//     for(item of das){
//         let n=Number(item)
//         value+=n
//     }  
//     return value         
    
          
// }
// console.log(nums([942]))  
        
   


// function chechs(arr){
//     let stack=[]    
//     for( let item of arr.split("")){ 
//         if(item=="{") stack.push("}")  
//         else if(item=="[") stack.push("]")  
//         else if(item=="(") stack.push(")")         
//         else if(stack.pop()!==item){      
//             return false                                                                                      
//         }                                                        
//     }                         
//     return stack.length===0                        
// }     
// console.log(chechs("[([{})]"))        
// function longestSubstring(s){           
// }                                               
// console.log(longestSubstring("abcabcbb"));     


// function nonRepeat(str){
//       let result={}
//       let data=str.split("")
//       for(let item of data){
//         if(result[item]){
//             result[item]++
//         }
//         else{
//             result[item]=1
//         }
//       }
     
//       for(let char of data){
//         if(result[char]==1){
//             return char
//         }
//       }
//       return "-"
// }

// console.log(nonRepeat("aabbcc"))  



// function toDup(arr){  
//     let result={}
//     for(let item of arr){
//         if(result[item]){
//             result[item]++
//         }
//         else{
//             result[item]=1
//         }
//     }  
//     let num=[]                                                 
//     for(let char of arr){
//        if(!num.includes(char)){
//          if(result[char]>1){
//             num.push(char)
//         }
//        }
//     }  
//     return num
    
      
// }        
// console.log(toDup([1, 3, 2, 1, 4, 3]))      


// function same(str1,str2){
//     let num=[]
//     for(let item of str1){
//         if(str2.includes(item) && !num.includes(item)){
//             num.push(item)
//         }
//     }
//     return num

// }  

// console.log(same([1, 2, 2,3, 4], [3,2, 4, 5, 6]))     


// // Example
// let matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let matrix2 = [
//     [7, 8, 9],
//     [1, 2, 3]
// ];


// function addMatrices(mat1, mat2) {
//     let result = [];

//     for (let i = 0; i < mat1.length; i++) {
//         let row = [];
//         for (let j = 0; j < mat1[0].length; j++) {
//             row.push(mat1[i][j] + mat2[i][j]);
//         }
//         return row    
//     }

//     // return result;
// }
      
// // Example
// let matrix1 = [  
//     [1, 2, 3],                                
//     [4, 5, 6]       
// ];             
        
// let matrix2 = [   
//     [7, 8, 9],         
//     [1, 2, 3]   
// ];
// console.log(addMatrices(matrix1, matrix2));    

// function Toprmid(){
//     let rows=5
//     for(let i=1;i<=rows;i++){
//         let line ="";
//         for(let s=1;s<=rows-i;s++){
//             line+=" ";
//         }
//         for(let j=1;j<=2*i-1;j++){
//             line+="*"
//         }
//         console.log(line)
//     }
// }
// Toprmid()


function pyramid(){
    let rows=5
    for(let i=1;i<=rows;i++){
        let line=''
        for(let j=1;j<=rows-i;j++){
            line+=" "
        }
        for(let k=1;k<=2*i-1;k++){
            line+="*"
        }
        console.log(line)
    }
} 

pyramid()
  
 
// function matriz(m1,m2){           
//     let row=[]
//     for(let i=0;)
      
// }  

// let matrix1 = [     
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let matrix2 = [
//     [7, 8, 9],
//     [1, 2, 3]
// ];

// console.log(addMatrices(matrix1, matrix2));


// function hello(arr){
//     let stack=[]
//     for(let char of arr.split("")){
//         if(char=="{") stack.push("}")
//          else if(char=="(") stack.push(")")  
//         else if(char=="[") stack.push("]")
//         else if(stack.pop()!==char){
//             return false 
//         }   
//     }              
//     return stack.length ==0
// }

// console.log(hello("{[]()]}"))


// function toFind(arr){
//     let data =arr.split("")
//     let result={}
//     for (let item of data){
//         if(result[item]){
//             result[item]++
//         }
//         else
//         {
//             result[item]=1
//         }
//     }
//     // return result
//     for(let char of data){
//         if(result[char]==1){
//             return char
//         }
//     }
//     return "not single cahrater"
// }

// console.log(toFind("aabbcdc"))  

// function removeD(arr){
//     let d=[]
//     for(let item of arr ){
//         if(!d.includes(item)){
//             d.push(item)
//         }
//     }
//     return d

// }

// console.log(removeD([1, 1, 2, 3, 3, 4]))


// function missF(arr){
//     let num=[]
//     let js=[]
//     for(let i=1;i<arr.length+1;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]!=i){
//                 js.push(i)
//             }
//         }   
//     }    
//     return js    
    
// }                         
// console.log(missF([1, 2, 4, 5]))

// function toCheck(arr){
//        let og=[...arr]
//        let data=arr.sort((a,b)=>a-b) 
//     //    for(let num of data){
//     //      for(let item of ){
//     //         if(item!=num){
//     //             return false
//     //         }
//     //      }
//     //    }             

//        for(let i=0 ;i<og.length;i++){
//         if(og[i]!=data[i]){
//             return false
//         }
//        }
//        return true         
// }
// console.log(toCheck([1, 2, 3, 5,2]))


function findSecond(arr,num){
    let lg=arr.sort((a,b)=>b-a)
    return lg[num-1]
    // for(let item of arr){
    //     if(item>lg){
    //         lg=item  
    //     }
    // }

    // let sc=[]
    // for(let char of arr){
    //     if(lg!=char){
    //         sc.push(char)     
    //     }    
    // }      
    // for(let )   
                       
}                                                                                       
                                  
                                        
                                              
console.log(findSecond([4, 1, 6, 7, 2],1))                      
       
                          
                           
         
                                                                       