<template>
    <div class="container cart-container">
        <div class="title">
            <span>购物车({{totalNum}})</span>
        </div>
        <div class="con" id="wrapper">
            <ul>
                <li v-for="(index,item) in shopList">
                    <div class="chek" :class="{'cheked': item.checked}" @tap="chooseShop(item)"></div>
                    <div class="con-img"><img :src="item.img"></div>
                    <div class="con-detail">
                        <p>{{item.detail}}</p>
                        <p>{{item.num*item.price | formatMoney}}</p>
                        <div class="num-con">
                            <span @tap="changeMoney(item, -1)">-</span><span>{{item.num}}</span><span @tap="changeMoney(item, 1)">+</span>
                        </div>
                    </div>
                </li>
                <li></li>
            </ul>
        </div>
        <footer>
            <span>总计：{{totalMoney | formatMoney}}</span><span>去结算({{totalCheckNum}})</span>
        </footer>
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