const id1=document.getElementById("id1");
  const wr=document.getElementById("wr");
  const btn=document.getElementById("btn");
  const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  btn.addEventListener("click",()=>{
    var hexcolo="#"
    for(var i=0;i<6;i++){
        hexcolo+=randomf();
    }
    wr.style.backgroundColor=hexcolo;
     id1.innerHTML=hexcolo;
  })    
    function randomf(){
      var rand=Math.floor(Math.random()*15);
      return hex[rand]
    }
  btn1=document.getElementById("btn1");
  btn1.addEventListener("click",()=>{
  var cust=document.getElementById("cust").value;
  wr.style.backgroundColor=cust;
     id1.innerHTML=cust;
  })

