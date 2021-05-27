
importScripts('helper.js');
console.log('consoles after helper')

let  msg
this.addEventListener('message', (e)=>{
    const {data}=e;
    console.log('e>>>>>', e);
    console.log('data******', data);
    msg=data;
})

let i=0
setTimeout(function(){
    console.log('******',this)
    this.postMessage(`sending msg back  :- ${msg}`)
}, 500)


let j=0
setTimeout(function(){
    console.log('#####1111',this)
    this.postMessage(`Counter j :- ${j++}`)
}.bind(this), 500)

console.log('##### >>>>>',this)