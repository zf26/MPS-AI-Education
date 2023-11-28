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
    background-color:rgba(120, 247, 247, 0.6);
    justify-content: center;
    z-index: 2;
}
.Head_Navigation div{
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    line-height: 50px;
    width: 200px;
    height: 50px;
    transition: all .5s; 
    overflow: hidden;
}
.Head_Navigation div:nth-child(2):hover,.Head_Navigation div:nth-child(5):hover{
    background-color: #79cffa;
    height: 200px;
}
.Down_Menu{
    margin: 0px;
    padding-inline-start: 0px;
    list-style: none;
    background-color:#79cffa;
    transition: all .5s; 
}
.Way:hover .Down_Menu{
    display: block;
}
.Down_Menu li{
    width: 200px;
}
.Down_Menu li:hover{
    background-color: rgba(120, 247, 247, 0.6);
}
</style>