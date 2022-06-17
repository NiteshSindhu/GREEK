let arr=["pic1.webp","pic2.webp","pic3.webp","pic4.webp","pic5.webp","pic6.webp"];

let arr1=[{img:"https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
price:"2556.58",actpri:"₹3381.32",pp1:"Tronsmart T2 Plus 20W"},
{img:"https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
price:"3542.37",actpri:"₹5394.49",pp1:"Tronsmart Element Mega Bluetooth Speaker"},
{img:"https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg",
price:"2415.00",actpri:"₹3059.21",pp1:"Razer Deathadder Essential-Optical"},
{img:"https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_p1_.jpg",
price:"4025.53",actpri:"₹5313.96",pp1:"Sabbat E12 Bluetooth 5.0"}];
let arr2=[
    {img:"https://img.gkbcdn.com/p/2021-07-20/e8d982f4f76e4c109aff2227fedaaa18-461408-1._w280_p1_.jpg",
    price:"84552.33",actpri:"₹110320.73",pp1:"One Netbook"},
    {img:"https://img.gkbcdn.com/p/2022-04-16/tronsmart-trip-10w-portable-bluetooth-5-3-speaker-e792fc-1650097262177._w280_p1_.jpg",
    price:"1609.73",actpri:"₹2012.36",pp1:"Tronsmart Trip 10W"},
    {img:"https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
    price:"4830.80",actpri:"6441.34",pp1:"Tronsmart Element T6"},
    {img:"https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_p1_.jpg",
    price:"1529.20",actpri:"1851.31", pp1:"3.7V 108 Lamp Beads"}
];

let arr3=[{
    img:"https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",
    tix:"Smart Home",
    tix1:"Smart cleaning robots and vacuums, keep floors constantly tidy with very little effort on your part."
},
{
    img:"https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg",
    tix:"E-transport",
    tix1:"My ride, My speed, My way. I'm keeping up with myself"
},
{
    img:"https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg",
    tix:"3D Printers",
    tix1:"3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing."
}];

let arr4=[{
    img:"https://img.gkbcdn.com/p/2022-05-27/xiaomi-mi-band-7-black-17e243-1653647543366._w280_p1_.jpg",
    pp1:"XIAOMI MI Band 7 Samrt Bracelet Smart Wristband",
    price:"4589.22"
},
{
    img:"https://img.gkbcdn.com/p/2022-05-27/MEROCA-WR15-WR25-Cushion-mounting-bracket-501368-0._w280_p1_.jpg",
    pp1:"Cushion Mounting Bracket for MEROCA WR15 WR25 Smart Bike Tail",
    price:"240.78"
},
{
    img:"https://img.gkbcdn.com/p/2022-06-11/J2-Colorful-Flame-Diffuser-with-3D-Dynamic-Mist-502439-0._w280_p1_.jpg",
    pp1:"J2 Colorful Flame Diffuser with 3D Dynamic Mist",
    price:"2415.00"
},
{
    img:"https://img.gkbcdn.com/p/2022-06-14/Roborock-S7-S7-MAXV-Plus-Auto-Suction-Station-Dust-Bag-and-Support-502885-0._w280_p1_.jpg",
    pp1:"Roborock S7/S7 MAXV Plus Auto-Empty Dock",
    price:"2656.58",
},
];

let arr5=[{img:"https://img.gkbcdn.com/p/2018-11-22/netac-n600s-1tb-ssd-2-5-inch-solid-state-drive-blue-1571991121689._w280_p1_.jpg",
pp1:"Netac N600S 1TB SSD 2.5 inch Solid State Drive SATA3 Interface Read",
price:"11272.95",
actpri:"₹13044.54"},
{img:"https://img.gkbcdn.com/p/2022-05-23/68356b7ef7904bcd990edda141b5baa6-501236-0._w280_p1_.jpg",
pp1:"SCULPFUN S10 10W Laser Module Set, High Speed Air Assist, Fixed",
price:"23351.97",
actpri:"₹24962.50"},
{img:"https://img.gkbcdn.com/p/2019-07-11/qcy-t3--bluetooth-5-0-tws-earphone-3d-stereo-1574132285489._w280_p1_.jpg",
pp1:"QCY T3 Bluetooth 5.0 TWS Earphones 3D Stereo 25 Hour Battery Life IPX5",
price:"2415.00",
actpri:"₹2737.11"},
{img:"https://img.gkbcdn.com/p/2019-02-20/stmagic-spt31-512g-mini-portable-m-2-ssd-gray-1571995742585._w280_p1_.jpg",
pp1:"STmagic SPt131 512GB Mini Portable M 2 SSD USB3.1 Solid State Drive",
price:"6038.70",
actpri:"₹7407.66"},

];

