<template>
    <div class="container manage_address-container">
        <ul class="address_list">
            <li>
                <div class="name">
                    <div>张海涛</div>
                    <div>13745623456</div>
                </div>
                <div class="address_default">上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融</div>
                <div class="text">
                    <div class="left">
                        <div>

                            <input id="btn_default" class="d-x-f" type="radio" name="theWay" value="1">
                            <label for="btn_default"></label>
 
 <span>[默认地址]</span>                       </div>
                        <div></div>
                    </div>
                    <div class="right">
                        <div>
                            <img src="../img/text.png"> 编辑
                        </div>
                        <div>
                            <img src="../img/delete.png"> 删除
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="name">
                    <div>张海涛</div>
                    <div>13745623456</div>
                </div>
                <div class="address_default">上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融</div>
                <div class="text">
                    <div class="left">
                        <div>

                            <input id="btn_default_2" class="d-x-f" type="radio" name="theWay" value="2">
                            <label for="btn_default_2"></label>
                            <span>[默认地址]</span>
                        </div>
                        <div></div>
                    </div>
                    <div class="right">
                        <div>
                            <img src="../img/text.png">
                        </div>
                        <div>
                            <img src="../img/delete.png">
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="name">
                    <div>张海涛</div>
                    <div>13745623456</div>
                </div>
                <div class="address_default">上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融上海上海市杨浦区五角场街道武东路 198号财大科技园12层 东方金融</div>
                <div class="text">
                    <div class="left">
                        <div>

                            <input id="btn_default_3" class="d-x-f" type="radio" name="theWay" value="3">
                            <label for="btn_default_3"></label>
                            <span>[默认地址]</span>
                        </div>
                        <div></div>
                    </div>
                    <div class="right">
                        <div>
                            <img src="../img/text.png">
                        </div>
                        <div>
                            <img src="../img/delete.png">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="sass">


</style>

<script type="text/javascript">

module.exports = {
    data: function(){
        return {
            nameInp: '王双双',
            phoneInp: '13818895422',
            addressInp: '上海  上海市  杨浦区',
            detailInp: '五角场街道 武东路198号财大科技园12层 东方金融',
            showDefault: false
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
        
    },
    methods: {
       test: function(){
            console.log(this.nameInp);
        }
    },
    mounted:function(){
        
    }
}
</script>