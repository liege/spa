<template>
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> -->
   <router-view keep-alive></router-view>
</template>

<script>
// style
import 'baseStyle';
import 'layoutStyle';
import 'commonStyle';
import '../js/lib/hotcss.js';

// javascript
// import 'jquery';


var $ = window.$;

module.exports = {
  	init: function(){
  		console.log('init');
  	},
  	ready: function(){

  	}
}

</script>

