function music(m) {
  let song = [];    
  let rem = [];
  let not=[]
  let newsong = [];
  let dummy=[]
  let data = m.split(",");
  // let data=v.trim().split(" ")    
  for (let i = 0; i < data.length; i++) {
    let val = data[i].trim().split(" ");  
    if (val.includes("ADD")) {
      song.push(val[1]);
    } else if (val.includes("REMOVE")) {
      if(!song.includes[val[1]]){  
        not.push(`song ${val[1]} not found`)
      }    
      rem.push(val[1]);
             
    } else if (val.includes("PAYLIST")) {
      newsong.sort()    
    }     
  }    
  for (let item of song) {  
    if (!rem.includes(item)) {        
      newsong.push(item);        
    }      
  }   
                                   
  return dummy
}         
console.log(         
  music(                      
    "ADD ShapeOfYou,ADD BlindingLights,ADD david,ADD Levitating,ADD Peaches,REMOVE BlindingLights,REMOVE SomeoneYouLoved,PLAYLIST,SHUFFLE,REMOVE Peaches,ADD Aam"
  )       
);                        
  



function ()