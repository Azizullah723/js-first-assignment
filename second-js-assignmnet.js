
let numneighbors=Number(prompt("how many neighbor does your country have?"))
if(numneighbors===1){
    console.log("only 1 border")
}
else if(numneighbors>1){
    console.log("more than 1 borders")
}
else{
    console.log("no borders")

}
//----------------------------------------//
let language="english";
let population=52;
let type="island"
if(language=="english"&& population<=50 && type=="island"){
    console.log("you should live in portugal")
}
else{
    console.log("portogul does not meet your criteria ")
}
//------------------------------------------//
let languagee="mandarian";
switch(languagee){
    case 'chainess','mandarian':console.log("fisrt  number of native speakers")
    break;
   
    case 'english' :console.log("second number of native speakers") 
    break;    
    case 'arabic':console.log("3rd number of native speakers") 
    break;    
    case 'hindi':console.log("4rd number of native speakers") 
    break;    
    case 'persian':console.log("5th number of native speakers") 
    break; 
    default:console.log("they are good too")   
}

//------------------------------------------//
function  describeCountry(country,population,capitalcity){
   

    
    console.log(country+" has  "+population+" million population and its capital city is "+capitalcity)

}

 describeCountry("finland",6,"helesinky");
 describeCountry("afghanistan",40,"kabul");
 describeCountry("Iran",140,"tehran");



 //----------------------------------------------------------//
 function worldPopulationPercentage1(populatin){

    let percentage=populatin/7900*100;
    
    console.log(percentage)

 }
worldPopulationPercentage1(1440);
worldPopulationPercentage1(40);
worldPopulationPercentage1(500);
///////////////////////////////////////////////////////
 
let populations=[1440,40,500,120,52];
console.log(populations.length==4);
///////////////////////////////////////////////////////////

let neighbors=['iran','pakistan','chaina','tajikistan'];
neighbors.push("utopia")
neighbors.pop()
neighbors.pop()
console.log(neighbors)

let result3=neighbors.includes("germany")
if(result3){
    console.log("you are in centeral europe")
}
else{
    console.log("you are not in centerl euorpe")
}


