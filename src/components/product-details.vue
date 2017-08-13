<template>
    <div class="container product-details-container">
        <div id="focus" class="focus">
            <div class="hd">
                <ul></ul>
            </div>
            <div class="bd">
                <ul>
                    <li>
                        <a href="#"><img _src="http://placehold.it/750x500"/ src="../img/loading.gif"></a>
                    </li>
                    <li>
                        <a href="#"><img _src="http://placehold.it/750x500"/ src="../img/loading.gif"></a>
                    </li>
                    <li>
                        <a href="#"><img _src="http://placehold.it/750x500"/ src="../img/loading.gif"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="trade_box">
            <div class="trade_title">
                <p class="title">马马马马马马马马 马马马马马马马马马</p>
                <p class="trade_name">马马马马马马马马 马马马马马马马马马 马马马马马马马马 马马马马马马马马马 马马马马马马马马 马马马马马马马马马</p>
                <p class="price">￥628.00</p>
            </div>
            <div class="t_option">
                <div class="t_size" @click="ScaleSize">
                    <span  v-text='Choice'></span>
                    <span v-else='show' v-text='myChoice'></span>
                    <i class="entrance_icon"></i>
                </div>
                <div class="parameter" @click="ViewParameters"><span>产品参数</span><i class="entrance_icon"></i></div>
            </div>
        </div>
        <div class="t_details clearfix">
            <p class="details_tit"><span>商品详情</span></p>
            <img src="http://placehold.it/170x170" width="100%">
            <img src="http://placehold.it/170x170" width="100%">
            <img src="http://placehold.it/170x170" width="100%">
            <img src="http://placehold.it/170x170" width="100%">
            <img src="http://placehold.it/170x170" width="100%">
        </div>
        <div class="t_bottom menu">
            <div class="shopping_cart">
                <a href="#">
                <i><span v-if="sopCar">{{sopCar}}</span></i>
                <p>购物车</p></a>
            </div>
            <div class="add_cart" @click="add_cart">加入购物车</div>
            <div class="purchase">立即购买</div>
        </div>
        <div class="Scale_modal" @click="close" @touchmove.prevent :class={modal_show:modal_show,bg:!isactive}>
            <div class="dv animated" @click="noclose($event)" :class="{fadeInDownBig:isactive,fadeInUpBig:!isactive}">
                <div class="parameter_select">
                    <div class="logo"><img src="http://placehold.it/127x127"></div>
                    <p class="merchandise_news">￥<span class="cost" >{{finalPrice}}</span>
                        <br/><span class="inventory" ><span v-text='inventory'>1345</span></span>
                        <br/>
                        <span class="at_present" v-if='show' v-text='Choice'></span>
                        <span class="at_present" v-else='show' v-text='myChoice'></span>
                    </p>
                </div>
                <div id="wrapper" class="size_select">
                    <div class="scroll_box">
                        <div>
                            <!-- 商品选择 -->
                            <div class="standard" v-for="(num,item) in select">
                                <p class="standard_tit">{{item.title}}</p>
                                <ul class="standard_list clearfix">
                                    <li v-for="(index,item1) in item.select1" :class="{select_on : sortId[num] == index}" @tap="check(num,index,item1.content,item1.inventory,item1.price)">{{item1.content}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="quantity">
                            <p>购买数量</p>
                            <div class="compute clearfix">
                                <div class="prep" @tap=prep()>-</div>
                                <div class="price">
                                    <input type="" name="" value="1" readonly="readonly" v-model='piece'>
                                </div>
                                <div class="plus" @tap=plus()>+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="affirm" @click="close">完成</div>
            </div>
        </div>
        <div class="Parameters_modal" @click="close" @touchmove.prevent :class={modal_show:modal1_show,bg:!isactive}>
            <div class="dv animated" @click="noclose($event)" :class="{fadeInDownBig:isactive,fadeInUpBig:!isactive}">
                <div class="p_top">产品参数</div>
                <div class="p_middle" id="wrapper1">
                    <ul>
                        <li v-for="item in parameter"><span class="taxon">{{item.name}}</span><span class="text">{{item.price}}</span></li>
                    </ul>
                </div>
                <div class="affirm" @click="close">完成</div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">


</style>

<script type="text/javascript">
import '../js/lib/TouchSlide.1.1.js';

    var select = [{
        title: "请选择规格",
        id: "0",
        select1: [{
            content: '30ml',price:'200.1',inventory:'1300'
        }, {
            content: '60ml',price:'400.2',inventory:'200'
        }, {
            content: '90ml',price:'600.3',inventory:'500'
        }, {
            content: '150ml',price:'1000.4',inventory:'800'
        }, {
            content: '200ml',price:'1400.5',inventory:'1300'
        }]
    }];
    var parameter=[
        {name:"品种",price:"化妆品/面霜"},
        {name:"期限使用",price:"2016-12-10至2020-12-10"},
        {name:"化妆品净含量",price:"30ml 60ml 100ml"},
        {name:"品牌",price:"海蓝之谜"},
        {name:"产品",price:"美国"},
        {name:"是否进口",price:"进口"}
    ]
    var myChoice=['已选择'];

module.exports = {
    data: function(){
        return {
            show:true,
            iscur: 0,
            iscur1: 0,
            sortId: [],
            Choice:'请选择',
            myChoice:'',
            inventory:'请选择规格',//库存
            price:[],
            piece:1,//商品件数
            sopCar:0,
            isactive: true,
            modal_show: false,
            modal1_show: false,
            select: select,
            parameter:parameter
        }
    },
    init: function(){
        console.log('init');
        console.log('deviceid: ' + this.$route.params.deviceId);
        console.log('dataId: ' + this.$route.params.dataId);
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
        console.log('this.select',this.select);
    },
        methods: {
            // 商品选择弹窗
            ScaleSize: function() {
                this.scroll = false;
                this.modal_show = true;
                this.isactive = false;
                this.da = true;
                // var myScroll = new IScroll('#wrapper', {
                //     mouseWheel: true,
                //     scrollbars: false,
                //     tap: true
                // });
            },
            // 关闭弹窗
            close: function() {
                var _this = this;
                this.isactive = true;
                setTimeout(function() {
                    _this.modal_show = false;
                    _this.modal1_show = false;
                }, 300)
            },
            // 不关闭弹窗，禁止冒泡
            noclose($event) {
                event.cancelBubble = true;
            },
            // 打开商品参数弹窗
            ViewParameters: function() {
                this.scroll = false;
                this.modal1_show = true;
                this.isactive = false;
                this.da = true;
                // this.isA=true;
                // var myScroll1 = new IScroll('#wrapper1', {
                //     mouseWheel: true,
                //     scrollbars: false,
                //     tap:true
                // });
            },
            // 选择商品事件
            check: function(id,index,ddi,unv,price) {
                var _this = this;
                Vue.set(_this.sortId, id, index);
                myChoice[id+1]=ddi;
                choice[id+1]='';
                this.Choice=choice.join(" ");

                var num=0;
                for(var i=0;i<choice.length;i++){
                    if(i>0){
                        num+=choice[i].length;
                    }
                }
                this.show=num;
                // console.log(Boolean(num))
                this.myChoice=myChoice.join(" ");
                console.log(this.Choice);
                this.inventory=unv;
                // this.price=;
                console.log(this.sortId);
                // 价格
                // this.price[id]=price;
                Vue.set(_this.price, id, price)
                console.log(this.price)
            },
            add_cart:function(){
                console.log(myChoice.length,select.length)
                if(myChoice.length==select.length+1){
                    this.sopCar++;
                }else{
                    this.ScaleSize()
                }

            },
            // 减
            prep:function(){
                if(this.piece>1){
                    this.piece--;
                }

                // console.log(this.piece);
            },
            // 加
            plus:function(){
                this.piece++;
            },
            init:function(){
                var _this=this;
                console.log(this.sortId);
                for(var i=0;i<select.length;i++){
                    choice.push(select[i].title);
                }
                this.Choice=choice.join(" ")
                Vue.set(_this.price, 0, select[0].select1[0].price)
            }
        },
        computed: {
            finalPrice: function () {
                var num=0;
                for(var i=0;i<this.price.length;i++){
                    num+= parseFloat(this.price[i])
                }
                return num;

            }
        }
}
</script>