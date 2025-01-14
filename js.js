
async function api(){
    try{
        const url= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data=await url.json();
   
    console.log(data.bpi.USD.rate);
    }catch(err){
        console.log('error hai ',err);
    }


}



const btn=document.querySelector("#btn");
btn.addEventListener('click',(()=>{
    api();
}))