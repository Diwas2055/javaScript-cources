var name1=document.getElementById("name1")
var age=document.getElementById("age")
var quali=document.getElementById("quali")
var email=document.getElementById("email")

var save_data=document.getElementById("save_data");
var p=document.querySelector("p");

save_data.onclick=function(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        console.log(this.readyState);
        console.log(this.status);
        console.log(this.responseText);
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            p.textContent=this.responseText;
        }
    }
    ajax.open("POST","save_data.php",true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("name="+name1.value+"&email="+email.value+"&age="+age.value+"&qual="+quali.value);
}