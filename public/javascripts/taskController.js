/**
 * Created by ASUS on 2017/4/21.
 */
Vue.component('layout', {
    template: '<div class="flex-box"> <div class="nav"> <a id="currentGame" href="/" class="nav-item-big">沉迷游戏 </a> <a id="projects" href="/task" class="nav-item">项目总览 </a> </div> </div>'
});
var path = 'localhost:14929';
var vm = new Vue({
    el: '#taskApp',
    data:{

    },
    mounted: function(){

    }
});