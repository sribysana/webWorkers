const ports=[];
let i=0
this.addEventListener('connect', function(e){
    console.log('shared workers >>>>.',e)
    const port = e.ports[0];
    ports.push(port);
    port.start();

    
    port.addEventListener('message', function(e){
        console.log('reveived event', e.data)
    })
    



    setTimeout(function(){
        i++;
        ports.forEach(function(port){
            port.postMessage('sending Message:' + i)
        });
    }, 500)
    

})