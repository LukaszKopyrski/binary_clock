let now,h,hbf,hbs,m,mbf,mbs,s,sbf,sbs,i=0,mode;
let time=()=>{
    now=new Date();
    h=now.getHours();
    hbf=Math.floor(h/10);
    hbs=Math.floor(h%10);
    hbf=hbf.toString(2);
    hbs=hbs.toString(2);
    m=now.getMinutes();
    mbf=Math.floor(m/10);
    mbs=Math.floor(m%10);
    mbf=mbf.toString(2);
    mbs=mbs.toString(2);
    s=now.getSeconds();
    sbf=Math.floor(s/10);
    sbs=Math.floor(s%10);
    sbf=sbf.toString(2);
    sbs=sbs.toString(2);
    
     switch(hbf){
         case "0":
             document.querySelector('.hour__first').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;
        case "1":
            document.querySelector('.hour__first').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;
        case "10":
            document.querySelector('.hour__first').innerHTML="<img src='off.png'></img><img src='on.png'></img><img src='off.png'></img>";
        break;
     }
    
     switch(hbs){
        case "0":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;
        case "1":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
        break;
        case "10":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img><img src="off.png"></img>';
        break;
        case "11":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img><img src="on.png"></img>';
        break;
        case "100":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;
        case "101":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img><img src="on.png"></img>';
        break;
        case "110":
            document.querySelector('.hour__second').innerHTML='<img src="on.png"></img><img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
        case "111":
            document.querySelector('.hour__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="on.png"></img><img src="on.png"></img>';
        break;
        case "1000":
            document.querySelector('.hour__second').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';   
        break;
        case "1001":
            document.querySelector('.hour__second').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
        break;
     }

     switch(mbf){
        case "0":
            document.querySelector('.minute__first').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;
        case "1":
            document.querySelector('.minute__first').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;
        case "10":
            document.querySelector('.minute__first').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img>';
        break;
        case "11":
            document.querySelector('.minute__first').innerHTML='<img src="on.png"></img><img src="on.png"></img><img src="off.png"></img>';
        break;
        case "100":
            document.querySelector('.minute__first').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
        break;
        case "101":
            document.querySelector('.minute__first').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="on.png"></img>';
        break;
      
    }
   
    switch(mbs){
       case "0":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';
       break;
       case "1":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
       case "10":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img><img src="off.png"></img>';
       break;
       case "11":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img><img src="on.png"></img>';
       break;
       case "100":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
       break;
       case "101":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
       case "110":
           document.querySelector('.minute__second').innerHTML='<img src="on.png"></img><img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
        break;   
       case "111":
           document.querySelector('.minute__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="on.png"></img><img src="on.png"></img>';
       break;
       case "1000":
           document.querySelector('.minute__second').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';   
       break;
       case "1001":
           document.querySelector('.minute__second').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
    }

    switch(sbf){
        case "0":
           document.querySelector('.second__first').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';
       break;
       case "1":
           document.querySelector('.second__first').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
       break;
       case "10":
           document.querySelector('.second__first').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img>';
       break;
       case "11":
           document.querySelector('.second__first').innerHTML='<img src="on.png"></img><img src="on.png"></img><img src="off.png"></img>';
       break;
       case "100":
           document.querySelector('.second__first').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
       case "101":
           document.querySelector('.second__first').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
    }
   
    switch(sbs){
       case "0":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';
       break;
       case "1":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
       case "10":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img><img src="off.png"></img>';
       break;
       case "11":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="off.png"></img><img src="on.png"></img><img src="on.png"></img>';
       break;
       case "100":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img><img src="off.png"></img>';
       break;
       case "101":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
       case "110":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="on.png"></img><img src="off.png"></img>';
        break;   
       case "111":
           document.querySelector('.second__second').innerHTML='<img src="off.png"></img><img src="on.png"></img><img src="on.png"></img><img src="on.png"></img>';
       break;
       case "1000":
           document.querySelector('.second__second').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img><img src="off.png"></img>';   
       break;
       case "1001":
           document.querySelector('.second__second').innerHTML='<img src="on.png"></img><img src="off.png"></img><img src="off.png"></img><img src="on.png"></img>';
       break;
    }

    if(h<10){
        h=`0${h}`;
    }

    if(m<10){
        m=`0${m}`;
    }
    
    if(s<10){
        s=`0${s}`;
    }
    document.querySelector('.digital').innerHTML=`${h}:${m}:${s}`

    
}

setInterval(time,1000);