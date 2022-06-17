var arr=[
    {img:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg",
    pp1:"Eleglide M1 Plus Elctirc Mountain Bike", price:"65103.50"
    },
    {img:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-upgraded-version-electric-bike-7-5ah-250w-motor-dark-blue-b23cd2-1650765670228._w280_p1_.jpg",
    pp1:"Eleglide M1 Electric Bike Upgraded Version 27.5 inch", price:"54957.13"
    },
    {img:"https://img.gkbcdn.com/p/2021-10-28/36v-10-4ah-removable-battery-for-eleglide-f1-electric-bike-1635406527480._w280_p1_.jpg",
    pp1:"36V 10.4Ah Removable Battery For Eleglide F1 Electric Bike", price:"14047.90"
    },
    {img:"https://img.gkbcdn.com/p/2021-10-28/36v-12-5ah-removable-battery-for-eleglide-m1-plus---m1-electric-bike-1635405942861._w280_p1_.jpg",
    pp1:"36V 12.5Ah Removable Battery For Eleglide M1", price:"19535.00"
    }
];
displaytab(arr);
function displaytab(arr){
arr.forEach( function(elem) {
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.img;
    let h3=document.createElement("h3");
    h3.innerText=elem.pp1;
    let p1=document.createElement("p");
    p1.innerText=elem.price;
    let btn=document.createElement("button");
    btn.innerText="Add To Bag";
    btn.addEventListener("click",function(){
        addbag(elem);
    });
    div1.append(img,h3,p1,btn);
    document.querySelector("#eleglide").append(div1);
});

}
var bag=JSON.parse(localStorage.getItem("bag")) || [];

function addbag(elem){
    let obj={
        name:elem.img,
        price:elem.price,
        p:elem.pp1,
    }
    bag.push(obj);
    localStorage.setItem("bag",JSON.stringify(bag));
    // window.location.reload();
}