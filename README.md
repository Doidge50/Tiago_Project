# Tiago_Project
Final year project - Web interface for TIAGo robot - Action/Task Variation

Author - Adam Doidge K21056614
Supervisor - Gerard Canal

# Dependencies:

Apptainer Intsallation - https://apptainer.org/docs/admin/main/installation.html

Tiago Apptainer Container - https://nextcloud.nms.kcl.ac.uk/s/BZtWJtiyP57r8YN/download



# ROS Preparation:

## Start Container:

1. In a linux terminal window navigate to the folder containing tiago_noetic_opensource.sif file obtained from the Container link above.

2. Run the command "apptainer run tiago_noetic_opensource.sif" or in some cases "singularity run tiago_noetic_opensouce.sif"

3. Set the ROS_MASTER_URI to localhost using the following command "export ROS_MASTER_URI=http://localhost:11311"

4. Run the command "roscore"

## Run Rosbridge Server:

To be able to connect TIAGo to the web interface you must start a rosbridge websocket server.

1. In another linux terminal window follow steps 1-3 in the Start Container Instructions

2. Run the command "roslaunch rosbridge_server rosbridge_websocket.launch"


## Start TIAGo Gazebo Simulation:

If working with a virtual TIAGo follow these instructions to start a gazebo simulation.

1. In another linux terminal window follow steps 1-3 in the Start Container Instructions

2. Run the command "roslaunch tiago_gazebo tiago_gazebo.launch public_sim:=true end_effector:=pal-hey5 world:=empty"

- Note the world can be edited to any valid world, see tiago tutorials for some other examples : http://wiki.ros.org/Robots/TIAGo/Tutorials


## Obtain Websocket url:

To link the web interface and robot you will need to obtain you rosbridge websocket url.

1. Assuming you are running rosbridge on your local machine the url should be "ws://localhost:9090"

2. If you are running rosbridge on a server or robot you will need the address or hostname of that machine "ws://<IP_ADDRESS_OR_HOSTNAME>:9090"

3. The port of the url will by default be 9090, a custom port can be configured by running "roslaunch rosbridge_server rosbridge_websocket.launch port:=<CUSTOM_PORT>" where <CUSTOM_PORT> is the port you want to run the server on. You can then replace the 9090 in the first two steps with that custom port.


## Locally running the Web Interface.

If you wish to run the web interface locally follow these steps.

1. Follow the Start Container steps 1-3 (This may not be nesseccary if you are able to run a python http server without the container)

2. Navigate to the Project workspace in the command terminal

3. Run the command "python -m http.server"

4. Go on a web broser and enter the url http://127.0.0.1:8000

