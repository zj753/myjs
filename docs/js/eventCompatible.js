/**
 * Created by Administrator on 2018/4/18.
 */
//封装对象
var eventCompatible={
    //事件兼容
    //e:function(e){
    //    return e||event;
    //} ,
    //添加事件,addEventListener能力检测
    addEvent:function(obj,event,func){
        if(obj.addEventListener){
            obj.addEventListener(event,func,false)
        }else if(obj.attachEvent){
            obj.attachEvent('on'+event,func);
        }else{
            obj['on'+event]=func;
        }
    },
    //删除事件
    removeEvent:function(obj,event,func){
        if(obj.removeEventListener){
            obj.removeEventListener(event,func,false)
        }else if(obj.detachEvent){
            obj.detachEvent('on'+event,func);
        }else{
            obj['on'+event]=null;
        }
    },
    //阻止默认行为
    preventDefault:function(e){
        if(e.preventDefault){
            e.preventDefault()
        }else {
            e.returnValue=false;
        }
    },
    //租住冒泡
    stopPropagation:function(e){
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    },
//可视窗口属性兼容
    getDocProp:function(prop_name){
        return document.documentElement[prop_name]||document.body[prop_name]
    },
    agentEvent2:function(ancestor,event,aEl,func){
        this.addEvent(ancestor,event,function(ev){
            var e=ev||window.event;
            var target= e.target|| e.srcElement;
            while(target!= e.currentTarget){
                if(target.nodeName==aEl[0].toUpperCase() && target.classList.contains(aEl[1])){
                    func.call(target);
                    //方法作用于函数
                    break
                }
                target=target.parentNode;
            }
        })
    }
};
