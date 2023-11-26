<template>
    <div class="topNav">
        <div class="Head_Navigation">
        <div>首页</div>
        <div class="Way">人工智能
            <ul class="Down_Menu">
            <li>人工智能</li>
            <li>人工智能</li>
            <li>人工智能</li>   
           </ul></div>
        <div>人工智能</div>
        <div>人工智能</div>
        <div class="Way">人工智能
            <ul class="Down_Menu">
                <li>人工智能</li>
                <li>人工智能</li>
                <li>人工智能</li>   
               </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Head_Navigation{
    position: relative;
    display: flex;
    margin-top: 80px;
    height: 50px;
    width: 100%;
    background-color:rgb(250,235 ,215,.6);
    justify-content: center;
    z-index: 2;
}
.Head_Navigation div{
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    line-height: 50px;
    width: 150px;
    height: 50px;
    transition: all .5s; 
}
.avater{
    z-index: 1;
    right: 15%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.avater img{
    width: 110%;
    border-radius: 50%;
}
.tc{
    display: none;
    border: 2px solid gray;
    border-radius: 5px;
    line-height: 30px;
    width: 100px;
    color: gray;
    cursor: pointer;
}
.tc li:hover{
   background-color: ghostwhite;
}
.avater:hover .tc{
   display: block;
}
.name{
    transform: translateX(20px);
    line-height: 50px;
    font-size: 16px;
    color: gray;
    cursor: pointer;
}
.Head_Navigation a{
    color:black; 
}
.Head_Navigation div:hover{
    background-color: #c8adc4;
}
.Down_Menu{
    display: none;
    list-style: none;
}
.Way:hover .Down_Menu{
    display: block;
}
.Down_Menu{
    position: absolute;
    background-color:rgb(250,235 ,215);
}
.Down_Menu li{
    width: 150px;
}
.Down_Menu li:hover{
    background-color: #c8adc4;
}
</style>