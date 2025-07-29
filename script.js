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



function greet(name,callback){
   console.log(name)
   callback()
}

function saybye(){
  console.log("goodbaye")
}      

greet("roshan",saybye)

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(res=>res.json())
// .then(data=>{
//   data.forEach(item => {
//     console.log(item.email)
//   });
// })


const datas =async()=>{
  let value=await fetch("https://jsonplaceholder.typicode.com/comments")
  let res= await value.json()
  res.forEach((item)=>{
    console.log(item.email)
  })
}

datas()
