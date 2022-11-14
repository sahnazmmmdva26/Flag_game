var point=document.getElementById("point")
var flagarea=document.getElementById("flagarea")
var input=document.getElementById("input").value
var check=document.getElementById("check")


var array={}
var xal=0
newflag()
timer()
function newflag()
{
fetch("https://restcountries.com/v3.1/all")
   .then(res=>res.json()).then(arr=>
     {
             let i=Math.floor(Math.random() * arr.length)
             let flag=arr[i].flags.png;
             flagarea.innerHTML= `<img src="${flag}" class="img-thumbnail" ></img>`
             let name=arr[i].name.common
             array[0]=name
             console.log(array);
     }
       )
    }
function checking()
{
  if((document.getElementById("input").value)==array[0])
  {
    xal+=1
    point.innerHTML=`${xal}`
  }
  else
  {
    // xal-=1                            
    // point.innerHTML=`${xal}`
     
    // alert("WRONG!!!")
    // restart()    (muellim, commentlere fikir vermeyin, ozum ucun yazmisam :) )
  }
  newflag()
}
function restart()
{
  location.reload()

}


function timer()
{
 let start=59;
 let san=document.getElementById("timer")
 setInterval(time,1000)
 function time()
 {
  san.innerHTML = `${start}`
  if(start==0)
  {
     alert("Time is up")
     restart()
  }
  start--
 }
}



// var san=document.getElementById("timer")
  // let sec=60
  // setInterval(function () 
  // {
  // san.innerHTML = `${sec--}`
  // }, 1000);
  // setTimeout(newflag(), 60000);






// function fail()
// {
//   alert("you lose")
//   return
// }



// newflag()
// function newflag()
// {
// fetch("https://restcountries.com/v3.1/all")
// .then(res=>res.json()).then(arr=>
//     {
//             var i=Math.floor(Math.random() * arr.length);
//             flagarea.innerHTML= `<img src="${arr[i].flags.png}" class="img-thumbnail" ></img>`
//             var name=arr[i].name.common
            
//             function checking()
//             {
//                 if(input==name)
//                 {
//                     point++;
//                 }
//                 else
//                 {
//                     alert(point)
//                     restart()
//                 }
//             }
//         }
//     )
// }
// function restart()
// {
//     point.innerHTML="0"
//     newflag()
// }
