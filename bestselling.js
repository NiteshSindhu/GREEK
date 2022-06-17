let arr8=[{img:"https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
pp1:"Transmart Element Mega SoundPulse Bluetooth 5.0",price:"3542.37"},
{img:"https://img.gkbcdn.com/p/2017-11-25/mx3-l-m-backlight-voice-input-2-4ghz-wireless-air-mouse-1571989128244._w280_p1_.jpg",
pp1:"MX3-L-M Backlight & Voice Input 6-Axis Gyro 2.4GHz",price:"1126.57"},
{img:"https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_p1_.jpg",
pp1:"Tronsmart Force SoundPulse 40W Bluetooth 5.0 Speaker",price:"4589.22"},
{img:"https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
pp1:"Tronsmart Element T6 Plus Portable Bluetooth 5.0 Speaker",price:"4830.80"},
{img:"https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg",
pp1:"Xiaomi WiFi Amplifier Pro 2X2 External Antena 300Mbps",price:"1609.73"},
{img:"https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg",
pp1:"Apods i500 Bluetooth 5.0 Pop-up Window",price:"804.46"},
{img:"https://img.gkbcdn.com/p/2020-03-18/Tronsmart-Onyx-Ace-Bluetooth-5-0-TWS-Earphones-White-899355-._w280_p1_.jpg",
pp1:"Tronsmart Onyx Ace Pro True Wirless Earbuds",price:"2817.63"},
{img:"https://img.gkbcdn.com/p/2019-03-16/tronsmart-force-mega-t6-t6-plus-speaker-carry-case-1571991604256._w280_p1_.jpg",
pp1:"Tronsmart Force/Mega/T6/T6 Plus upgraded",price:"965.52"},
{img:"https://img.gkbcdn.com/p/2019-11-15/mifo-o7-bluetooth-5-0-tws-qualcomm-qcc3020-earphones-black-1574132882676._w280_p1_.jpg",
pp1:"Mifo O7 Bluetooth 5.0 Qualcomm OCC3020 TWS",price:"7246.61"},
{img:"https://img.gkbcdn.com/p/2017-10-21/c120-6-axis-gyro-2-4g-mini-air-mouse-1571989094158._w280_p1_.jpg",
pp1:"C120 English Version 6-Axis Gyro 2.4G Mini Wireless Air",price:"723.94"},
{img:"https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
pp1:"Tronsmart T2 plus 20W Bluetooth 5.0 Speaker 24H",price:"2656.58"},
{img:"https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg",
pp1:"A6R TWS Bluetooth V5.0 Button Control IPX4 Waterproof",price:"691.73"},
{img:"https://img.gkbcdn.com/p/2019-09-27/tronsmart-element-t6-mini-bluetooth-5-0-speaker---black-1571994046957._w280_p1_.jpg",
pp1:"Tronsmart Element T6 Mini 15W Bluetooth 5.0 Speaker",price:"2817.63"},
{img:"https://img.gkbcdn.com/p/2019-07-02/tronsmart-element-force-portable-bluetooth-speaker---carrying-case-1571993695019._w280_p1_.jpg",
pp1:"Bundle Tronsmart Force SoundPlue 40W Bluetooth",price:"4830.80"},
{img:"https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_p1_.jpg",
pp1:"JJRC X12 AURORA 4K 5G WiFi 3Km FPV GPS",price:"18520.36"},
{img:"https://img.gkbcdn.com/p/2020-04-03/ENCHEN-Multi-purpose-Electric-Hair-Clipper-Trimmer-Black-901271-._w280_p1_.jpg",
pp1:"Enchen Multi-purpose Electric Hair Clipper Trimmer Two",price:"1368.15"},
]






display1(arr8);
function display1(arr8){
arr8.forEach( function(elem) {
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
    })
    div1.append(img,h3,p1,btn);
    document.querySelector("#dv").append(div1);
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
