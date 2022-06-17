let k=JSON.parse(localStorage.getItem("bag")) ||[];

displaytable(k);

function displaytable(k){
    var total=0;
    document.querySelector("tbody").innerHtml="";
    k.forEach(function (elem,id){    
            var ns=document.createElement("tr");

            let td1=document.createElement("td");
            td1.innerText=elem.pp1;
            let td2=document.createElement("td");
            td2.innerText=elem.price;
            total+=Number(elem.price);
            let td5=document.createElement("td");
            td5.innerText="Delete";
            td5.style.color="white";
            td5.style.backgroundColor="red"
            td5.addEventListener("click",function(){
                dele(id);
                 });
            ns.append(td1,td2,td5);
            document.querySelector("tbody").append(ns);
        });
        document.querySelector("h2").innerText="TOTAL="+total
}
function dele(id){
                k.splice(id,1);
                localStorage.setItem("bag",JSON.stringify(k));
                window.location.reload();
}
document.querySelector("button").addEventListener("click",func)
function func(){
   localStorage.clear();
   
   window.location.reload();
   
   // k="";
   
};