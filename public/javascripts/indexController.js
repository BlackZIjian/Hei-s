/**
 * Created by ASUS on 2017/4/16.
 */
Vue.component('layout', {
    template: '<div class="flex-box"> <div class="nav"> <a id="currentGame" href="/" class="nav-item-big">沉迷游戏 </a> <a id="projects" href="/task" class="nav-item">项目总览 </a> </div> </div>'
});
var path = 'localhost:14929';
var vm = new Vue({
    el: '#indexApp',
    data:{
        currentGame:{
            name:'',
            video_url:'',
            url:'',
            description:''
        }
    },
    mounted: function(){
            axios.get('http://localhost:14929/getCurrentGame')
                .then(function (response) {
                    vm.$data.currentGame = response.data;
                    var currentGame = vm.$data.currentGame;
                    console.log(JSON.stringify(currentGame));
                    vm.$refs.currentGameVideo.src = currentGame.video_url;
                    vm.$refs.currentGameVideo.play();
                })
                .catch(function (error) {
                    console.log(error);
                });

    }
});