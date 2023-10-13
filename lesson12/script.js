// 1
// let count = 0;
// function nextcolor(event){
//     event.target.style.background = arrcolor[count];
//     if(event.isTrusted){
//         count++;
//         if(count == 3){
//             count = 0;
//         }
//     }
// }
// let arrcolor = ['red','yellow','green'];
// document.querySelector(".box").addEventListener('mouseover',nextcolor);
// document.querySelector(".box").addEventListener('mouseout',function(event){
//     event.target.style.background = 'darkviolet';
// })

//2
// let pp = document.getElementsByTagName("p");
// pp[0].style.fontSize = '30px';
// pp[0].style.textAlign = 'center'

// document.querySelector(".box").addEventListener('mouseover',function(event){
//      event.target.style.background = 'yellow';
//      pp[0].textContent = "Хочеш знати який?";
//      pp[0].style.color = 'blue';
// })
// document.querySelector(".box").addEventListener('mousedown',function(event){
//     event.target.style.background = 'black';
//     pp[0].textContent = "А я тобі не скажу!";
//     pp[0].style.color = 'white'
// })
// document.querySelector(".box").addEventListener('mouseup',function(event){
//     event.target.style.background = 'yellow';
//     pp[0].textContent = "Хочеш знати який?";
//     pp[0].style.color = 'blue';
// })
// document.querySelector(".box").addEventListener('mouseout',function(event){
//     event.target.style.background = 'darkviolet';
//     pp[0].textContent = "У мене є секрет";
//     pp[0].style.fontSize = '30px';
//     pp[0].style.textAlign = 'center'
//     pp[0].style.color = 'black';
// })

//3
// document.querySelector(".box1").addEventListener('click',function(event){
//     let prom = prompt("write url");
//     event.target.style.backgroundImage = `url("${prom}")`;
//     event.target.style.backgroundSize = 'cover';
// })
// document.querySelector(".box2").addEventListener('click',function(event){
//     let prom = prompt("write url");
//     event.target.style.backgroundImage = `url("${prom}")`;
//     event.target.style.backgroundSize = 'cover';
// })
// document.querySelector(".box3").addEventListener('click',function(event){
//     let prom = prompt("write url");
//     event.target.style.backgroundImage = `url("${prom}")`;
//     event.target.style.backgroundSize = 'cover';
// })

//4 
document.querySelector("#oo").addEventListener('click',addColor);
function addColor(event){
    if(event.target.className == 'olli'){

        event.target.style.color = event.target.textContent;
    }
}