let arr6=[{img:"https://img.gkbcdn.com/bb/jimmy-20200910094916929._p1_.jpg"},
{img:"https://img.gkbcdn.com/bb/eleglide-20220531151324673._p1_.jpg"},
{img:"https://img.gkbcdn.com/bb/roborock-20211111211035580._p1_.jpg"},
{img:"https://img.gkbcdn.com/bb/tronsmart-20210123120544453._p1_.jpg"},
];


var bag=JSON.parse(localStorage.getItem("bag")) || [];
display(arr,arr1,arr2,arr3,arr4,arr5,arr6);
var n=0; var s="₹"
function display(arr,arr1,arr2,arr3,arr4,arr5,arr6){
   
    var img=document.createElement("img")

    img.src=arr[0];

    let btn=document.createElement("button");
    btn.innerText="<";
    let btn1=document.createElement("button");
    btn1.innerText=">";
    
    document.querySelector(".h").append(img,btn,btn1);
    btn.addEventListener("click",function(){
        if(n===0){
            n=arr.length-1;
        }else{
                n--;
        }
        img.src=arr[n];
    })
    
    btn1.addEventListener("click",function(){
        if(n===arr.length-1){
            n=0;
        }else{
            n++;
        }
        img.src=arr[n];
    });
    
    let div1=document.createElement("div");
    arr1.forEach(function(elem){
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.img;
        let h3=document.createElement("h3");
        h3.innerText=elem.pp1;
        let p1=document.createElement("p");
        p1.innerText=elem.price
        let p2=document.createElement("p");
        p2.innerText=elem.actpri;
        p2.style.textDecoration="line-through"
        let button=document.createElement("button");
        button.addEventListener("click",function(){
           addbag(elem);
        });
        button.innerText="Add To Bag";
        d1.append(img,h3,p1,p2,button)
        div1.append(d1);
    });
    
    

    let div2=document.createElement("div");
    arr2.forEach(function(elem){
        let d2=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.img;
        let p1=document.createElement("p");
        p1.innerText=elem.pp1;

        let p3=document.createElement("p");
        p3.innerText=elem.price
        let p4=document.createElement("p");
        p4.innerText=elem.actpri;
        p4.style.textDecoration="line-through"

        let button=document.createElement("button");
        button.innerText="Add To Bag";
        button.addEventListener("click",function(){
            addbag(elem);
        });



        d2.append(img,p1,p3,p4,button);
        div2.append(d2);
    });
    
    

    document.querySelector(".h+div").append(div1,div2);


    let h1=document.createElement("h1");
    h1.innerText="Trending Categories";
    let div3=document.createElement("div")
    arr3.forEach(function (elem){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.img;
    let p6=document.createElement("p");
    p6.innerText=elem.tix;
    let p5=document.createElement("p");
    p5.innerText=elem.tix1;
    div1.append(img,p6,p5);
    div3.append(div1);
    })
    document.querySelector("#Trend").append(h1,div3)



    let h2=document.createElement("h1");
    h2.innerText="New For You";
    let div5=document.createElement("div")
    arr4.forEach(function (elem){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.img;
    let p6=document.createElement("p");
    p6.innerText=elem.pp1;
    let p5=document.createElement("p");
    p5.innerText=elem.price;
    let button=document.createElement("button");
    button.innerText="Add To Bag";
    button.addEventListener("click",function(){
        addbag(elem);
    })
    div1.append(img,p6,p5,button);
    div5.append(div1);
    })
    document.querySelector("#New").append(h2,div5)



    let div6=document.createElement("div");
    let h3=document.createElement("h1");
    h3.innerText="Bestselling"
    arr5.forEach(function(elem){
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.img;

        let p3=document.createElement("p");
        p3.innerText=elem.pp1

        let p1=document.createElement("p");
        p1.innerText=elem.price
        let p2=document.createElement("p");
        p2.innerText=elem.actpri;
        p2.style.textDecoration="line-through"
        let button=document.createElement("button");
        button.addEventListener("click",function(){
           addbag(elem);
        });
        button.innerText="Add To Bag";
        d1.append(img,p3,p1,p2,button)
        div6.append(d1);
    });
    document.querySelector("#best").append(h3,div6);



    let div7=document.createElement("div");
    let h4=document.createElement("h1");
    h4.innerText="Popular Brand";
    arr6.forEach(function(elem){
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.img;
        d1.append(img);
        div7.append(d1);
    })
    document.querySelector("#brand").append(h4,div7)
}






function addbag(elem){
        if(check(bag,elem)){
            alert("ALREADY ADDED TO CART")
        }else{
            bag.push(elem)
        localStorage.setItem("bag",JSON.stringify(bag))
        // window.location.href="cart.html"
        }

    }
    function check(bag,elem){
        for(let i=0; i<bag.length; i++){
            if(bag[i].pp1 == elem.pp1){
                return true;
            }
        }
        return false;
    }
