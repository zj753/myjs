/**
 * Created by Administrator on 2018/4/14.
 */
function getAjaxData(method,url,func,data){
    var oAjax=new XMLHttpRequest();

    oAjax.open(method,url+'?t='+new Date().getTime(),true);
    if(method=='post'){
        oAjax.send(data);
    }else{
        oAjax.send();
    }
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status==200){
                var str=oAjax.responseText;
                var result=str[0]=='['?eval(str):str;
                if(func) func(result);
            }else{
                alert('Ê§°Ü');
            }
        }
    }
}