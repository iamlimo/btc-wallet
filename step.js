function test(){
    var sel = document.getElementById('opt');
    const getCountry = async () =>{
        console.log(`Awaiting the result" || Processing` )
        const req = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await req.json();
          return data;
    }
    
    getCountry().then(getIt => {
        console.log("index.html 16 | covid data", getIt);
        // document.getElementById("total-cases").innerText =
         var cl = getIt
         const newNames = cl.map(year =>{
             const contNames = year.name
             var el = document.createElement("option");
             el.textContent = contNames;
             el.value = contNames;
             opt.appendChild(el);
         });
       

      });
}

test()