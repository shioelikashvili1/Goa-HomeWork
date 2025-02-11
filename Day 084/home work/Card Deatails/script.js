let card_name =document.getElementById("card_name");        
let card_number =document.getElementById("card_number");     
let card_month =document.getElementById("card_month");    
let card_year =document.getElementById("card_year");
let card_cvc = document.getElementById("card_cvc");
let displaycvc = document.getElementById("cvc");
let displyyear = document.getElementById("year");
let displaymonth = document.getElementById("month");
let displanumber = document.getElementById("number");
let displayname = document.getElementById("name");
let btn1 = document.getElementById("submit_btn");

function Cvc(){
 displaycvc.innerHTML = card_cvc.value;
 displayyear.innerHTML = card_year.value;
 displaymonth.innerHTML = card_month.value;
 displaynumber.innerHTML = card_number.value;
 displayname.innerHTML = card_name.value;
 

}

btn1.addEventListener('click',Cvc);