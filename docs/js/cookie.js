//    …Ë÷√cookie
function setCookie(name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}
//ªÒ»°cookie
function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        arr2=arr[i].split('=');
        for(var j=0;j<arr2.length;j++){
            if(arr2[0]==name){
                return arr2[1];
            }
        }
    }
    return '';
}
//…æ≥˝cookie
function removeCookie(name){
    setCookie(name,1,-1);
}