<template>
    <div class="container edit-address-container">
        <div class="title">
            <span @click="test">编辑收货地址</span><img src="../img/icon_plus.png">
        </div>
        <div class="con">
            <input type="text" name="" v-model="nameInp" placeholder="">
            <input type="text" name="" v-model="phoneInp">
            <input type="text" name="" v-model="addressInp">
            <textarea v-model="detailInp" placeholder=""></textarea>
        </div>
        <footer>
            <div>设置为默认地址</div>
            <div class="on-off" :class="{'on-off-active': showDefault}" @click="showDefault = !showDefault">
            </div>
        </footer>
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