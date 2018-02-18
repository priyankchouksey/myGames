if (navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js").then((reg)=>{
        console.log("Service Worker registered...");
        if (!navigator.serviceWorker.controller){
            console.log("page is running from server");
            return;
        }
if (reg.waiting){
    //update is ready.
}


    }).catch((e)=>{
        console.log("Service Worker failed to register...");
    });
}