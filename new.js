let arr7=[{img:"https://img.gkbcdn.com/p/2022-05-30/SCULPFUN-30L-Min-Air-Pump-Compressor-EU-Plug-501434-0._w280_p1_.jpg",
pp1:"SCULPFUN 30L/Min 200-240V Air Pump Compressor for Laser ",price:"7085.55"},
{img:"https://img.gkbcdn.com/p/2022-06-07/MIYOO-Mini-32GB-3000-Games-Retro-Handheld-Game-Console-Blue-501578-0._w280_p1_.jpg",
pp1:"Miyoo Mini 32GB Handheld Game Console, 3000",price:"4428.17"},
{img:"https://img.gkbcdn.com/p/2022-06-07/Creality-Smart-Kit-2-0-with-8G-TF-Card-501574-0._w280_p1_.jpg",
pp1:"Creality Smart Kit 2.0 Wifi Box, Cloud Slice, Colud Printing",price:"5313.96"},
{img:"https://img.gkbcdn.com/p/2022-05-27/a69f6f8df4584396aa09a7e4626d9f79-501364-0._w280_p1_.jpg",
pp1:"Mini Wireless Camera Real 1080P Wifi Camera Home",price:"1207.10"},
{img:"https://img.gkbcdn.com/p/2022-06-07/tronsmart-t7-mini-15w-bluetooth-speaker-ec260e-1654581513598._w280_p1_.jpg",
pp1:"Tronsmart T7 Mini 15W TWS Bluetooth Speaker",price:"2173.42"},
{img:"https://img.gkbcdn.com/p/2022-05-30/3-5-Inch-IPS-TYPE-C-Secondary-Screen-CPU-GPU-RAM-HDD-Monitoring-501430-0._w280_p1_.jpg",
pp1:"3.5 inch IPS Type-C Secondary Screen CPU GPU",price:"2978.69"},
{img:"https://img.gkbcdn.com/p/2022-06-01/360-Degree-Rotatable-1080p-HD-Camera-EU-Plug-501469-0._w280_p1_.jpg",
pp1:"360 Degree Rotatable 1080p HD Camera, WiFi Wireless",price:"1529.20"},
{img:"https://img.gkbcdn.com/p/2022-05-30/ortur-laser-engraving-y-axis-rotary-roller-c8a0c4-1653875208088._w280_p1_.jpg",
pp1:"ORTUR Laser Engraving Y-axis Rotary Roiller Ortur-YRR Laser",price:"6441.34"},
{img:"https://img.gkbcdn.com/p/2022-05-28/Ortur-Laser-Module-LU2-10A-24V-10W-501387-2._w280_p1_.jpg",
pp1:"Ortur LU2-10A 10W Laser Module, 0.07*0.06mm",price:"21741.43"},
{img:"https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220609",
pp1:"Sabbat E18 TWS Earbuds Wireless Bluetooth 5.2",price:"5636.07"},
{img:"https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220609",
pp1:"Metal Tube Spare Part for JIMMY JV51 Vacuum Cleaner",price:"3461.85"},
{img:"https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220609",
pp1:"XNANO X1 Android 9.0 LCD Projector, 1080p",price:"13688.75"},
{img:"https://img.gkbcdn.com/p/2022-06-11/JJRC-Q102-1-14-2-4G-Racing-RC-Car-Blue-502454-0._w280_p1_.jpg",
pp1:"JJRC Q102 1/14 2.4G Racing RC Car 20km/h Max Speed 25",price:"2898.16"}
];
display1(arr7);
function display1(arr7){
arr7.forEach( function(elem) {
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
