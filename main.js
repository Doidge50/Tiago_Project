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
    <div class="container">
    <!-- Outer Actions -->
      <div class="row justify-content-center">
        <!-- Left Column Actions -->
        <div class="col justify-content-center"></div>
        <div class="col justify-content-center">
          <button @click="wave" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Wave</button>
          <button @click="shake_hands" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Shake Hands</button>
          <button @click="pinch_hand" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Pinch Hand</button>
          <button @click="prepare_grasp" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Prepare Grasp</button>
          <button @click="do_weights" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Do Weights</button>

        </div>
        <div class="col justify-content-center mr-2">
          <button @click="thumb_up_hand" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Thumbs Up</button>
          <button @click="point" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Point</button>
          <button @click="offer" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Offer</button>
          <button @click="pregrasp_weight" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Grasp Weight</button>
          <button @click="pick_from_floor" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">PickUp</button>
        </div>
  
        <!-- Middle Movement and Main Action -->
        <div class="card mr-2 ml-1">
          <div class="card-body text-center">
            <h4 class="card-title">Movement</h4>
            <br><br>
            <div class="container">
              <div class="row justify-content-center mb-2">
                <div class="col justify-content-center mx-1">
                  <button @click="forwardLeft" :disabled="loading || !connected" class="btn btn-secondary btn-block" style ="width: 100px; height: 100px;">Forward Left</button>
                </div>
                <div class="col justify-content-center mx-1">
                  <button @click="forward" :disabled="loading || !connected" class="btn btn-secondary btn-block mb-2" style ="width: 100px; height: 100px;">Go Forward</button>
                </div>
                <div class="col justify-content-center mx-1">
                  <button @click="forwardRight" :disabled="loading || !connected" class="btn btn-secondary btn-block" style ="width: 100px; height: 100px;">Forward Right</button>
                </div>
              </div>


              <div class="row justify-content-center mb-2">
                <div class="col justify-content-center mx-1">
                  <button @click="left" :disabled="loading || !connected" class="btn btn-secondary btn-block" style ="width: 100px; height: 100px;">Turn Left</button>
                </div>
                <div class="col justify-content-center mx-1">
                  <button @click="stop" :disabled="loading || !connected" class="btn btn-secondary btn-block mb-2" style ="width: 100px; height: 100px;">Stop</button>
                </div>
                <div class="col justify-content-center mx-1">
                  <button @click="right" :disabled="loading || !connected" class="btn btn-secondary btn-block" style ="width: 100px; height: 100px;">Turn Right</button>
                </div>
              </div>
              <div class="row justify-content-center mb-2">
                <div class="col justify-content-center mx-1">
                  <button @click="backwardLeft" :disabled="loading || !connected" class="btn btn-secondary btn-block" style ="width: 100px; height: 100px;">Backward Left</button>
                </div>
                <div class="col justify-content-center mx-1">
                  <button @click="backward" :disabled="loading || !connected" class="btn btn-secondary btn-block mb-2" style ="width: 100px; height: 100px;">Go Backward</button>
                </div>
                <div class="col justify-content-center mx-1">
                  <button @click="backwardRight" :disabled="loading || !connected" class="btn btn-secondary btn-block" style ="width: 100px; height: 100px;">Backward Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      <div class="col justify-content-center mr-1">
        <button @click="close" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Close Fist</button>
        <button @click="close_half" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Half Close</button>
        <button @click="reach_max" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Reach Up</button>
        <button @click="head_tour" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Head Tour</button>
        <button @click="home" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">RESET</button>
        <!-- ... other buttons -->
      </div>
      <div class="col justify-content-center mr-1">
      <button @click="open" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Open Fist</button>
      <button @click="gun_hand" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Finger Gun</button>
      <button @click="reach_floor" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Reach Floor</button>
      <button @click="inspect_surroundings" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Inspect</button>
      <button @click="unfold_arm" :disabled="loading || !connected" class="btn btn-primary btn-block mb-2" style ="width: 100px; height: 100px;">Unfold Arm</button>
      <!-- ... other buttons -->
      </div>
      <div class="col justify-content-center"></div>
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

          close_half: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'close_half',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          do_weights: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'do_weights',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          gun_hand: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'gun_hand',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          head_tour: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'head_tour',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          inspect_surroundings: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'inspect_surroundings',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          offer: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'offer',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          open: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'open',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          pick_from_floor: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'pick_from_floor',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          pinch_hand: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'pinch_hand',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          point: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'point',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          pregrasp_weight: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'pregrasp_weight',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          prepare_grasp: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'prepare_grasp',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          reach_floor: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'reach_floor',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          shake_hands: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'shake_hands',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          thumb_up_hand: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'thumb_up_hand',  // Name of Predefined Action
                    skip_planning: false
                }
            })
            this.playMotion()
            this.topic.publish(this.message)
          },

          unfold_arm: function(){
            this.message = new ROSLIB.Message({
                goal: {
                    motion_name: 'unfold_arm',  // Name of Predefined Action
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
                linear: { x : 5, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 0 }
            })
            this.twist()
            this.topic.publish(this.message)
          },

          forwardRight: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 5, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : -1.6}
            })
            this.twist()
            this.topic.publish(this.message)
          },

          forwardLeft: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 5, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 1.6 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          backward: function(){
            this.message = new ROSLIB.Message({
                linear: { x : -5, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 0 }
            })
            this.twist()
            this.topic.publish(this.message)
          },

          backwardRight: function(){
            this.message = new ROSLIB.Message({
                linear: { x : -5, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : -1.6 }
            })
            this.twist()
            this.topic.publish(this.message)
          },

          backwardLeft: function(){
            this.message = new ROSLIB.Message({
                linear: { x : -5, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 1.6 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          right: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 0, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : -1.6 }
            })
            this.twist()
            this.topic.publish(this.message)
          },
    
          left: function(){
            this.message = new ROSLIB.Message({
                linear: { x : 0, y : 0, z : 0 },
                angular: { x: 0, y : 0, z : 1.6 }
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

const Joints = { 
  data() {
    return {
      topic: null,
      message: null,
      armControlActionClient: null,

    };
},

inject: ['connected', 'ros', 'ws_address', 'logs', 'loading', 'urdfModel', 'jointStateListener', 'jointPositions'],

template:
`
  <div class="container mt-5">
          <div class="row">
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title text-center">Arm</h5>
                          <div class="slider-container">
                              <label for="armJoint1">Shoulder Horizontal (arm_1_joint)</label>
                              <input type="text" class="form-control" id="armJoint1" readonly :value="armJoint1Position">
                              <label for="armJoint2">Shoulder Vertical (arm_2_joint)</label>
                              <input type="text" class="form-control" id="armJoint2" readonly :value="armJoint2Position">
                              <label for="armJoint3">Elbow Twist (arm_3_joint)</label>
                              <input type="text" class="form-control" id="armJoint3" readonly :value="armJoint3Position">
                              <label for="armJoint4">Elbow Bend (arm_4_joint)</label>
                              <input type="text" class="form-control" id="armJoint4" readonly :value="armJoint4Position">
                              <label for="armJoint5">Wrist Twist (arm_5_joint)</label>
                              <input type="text" class="form-control" id="armJoint5" readonly :value="armJoint5Position">
                              <label for="armJoint6">Wrist Twist (arm_6_joint)</label>
                              <input type="text" class="form-control" id="armJoint6" readonly :value="armJoint6Position">
                              <label for="armJoint7">Hand Twist (arm_7_joint)</label>
                              <input type="text" class="form-control" id="armJoint7" readonly :value="armJoint7Position">
                              <br>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="card mb-3">
                      <div class="card-body">
                          <h5 class="card-title text-center">Head & Torso</h5>
                          <div class="slider-container">
                              <label for="headJoint1">Head Twist (head_1_joint)</label>
                              <input type="text" class="form-control" id="headJoint1" readonly :value="headJoint1Position">
                              <label for="headJoint2">Head Bend (head_2_joint)</label>
                              <input type="text" class="form-control" id="headJoint2" readonly :value="headJoint2Position">
                              <label for="torsoJoint">Torso Height (torso_lift_joint)</label>
                              <input type="text" class="form-control" id="torsoJoint" readonly :value="torsoPosition">
                          </div>
                      </div>
                  </div>
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title text-center">Hand</h5>
                          <div class="slider-container">
                              <label for="handIndex">Index Finger (hand_index_joint)</label>
                              <input type="text" class="form-control" id="handIndex" readonly :value="handIndexPosition">
                              <label for="handOther">Index Finger (hand_mrl_joint)</label>
                              <input type="text" class="form-control" id="handOther" readonly :value="handOtherPosition">
                              <label for="handThumb">Index Finger (hand_thumb_joint)</label>
                              <input type="text" class="form-control" id="handThumb" readonly :value="handThumbPosition">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         
      </div>
  `,

  computed: {
    // Arm
    armJoint1Position() {
      return this.jointPositions['arm_1_joint']?.toFixed(2) || 0;
    },
    armJoint2Position() {
      return this.jointPositions['arm_2_joint']?.toFixed(2) || 0;
    },
    armJoint3Position() {
      return this.jointPositions['arm_3_joint']?.toFixed(2) || 0;
    },
    armJoint4Position() {
      return this.jointPositions['arm_4_joint']?.toFixed(2) || 0;
    },
    armJoint5Position() {
      return this.jointPositions['arm_5_joint']?.toFixed(2) || 0;
    },
    armJoint6Position() {
      return this.jointPositions['arm_6_joint']?.toFixed(2) || 0;
    },
    armJoint7Position() {
      return this.jointPositions['arm_7_joint']?.toFixed(2) || 0;
    },

    // Head & Torso
    headJoint1Position() {
      return this.jointPositions['head_1_joint']?.toFixed(2) || 0;
    },
    headJoint2Position() {
      return this.jointPositions['head_2_joint']?.toFixed(2) || 0;
    },
    torsoPosition() {
      return this.jointPositions['torso_lift_joint']?.toFixed(2) || 0;
    },

    // Hand

    handIndexPosition() {
      return this.jointPositions['hand_index_joint']?.toFixed(2) || 0;
    },
    handOtherPosition() {
      return this.jointPositions['hand_mrl_joint']?.toFixed(2) || 0;
    },
    handThumbPosition() {
      return this.jointPositions['hand_thumb_joint']?.toFixed(2) || 0;
    },
  },
  
  methods: {
    
    initializeArmControlActionClient: function() {
      this.armControlActionClient = new ROSLIB.ActionClient({
        ros: this.ros,
        urdfModel: this.urdfModel,
        serverName: '/arm_controller/follow_joint_trajectory',
        actionName: 'control_msgs/FollowJointTrajectoryAction' 
      });
    },

    arm_1_move: function(position) {
      this.initializeArmControlActionClient();
      
      // Logging the URDF model for debugging purposes (ensure it's fetched before this method)
      console.log(this.urdfModel);
    
      var goal = new ROSLIB.Goal({
        actionClient: this.armControlActionClient,
        goalMessage: {
          trajectory: {
            joint_names: ["arm_1_joint"], // Make sure this matches your URDF and controller config
            points: [{
              positions: [0.1], // Use the function parameter
              velocities: [0], // Optionally define velocities
              time_from_start: { secs: 2, nsecs: 0 } // Match with your application's requirements
            }]
          },
          // Specify tolerances as per your controller's configuration
          path_tolerance: [{
            name: "arm_1_joint",
            position: 0.025
          }],
          goal_tolerance: [{
            name: "arm_1_joint",
            position: 0.025 
          }],
          goal_time_tolerance: { secs: 0, nsecs: 600000000 } // 0.6 seconds, align with 'goal_time' from rosparam
        }
      });
    
      goal.send();
    
      goal.on('feedback', function(feedback) {
        console.log('Feedback: ', feedback);
      });
    
      goal.on('result', function(result) {
        console.log('Result: ', result);
      });
    },
    


  },

  // mounted() {


  // beforeDestroy() {
  //   if (this.jointStateListener) {
  //     this.jointStateListener.unsubscribe();
  //   }
  // },

  // mounted() {
  //   // This will ensure your ROS connection is initialized as soon as the component is mounted.
  //   if (this.connected) {
  //     this.initializeArmControlActionClient();
  //   } else {
  //     // Handle case where ROS is not connected yet, maybe set up a watcher or retry mechanism
  //     console.error("ROS is not connected. Action client cannot be initialized.");
  //   }
  // },

}
const Help = { template: `<div class="container">
<h1 class="header">Tiago_Project</h1>
<p>Final year project - Web interface for TIAGo robot - Action/Task Variation</p>
<p><strong>Author</strong> - Adam Doidge K21056614</p>
<p><strong>Supervisor</strong> - Gerard Canal</p>

<h2>Dependencies:</h2>
<ul class="list-group">
    <li class="list-group-item">Apptainer Installation - <a href="https://apptainer.org/docs/admin/main/installation.html">https://apptainer.org/docs/admin/main/installation.html</a></li>
    <li class="list-group-item">Tiago Apptainer Container - <a href="https://nextcloud.nms.kcl.ac.uk/s/BZtWJtiyP57r8YN/download">https://nextcloud.nms.kcl.ac.uk/s/BZtWJtiyP57r8YN/download</a></li>
</ul>

<h2>ROS Preparation:</h2>

<h3>Start Container:</h3>
<ol>
    <li>In a linux terminal window navigate to the folder containing tiago_noetic_opensource.sif file obtained from the Container link above.</li>
    <li>Run the command "apptainer run tiago_noetic_opensource.sif" or in some cases "singularity run tiago_noetic_opensouce.sif"</li>
    <li>Set the ROS_MASTER_URI to localhost using the following command "export ROS_MASTER_URI=http://localhost:11311"</li>
    <li>Run the command "roscore"</li>
</ol>

<h3>Run Rosbridge Server:</h3>
<p>To be able to connect TIAGo to the web interface you must start a rosbridge websocket server.</p>
<ol>
    <li>In another linux terminal window follow steps 1-3 in the Start Container Instructions</li>
    <li>Run the command "roslaunch rosbridge_server rosbridge_websocket.launch"</li>
</ol>

<h3>Start TIAGo Gazebo Simulation:</h3>
<p>If working with a virtual TIAGo follow these instructions to start a gazebo simulation.</p>
<ol>
    <li>In another linux terminal window follow steps 1-3 in the Start Container Instructions</li>
    <li>Run the command "roslaunch tiago_gazebo tiago_gazebo.launch public_sim:=true end_effector:=pal-hey5 world:=empty"</li>
</ol>
<p>- Note the world can be edited to any valid world, see tiago tutorials for some other examples: <a href="http://wiki.ros.org/Robots/TIAGo/Tutorials">http://wiki.ros.org/Robots/TIAGo/Tutorials</a></p>

<h3>Obtain Websocket url:</h3>
<p>To link the web interface and robot you will need to obtain your rosbridge websocket url.</p>
<ol>
    <li>Assuming you are running rosbridge on your local machine the url should be "ws://localhost:9090"</li>
    <li>If you are running rosbridge on a server or robot you will need the address or hostname of that machine "ws://&lt;IP_ADDRESS_OR_HOSTNAME&gt;:9090"</li>
    <li>The port of the url will by default be 9090, a custom port can be configured by running "roslaunch rosbridge_server rosbridge_websocket.launch port:=&lt;CUSTOM_PORT&gt;" where &lt;CUSTOM_PORT&gt; is the port you want to run the server on. You can then replace the 9090 in the first two steps with that custom port.</li>
</ol>
</div>
`}


const routes = [
    { path: '/', component: Home },
    { path: '/actions', component: Actions },
    { path: '/joints', component: Joints },
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
        urdfModel: null,
        jointStateListener: null,
        jointPositions: {
          arm_1_joint: 0,
          arm_2_joint: 0,
          arm_3_joint: 0,
          arm_4_joint: 0,
          arm_5_joint: 0,
          arm_6_joint: 0,
          arm_7_joint: 0,
          head_1_joint: 0,
          head_2_joint: 0,
          torso_lift_joint: 0,
          hand_index_joint: 0,
          hand_mrl_joint: 0,
          hand_thumb_joint: 0
        },
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
            urdfModel: Vue.computed(() => this.urdfModel),
            jointStateListener: Vue.computed(() => this.jointStateListener),
            jointPositions: Vue.computed(() => this.jointPositions)
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
            this.getUrdfModel();
            this.startJointListener(); 
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

      getUrdfModel: function() {
        // Ensure ROS connection exists
        if (!this.ros) {
          console.error("ROS is not connected.");
          return;
        }
      
        const param = new ROSLIB.Param({
          ros: this.ros,
          name: 'robot_description'
        });
      
        param.get((paramValue) => {
          if (!paramValue) {
            console.error("Failed to retrieve URDF model from parameter server.");
            return;
          }
      
          // Parse the URDF string into a UrdfModel object
          var urdfModel = new ROSLIB.UrdfModel({
            string: paramValue
          });
      
          console.log(urdfModel);
          console.log("Abaga")
          this.urdfModel = urdfModel;
        });
      },

      startJointListener: function() {
        this.jointStateListener = new ROSLIB.Topic({
          ros: this.ros,
          name: '/joint_states',
          messageType: 'sensor_msgs/JointState'
        });
    
        this.jointStateListener.subscribe((message) => {
          message.name.forEach((jointName, index) => {
            // This line ensures Vue reacts to changes in jointPositions object
            // by creating a new object with updated joint positions.
            // It's particularly useful for ensuring reactivity in Vue 3.
            this.jointPositions = { 
              ...this.jointPositions, 
              [jointName]: message.position[index] 
            };
          });
        });
      },
    },


    beforeDestroy() {
      if (this.jointStateListener) {
        this.jointStateListener.unsubscribe();
      }
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
