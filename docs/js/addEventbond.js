/**
 * Created by Administrator on 2018/4/13.
 */
function addEventbond(obj,ev,fn){
    if( obj.attachEvent){
        obj.attachEvent('on'+ev,fn);
    }else{
        obj.addEventListener(ev,fn,false);
    }
}
