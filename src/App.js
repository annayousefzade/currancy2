import React, { useState } from 'react'

//const api = "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json";


//https://api.openweathermap.org/data/2.5/weather?q=Isfahan&appid=5a873b6b606d9e2aa79aff040a0e7d63



function App() {
  const [query, setQuery] = useState('');
  const [currency, setCurrency] = useState({});
  fetch("https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json")
  .then(res => res.json())
  .then(result => {
    setCurrency(result);
    setQuery('');
    console.log(result);
  });
  const dateBuilder = (d) => {
    let months = ["Jan" , "Feb" , "March" , "April" , "May", "June" , "july" , "August" , "Sep" , "Oct" , "Nov" , "Dec"];
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`
  }


 return(
<div className="app">
<main>
{(typeof currency.sana != "undefined")   ? ( 
<div>
<div className="namedollar"></div>
<div className="price-box">
<div className="date">{currency.sana.data[0].updated_at} 
</div>
<div className="dollarprice">دلار آمریکا</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[0].p}</h3>
 
 
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
            
   </section>
</div>
<div className="namedollar"></div>
<div className="price-box">

<div className="dollarprice">یورو</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[1].p}</h3>
 
 
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
             
   </section>
</div>
<div className="namedollar"></div>
<div className="price-box">

<div className="dollarprice">درهم</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[2].p}</h3>
 
 
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
              
   </section>
</div>
<div className="namedollar"></div>
<div className="price-box">

<div className="dollarprice">روپیه هند</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[3].p}</h3>
 
           </div>
       </section>
              
   </section>
</div>
<div className="namedollar"></div>
<div className="price-box">

<div className="dollarprice">لیر ترکیه</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[4].p}</h3>
 
           </div>
       </section>
               
   </section>
</div>
<div className="namedollar"></div>
<div className="price-box">

<div className="dollarprice">روبل روسیه</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[5].p}</h3>
 
 
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
              
   </section>
</div>
<div className="namedollar"></div>
<div className="price-box">

<div className="dollarprice">یوان چین</div>
<section class="container-main-all">
      
      <section class="priceTable-container-main">
           <div class="priceTable-column-1">
               <h3 class="priceTable-header">خرید</h3>
 <h3 class="priceTable-price">{currency.sana.data[6].p}</h3>
 
 
               <ul class="priceTable-ul">
                   
               </ul>
           </div>
       </section>
               
   </section>
</div>
</div>



) : ('')}

</main>




</div>

 );
}

export default App;