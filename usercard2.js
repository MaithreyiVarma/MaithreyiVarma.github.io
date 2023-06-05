let Dhonioldinfo = {
    imgurl: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png", 
    name: "MS Dhoni",
    description: "Captain of aindian "
}  

let Dhoninewinfo ={
    imgurl: "https://st3.cricketcountry.com/wp-content/uploads/2015/05/MS-Dhoni.jpg",
    name: "MS Dhoni",
    description: "All rounder"
}

let isDhonithebestcaptain =true;
let displayobject;
let flipdata= function(){
    if (isDhonithebestcaptain == true ){
        displayobject= Dhoninewinfo;
        isDhonithebestcaptain = false;
    }
    else{
        displayobject=Dhonioldinfo;
        isDhonithebestcaptain=true;
    }
    document.getElementById("Dhoni-img").src= displayobject.imgurl;
    document.getElementById("Dhoni-name").innerHTML = displayobject.name;
    document.getElementById("Dhoni-description").innerHTML= displayobject.description;
}