// Template for Home Tab
const Home = { 
    inject: ['connected', 'ros', 'ws_address', 'logs', 'loading', 'topic', 'message'],
    
    template: `
    <div class="card">
    <div class="class-body">
    <div class="col">
        <h3 class="card-title">Log Messages</h3>
        <div class="log-messages" style="max-height:200px; overflow:auto;">
            <p v-for="log in logs">{{ log }}</p>
        </div>
    </div>
    </div>
    </div>`
    
}


// Template for Action Tab
const Actions = { 
    data() {
        return {
          topic: null,
          message: null,
        };
    },
    inject: ['connected', 'ros', 'ws_address', 'logs', 'loading'],

    template:`
    <div class="row">
        <div class="col-md-12 text-center">
            <h5>Commands</h5>
        </div>

        <!-- 1st row -->
        <div class="col-md-4 text-center">
            <button @click="close" :disabled="loading || !connected" class="btn btn-primary">Close</button>
        </div>
        <div class="col-md-4 text-center">
            <button @click="forward" :disabled="loading || !connected" class="btn btn-primary">Go forward</button>
            <br><br>
        </div>
        <div class="col-md-4 text-center">
            <button @click="wave" :disabled="loading || !connected" class="btn btn-primary">Wave!</button>
        </div>
    

        <!-- 2nd row -->
        <div class="col-md-4 text-center">
            <button @click="left" :disabled="loading || !connected" class="btn btn-primary">Turn left</button>
        </div>
        <div class="col-md-4 text-center">
            <button @click="stop" :disabled="loading || !connected" class="btn btn-danger">Stop</button>
            <br><br>
        </div>
        <div class="col-md-4 text-center">
            <button @click="right" :disabled="loading || !connected" class="btn btn-primary">Turn right</button>
        </div>

        <!-- 3rd row -->
        <div class="col-md-4 text-center">
            <button @click="reach_max" :disabled="loading || !connected" class="btn btn-primary">Reach Max</button>
        </div>
        <div class="col-md-4 text-center">
            <button @click="backward" :disabled="loading || !connected" class="btn btn-primary">Go backward</button>
        </div>
        <div class="col-md-4 text-center">
            <button @click="home" :disabled="loading || !connected" class="btn btn-primary">Home</button>
        </div>
    </div>`,

    methods: {
        playMotion: function(){
            this.topic = new ROSLIB.Topic({
                ros: this.ros,
                name: '/play_motion/goal',
                messageType: 'play_motion_msgs/PlayMotionActionGoal'
            })
          },
    
          wave: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'wave',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },
    
          close: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'close',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },
    
          home: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'home',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },
    
          reach_max: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'reach_max',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },
    
    
    
    
          //Functions for Robot Movement
    
          twist: function(){
            this.topic = new ROSLIB.Topic({
                ros: this.ros,
                name: '/mobile_base_controller/cmd_vel',
                messageType: 'geometry_msgs/Twist'
            })
          },
    
          forward: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 1, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 0 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          backward: function(){
            this.message = new ROSLIB.Message({
                linear: { x : -1, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 0 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          right: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 0, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : -0.5 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          left: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 0, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 0.5 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          stop: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 0, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 0 }
            })
            this.twist()
            this.topic.publish(this.message)
          }
    }
    
}

const Create = { template: '<div>Home Page Content</div>'}
const Help = { template: '<div>Home Page Content</div>'}


const routes = [
    { path: '/', component: Home },
    { path: '/actions', component: Actions },
    { path: '/create', component: Create },
    { path: '/help', component: Help }
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  })

const app = Vue.createApp({
    data() {
      return {
        connected: false,
        ros: null,
        ws_address: 'ws://127.0.0.1:9090',
        logs: [],
        loading: false,
        topic: null,
        message: null,
      };
    },
    provide() {
        return{
            connected: Vue.computed(() => this.connected),
            ros: Vue.computed(() => this.ros),
            ws_address: Vue.computed(() => this.ws_address),
            logs: Vue.computed(() => this.logs),
            loading: Vue.computed(() => this.loading),
            topic: Vue.computed(() => this.topic),
            message: Vue.computed(() => this.message),
        };
    },
    methods: {
      connect : function() {
        this.loading = true
        console.log('Connect to rosbridge server!');
        this.ros = new ROSLIB.Ros({
            url: this.ws_address
        });
        this.ros.on('connection', () => {
            this.logs.unshift((new Date()).toTimeString() + ' - Connected!')
            this.connected = true
            this.loading = false
            console.log('Connected to websocket server.');
        });
        this.ros.on('error', (error) => {
            this.logs.unshift((new Date()).toTimeString() + ' - Error: $(error)')
            console.log('Error connecting to websocket server: ', error);
        });
        this.ros.on('close', () => {
            this.logs.unshift((new Date()).toTimeString() + ' - Disconnected!')
            this.connected = false
            this.loading = false
            console.log('Connection to websocket server closed.');
        });
      },

      disconnect: function() {
        this.ros.close()
      },

    },

  });

  app.use(router)
  
  app.mount('#app');
  

















// var app = new Vue({
//     el: '#app',
//     data: {
//         connected: false,
//         ros: null,
//         ws_address: 'ws://127.0.0.1:9090'
//     },

//     methods: {
//         connect: function() {
//             console.log('Connect to rosbridge server!')
//             this.ros = new ROSLIB.Ros({
//                 url : this.ws_address
//             })
//             this.ros.on('connection', () => {
//                 console.log('Connected to websocket server.');
//             })
        
//             this.ros.on('connection', (error) => {
//                 console.log('Error connecting to websocket server: ', error);
//             })
        
//             this.ros.on('close', () => {
//                 console.log('Connection to websocket server closed.');
//             })
//         },
//     },
// })