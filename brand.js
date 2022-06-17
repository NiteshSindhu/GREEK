


var arr9=[{img:"https://img.gkbcdn.com/bb/jimmy-20200910094916929._p1_.jpg"},
{img:"https://img.gkbcdn.com/bb/eleglide-20220531151324673._p1_.jpg"},
{img:"https://img.gkbcdn.com/bb/roborock-20211111211035580._p1_.jpg"},
{img:"https://img.gkbcdn.com/bb/tronsmart-20210123120544453._p1_.jpg"},
];

displaytable(arr9)
function displaytable(arr6){
    let div7=document.createElement("div");
    let h4=document.createElement("h1");
    h4.innerText="Popular Brand";
    arr9.forEach(function(elem){
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.img;
       
        d1.append(img);
        div7.append(d1);
    })
    document.querySelector("#brand").append(h4,div7)
}