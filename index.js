//1. 获取元素
var text = document.querySelector('input');

//2. 注册事件,获得焦点事件
text.onfocus = function(){
    if(this.value =='请输入网址........'){
        this.value='';
    }

    //将文本框颜色变为黑色
    this.style.color = '#333';
}

//3. 注册事件，失去焦点
text.onblur = function(){
    if(this.value==''){
        this.value ='请输入网址........';
    }

    this.style.color = '#999';
}

text.addEventListener('keyup', function(){
    if(text.value.indexOf("www.")==0){
        text.name='';
        document.querySelector('form').action = "http://"+text.value;
    }else{
        text.name='wd';
        document.querySelector('form').action ="https://www.baidu.com/s";
    }
})