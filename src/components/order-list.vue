<template>
    <div class="container order-container">
        <div class="con" id="wrapper">
            <ul>
                <li>
                    <p>王双双   138****2480</p>
                    <p>上海市杨浦区五角场街道武东路198号 财大科技园12层</p>
                </li>
                <div class="title">订单信息</div>
                <li v-for="(item, index) in shopList">
                    <div class="con-img"><img :src="item.img"></div>
                    <div class="con-detail">
                        <p>{{item.detail}}</p>
                        <p>颜色：白色；尺寸：XXL</p>
                        <p>{{item.num*item.price | formatMoney}}</p>
                        <p>× {{item.num}}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>商品合计</p>
                        <p>运费</p>
                    </div>
                    <div>
                        <p>¥256.00</p>
                        <p>¥128.00</p>
                    </div>      
                </li>
            </ul>
        </div>
        <footer>
            <span>总计：{{totalMoney | formatMoney}}</span><span>确认付款</span>
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