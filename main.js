
let url = "https://api.covid19api.com/summary"
let $myTotalCases = $('#myData');
let $myNewCases = $('#myLiveData');

async function getCovidApi(){
    const jsondata = await fetch(url);
    const jsdata = await jsondata.json();
    console.log(jsdata)
    const item=jsdata.Countries[46];//Denmark
    console.log(item)
    //Total Cases
    $myTotalCases.append(     //<td>${item.Date}</td>              
    `       
    
    <td>${item.TotalConfirmed}</td>
    <td style="color: red;">${item.TotalDeaths}</td>
    <td>${item.TotalRecovered}</td>
    `)
    //New Cases
    $myNewCases.append(                   //<td>${item.Date}</td>
    `
    <td>${item.NewConfirmed}</td>
    <td style="color: red;">${item.NewDeaths}</td>
    <td>${item.NewRecovered}</td>
    `)
}
getCovidApi()
