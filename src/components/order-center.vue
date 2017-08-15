<template>
    <div class="container order-center-container">
        <header>
            <div class="avater"><img src="http://placehold.it/160x160" alt=""></div>
        </header>
        <div class="order">
            <div class="title">我的订单<span class="more">查看全部订单</span><i class="entrance_icon"></i></div>
            <ul class="order-status">
                <li v-link="{ name: 'product-list', params: { deviceId: 123, dataId:456 }}">
                    <a href="javascript:;"><img src="../img/icon-dfk.png" alt=""></a>
                    <div class="title">待付款</div>
                </li>
                <li>
                    <a href="javascript:;"><img src="../img/icon-dfh.png" alt=""></a>
                    <div class="title">待发货</div>
                </li>
                <li>
                    <a href="javascript:;"><img src="../img/icon-dsh.png" alt=""></a>
                    <div class="title">待收货</div>
                </li>
                <li>
                    <a href="javascript:;"><img src="../img/icon-ywc.png" alt=""></a>
                    <div class="title">已完成</div>
                </li>
            </ul>
        </div>
        <div class="service">
            <div class="title">客户服务</div>
            <div>
                <i class="icon icon-address"></i>收货地址<i class="entrance_icon"></i>
            </div>
            <div>
                <a href="tel:4007280800"><i class="icon icon-call"></i>客服咨询 <i class="entrance_icon"></i></a>
            </div>
        </div>
    </div>
</template>

<style lang="sass">


</style>

<script type="text/javascript">

module.exports = {
    data: function(){
        return {
                totalMoney: 0,
                totalCheckNum: 0,
                shopList:[
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 1},
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 2},
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 3},
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 4},
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 5},
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 6},
                    {img: "http://placehold.it/750x360", detail: "澳洲进口奶粉 德运 Devondale脱脂成人奶粉 1kg", price: "4900", num: 7}
                ],
                chooseList:[]
        }
    },
    init: function(){
        console.log('init');
        console.log('deviceid: ' + this.$route.params.deviceId);
        console.log('dataId: ' + this.$route.params.dataId);
    },
    ready: function(){
        console.log('this.select',this.select);
    },
    filters: {
        formatMoney:function (value) {
            var number = parseInt(value);
            return "￥"+(number/100).toFixed(2);
        }
    },
    computed: {
        totalNum: function(){
            return this.shopList.length;
        }
    },
    methods: {
        chooseShop: function (item) {
            if(typeof item.checked == "undefined"){
                this.$set(item, "checked", true);
            }else{
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        changeMoney: function(product, way){
            if(way>0){
                product.num++;
            }
            if(way<0){
                if(product.num == 1){
                    this.delShop(product);
                }else{
                    product.num--; 
                }
            }
            this.calcTotalPrice();
        },
        calcTotalPrice: function(){
            this.totalMoney = 0;
            this.totalCheckNum = 0;
            var _this = this;
            this.shopList.forEach(function(item, index){
                if(item.checked){
                    _this.totalMoney += item.price * item.num;
                    _this.totalCheckNum += item.num;
                }
            });
        },
        delShop: function(product){
            var index = this.shopList.indexOf(product);
            var _this = this;
            _this.shopList.splice(index, 1);
        }
    },
    mounted:function(){
        var myScroll = new IScroll('#wrapper',{
            mouseWheel: true,
            //scrollbars: true,
            tap:true
        });
        this.totalNum = this.shopList.length;
    }
}
</script>