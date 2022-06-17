document.querySelector("form").addEventListener("submit",display);


var data=JSON.parse(localStorage.getItem("data")) || [];
function display(event){
    let nam=document.querySelector("#name").value;
    let mail=document.querySelector("#mail").value;
    let pass=document.querySelector("#pass").value;
    let obj={
        name:nam,
        email:mail,
        password:pass,
    };
    if(checkemail(mail)==true){
        data.push(obj);
        alert("Signup Successful")
        localStorage.setItem("data",JSON.stringify(data));
    }else{
        alert("Already Have An Account");
    }
    function checkemail(mail){
        let fl=data.filter(function(elem){
            return mail===elem.email;
        });
        if(fl.length>0){
            return false;
        }else{
            return true;
        }
    }
    
    
}

