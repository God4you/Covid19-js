
let url = "https://api.covid19api.com/summary"
let $myTotalCases = $('#myData');
let $myNewCases = $('#myLiveData');

async function getCovidApi(){
    const jsondata = await fetch(url);
    const jsdata = await jsondata.json();
    console.log(jsdata)
    const item=jsdata.Countries[46];//Denmark
    console.log(item)

    let dateOnly = item.Date;
    

    //Totale sager
    $myTotalCases.append(             //.substr(0,10) (index 0 til 10 skal vises = kun datoen ikke noget tid.)     
    `       
    <td>${dateOnly.substr(0,10)}</td> 
    <td>${item.TotalConfirmed}</td>
    <td style="color: red;">${item.TotalDeaths}</td>
    <td>${item.TotalRecovered}</td>
    `)
    //Nye sager
    $myNewCases.append(                     
    `
    <td>${item.Date.substr(0,10)}</td>
    <td>${item.NewConfirmed}</td>
    <td style="color: red;">${item.NewDeaths}</td>
    <td>${item.NewRecovered}</td>
    `)
}
getCovidApi()
