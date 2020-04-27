

butt.addEventListener('click',getHeight);

function getHeight (){

    let personHeight = prompt("Hey what is your height?","");
    let time = Math.sqrt((2*personHeight)/9.81); 
    let  horizontalRange =6 * time;

    if (personHeight!=null)

        {document.getElementById("butt").innerHTML =
         `Your sneeze range is ${horizontalRange.toFixed(2)}  meters!`;    
    }

}

// new demo 

date.addEventListener('click',getZodiac);

function getZodiac (){
   
    let y = prompt ("In what month where you born", "");

    
    let x = prompt ("In which day of the month?");

        

         if ((y==='january' && 20<x<31) || (y==='february' && 1<x<18))
            {document.getElementById("date").innerHTML=`You are Aquarious`};


         if ((y==='february'&& 19<x<31) || (y==='march' && 0<x<20))
            {document.getElementById("date").innerHTML=`You are Pisces`};

         if ((y==='march'&& 21<x<31) || (y==='April' && 0<x<19))
            {document.getElementById("date").innerHTML=`You are Aries`};
            
}


// new demo 

luck.addEventListener('click',future);

function future(){

    let x = prompt ("hey beby, give me a try","type here");
    let y = Math.floor(Math.random()*6);
    let z ='';

    switch(y){
        case 0 : z = 'This is certain';
        break;
        case 1 : z = 'It is decidely so';
        break;
        case 2 : z = 'Reply hazy try again';
        break;
        case 3 : z = 'Cannot predict that sorry';
        break;
        case 4 : z = 'Do not count on it';
        break;
        case 5: z = 'My sources say no';
        break;

    }


    document.getElementById("luck").innerHTML= z ;
}


// idea above pending  too simplle for now 

// calculating hours of sleep 

const preSleepHours=day=>{


switch (day){
    case 'monday':
            return 8
         break;
    case 'tuesday':
         return 7
         break;
    case 'wednesday':
         return 8
         break;
    case 'thursday':
         return 5
         break;
    case 'friday':
         return 8
         break;
    case 'saturday':
         return 8
         break;
    case 'sunday':
        return 8
        break;

        defalut: 
        return "error1"

    
}};

console.log(preSleepHours('monday'));

// why without brackets ?
const addPreSleep = () => 

    preSleepHours('monday') +
    preSleepHours('tuesday') +
    preSleepHours('wednesday') +
    preSleepHours('thursday') +
    preSleepHours('friday') +
    preSleepHours('saturday') +
    preSleepHours('sunday');




console.log(addPreSleep());


const idealHours=()=>{
    let ideal=8
    return ideal*7;
}

console.log(idealHours());

const calculateDebt=()=>{
    const idealSleepHours = idealHours();
    const actualSleepHours = addPreSleep();
    const difference = (idealSleepHours - actualSleepHours);
    

    console.log(difference);


    if (actualSleepHours===idealSleepHours){
            console.log ('you are on perfect  sleep')}
                 else if (actualSleepHours>idealSleepHours){
                    console.log(`you are over sleeping by + ${difference}`)}
                 else if (actualSleepHours<idealSleepHours){
                    console.log(`you are under sleeping by + ${difference}`)}
        else {console.log('error')};

    };

console.log(calculateDebt());

