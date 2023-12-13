function randomText(){
var num = Math.floor( Math.random() * quote.length)
var num2 = Math.floor( Math.random() * write.length)
document.getElementById('quote').innerHTML=(quote[num]); 
document.getElementById('writer').innerHTML=(write[num2]); 

}
var quote =['“So many books, so little time.”', 
'“A room without books is like a body without a soul.”',
'“We accept the love we think we deserve.”',
'“You only live once, but if you do it right, once is enough.”',
'“In three words I can sum up everything Ive learned about life: it goes on.”',
'“To live is the rarest thing in the world. Most people exist, that is all.”',
'“Without music, life would be a mistake.”',
'“It is never too late to be what you might have been.”',
'“Everything you can imagine is real.”',
'“Do what you can, with what you have, where you are.”'
]
var write = ['― Frank Zappa' , '― Marcus Tullius Cicero','― Bernard M. Baruch', '― Mae West' ,'― Robert Frost','― Oscar Wilde',
'― Friedrich Nietzsche','― George Eliot','― Pablo Picasso','― Theodore Roosevelt'
]



















//      var  quotes =[{

//   quote:'“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.' ,
// write:'-ddddddddd',
// quote:'“Two thinmmmmmmmmmmmgs are infinite: the universe and human stupidity; and Im not sure about the universe.' ,
// write:'-ddddd'

//    }]

//    var write = ['ahmed , loay ,rprp, rrrrrr,rfrfvfrf,']
  

//    var quote = document.querySelector("#quote");

//    var  write = document.querySelector('#write');

//    var btn = document.querySelector("#Qbtn");

//    btn.addEventListener("click", function(){
   

//       quote.innerHTML = quote;

//       write.innerHTML = write;


//    })
