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


function  characters(arr){
    let data=arr.split("")
    let result={}  
    for(let item of data){
         if(result[item]){
             result[item]++
         }else{
          result[item]=1
         }
    } 
    let count =Object.values(result)
    let  sa=[]
    for(let iteam of count) {
      if(iteam==1){
        sa.push(iteam)
      }
    }
    if(sa.length<1){  
      return false    
    }    
    else{  
      return true                       
    }                                           
}
     
console.log(characters("listen silent"))  
    
         

