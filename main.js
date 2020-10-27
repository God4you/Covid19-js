
let url = "https://api.covid19api.com/summary"
let $myData = $('#myData');


async function getCovidapi(){
    const jsondata = await fetch(url);
    const jsdata = await jsondata.json();
    console.log(jsdata)
    const item=jsdata.Countries[46];//Denmark
    console.log(item)
    $myData.append(                   
    `<td>${item.NewConfirmed}</td>
    <td>${item.TotalConfirmed}</td>
    <td style="color: red;">${item.NewDeaths}</td>
    <td>${item.TotalDeaths}</td>
    <td>${item.TotalRecovered}</td>
    `)
}
getCovidapi()
