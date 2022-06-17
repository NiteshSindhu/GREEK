document.querySelector("form").addEventListener("submit",checkdat);

let detail=JSON.parse(localStorage.getItem("data")) || [];
function checkdat(){
                event.preventDefault();
                let mail=document.querySelector("#mail").value;
                let pass=document.querySelector("#pass").value;
            let obj={
                email:mail,
                password:pass,
            }
            if(checkdata(obj.email,obj.password)==true){

                localStorage.setItem("login",JSON.stringify(obj))
                alert("Login Successful");
                window.location.href="index.html";
            }else{
                alert("Incorrect Detail");
            }

            function checkdata(mai,pas){
                let fl=detail.filter(function(elem){
                    return mai===elem.email &&  pas===elem.password;
                })
                if(fl.length>0){
                    return true;
                }else{
                    return false;
                }
            }
}




document.querySelector(`input[type="button"]`).addEventListener("click", dt);
function dt(){
    window.location.href="signup.html"
}