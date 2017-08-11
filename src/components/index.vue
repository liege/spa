<template>
    <div class="container index-container">
        <div id="focus" class="focus">
            <div class="hd">
                <ul></ul>
            </div>
            <div class="bd">
                <ul>
                    <li>
                        <a href="#"><img _src="http://placehold.it/750x360"/ src="../img/loading.gif"></a>
                    </li>
                    <li>
                        <a href="#"><img _src="http://placehold.it/750x360"/ src="../img/loading.gif"></a>
                    </li>
                    <li>
                        <a href="#"><img _src="http://placehold.it/750x360"/ src="../img/loading.gif"></a>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="sort">
            <li v-link="{ name: 'product-list', params: { deviceId: 123, dataId:456 }}">
                <a href="javascript:;"><img src="http://placehold.it/100x100" alt=""></a>
                <div class="title">进口食品</div>
            </li>
            <li>
                <a href="javascript:;"><img src="http://placehold.it/100x100" alt=""></a>
                <div class="title">数码家电</div>
            </li>
            <li>
                <a href="javascript:;"><img src="http://placehold.it/100x100" alt=""></a>
                <div class="title">有线订购</div>
            </li>
            <li>
                <a href="javascript:;"><img src="http://placehold.it/100x100" alt=""></a>
                <div class="title">知言学习</div>
            </li>
        </ul>
        <ul class="hot">
            <li>
                <a href="javascript:;"><img src="http://placehold.it/750x290" alt=""></a>
                <div class="add"><span class="icon icon-addcart"></span></div>
            </li>            
            <li>
                <a href="javascript:;"><img src="http://placehold.it/750x290" alt=""></a>
                <div class="add"><span class="icon icon-addcart"></span></div>
            </li>
        </ul>
        <ul class="menu">
            <li>
                <a href="javascript:;"><span class="icon icon-index"></span></a>
                <div class="title">首页</div>
            </li>
            <li>
                <a href="javascript:;"><span class="icon icon-cart"></span></a>
                <div class="title">购物车</div>
            </li>
            <li>
                <a href="javascript:;"><span class="icon icon-order"></span></a>
                <div class="title">我的订单</div>
            </li>
        </ul>
    </div>
</template>

<style lang="sass">


</style>

<script type="text/javascript">
import '../js/lib/TouchSlide.1.1.js';


module.exports = {
    init: function(){
        console.log('init');
    },
    ready: function(){
        TouchSlide({
            slideCell: "#focus",
            mainCell: ".bd ul",
            titCell: ".hd ul",
            effect: "left",
            autoPlay: true, //自动播放
            autoPage: true, //自动分页
            switchLoad: "_src" //切换加载，真实图片路径为"_src"
        });
    }
}
</script>