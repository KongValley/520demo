'use strict'
/*
 * @Author: Chara
 * @Date: 2019-05-20
 * @LastEditors: Chara
 * @LastEditTime: 2019-08-07 20:48:10
 * @Description: 
 */
!function(){
    let duration = 10
    $('.buttonList').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 80
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix,code,fn){
        let domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        domCode.innerHTML = prefix || ''
        let n = 0
        let timer = setTimeout(function run(){
            n = n+1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
            domCode.scrollTop = domCode.scrollHeight
            styleTag.innerHTML = prefix + code.substring(0,n)
            if(n < code.length){
                timer = setTimeout(run,duration)
            }
        },duration)
    }
    
    let code = `
/* 先给 🎁 加上点背景 */
* {
    transition: all 1s;
}
.preview{
    display:flex;
    height: 100%;
    justify-content:center;
    align-items:center;
    background-color: #ffecce;
}
.wrapper{
    width:100%;
    display:flex;
    height: 100%;
    justify-content:center;
    align-items:center;
    position: relative;
}
/* 给 🎁 定个轮廓 */
.heart {
    position:relative;
    width: 100px;
    height: 100px;
    background-color: tomato;
}

/* 给 🎁 加上两个翅膀 */
/* 上面一个 */
.heart:before {
    content: "";
    position:absolute;
    top: -50px;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: blue;
}

/* 下面一个 */
.heart:after{
    content: "";
    position: absolute;
    top: 0px;
    left: 50px;
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 50%;
}

/* 巴拉巴拉变个色 */
.heart:before {
    background-color: tomato;
}
.heart:after{
    background-color: tomato;
}

/* 我把我的心送你啰 */
.heart {
    transform: rotate(-45deg);
}

/* Done~，完成啦 */
/* 七夕快乐 😀 */
`
    writeCode('',code)
}.call()
