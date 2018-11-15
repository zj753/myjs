/**
 * Created by Administrator on 2018/4/18.
 */
//��װ����
var eventCompatible={
    //�¼�����
    //e:function(e){
    //    return e||event;
    //} ,
    //����¼�,addEventListener�������
    addEvent:function(obj,event,func){
        if(obj.addEventListener){
            obj.addEventListener(event,func,false)
        }else if(obj.attachEvent){
            obj.attachEvent('on'+event,func);
        }else{
            obj['on'+event]=func;
        }
    },
    //ɾ���¼�
    removeEvent:function(obj,event,func){
        if(obj.removeEventListener){
            obj.removeEventListener(event,func,false)
        }else if(obj.detachEvent){
            obj.detachEvent('on'+event,func);
        }else{
            obj['on'+event]=null;
        }
    },
    //��ֹĬ����Ϊ
    preventDefault:function(e){
        if(e.preventDefault){
            e.preventDefault()
        }else {
            e.returnValue=false;
        }
    },
    //��סð��
    stopPropagation:function(e){
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    },
//���Ӵ������Լ���
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
                    //���������ں���
                    break
                }
                target=target.parentNode;
            }
        })
    }
};
