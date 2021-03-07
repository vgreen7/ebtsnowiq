# User Manual

- [ Driver App](#-Driver App)
- [Login](#-Login)
- [Navigation](#-Navigation)
- [Navigation-Drawer](#-Navigation-Drawer)
   * [User-Profile-details](#-User-Profile-details)
   * [Supervisor-details](#-Supervisor-details)
   * [Operations-menu](#-Operations-menu)
   * [Profile](#-Profile)
   * [Salt-Management](#-Salt-Management)
   * [About](#-About)
   * [Logout](#-Logout)
- [DA-Driver's-Activity](#-DA-Driver's-Activity)
   * [Assignments](#-Assignments)
   * [Accepting-and-Working-Assignments](#-Accepting-and-Working-Assignment)
   * [Completing-Assignment](#-Completing-Assignment)
   * [Completing-Multi-Pass-Assignment](#-Completing-Multi-Pass-Assignment)
   * [Paused/Resumed-Assignment](#-Paused/Resumed-Assignment)
- [Road-Hazards](#-Road-Hazards)
   * [Creating-Road-Hazard](#-Creating-Road-Hazard)
   * [Deleting-Road-Hazard](#-Deleting-Road-Hazard)
   
   
## Driver App 
**Both the Android and iOS applications have the same functionality.** <!-- and the screenshots below are a combination of both.**-->

## Login 
The login screen below allows Driver users to enter the SnowIQ Driver Application (DA). Click the appropriate 'Login' button to be re-routed to enter the assigned User Name and Password for the application.

![Screenshot 2021-03-02 131014](https://user-images.githubusercontent.com/79857237/109695112-8cd4e380-7b59-11eb-8c83-716743ad6fdf.png)

Once logged into the DA, Drivers will see the screen below. The screens display two types of drivers logged in, a County Driver and a Contractor. The difference is identified in the status of the Driver. The County Driver, on the left, has a status of 'Ready' whereas the Contractor, on the right, is in 'Standby.' The circle next to the profile picture indicates that this a County Driver and a square is a Contractor. These icons are color coded to match the status.

![Screenshot 2021-03-03 100742](https://user-images.githubusercontent.com/79857237/109826057-6cb02d80-7c08-11eb-963d-7aa5d8c4175c.png)
![Screenshot 2021-03-03 100807](https://user-images.githubusercontent.com/79857237/109826066-6f128780-7c08-11eb-8104-982e42fc8283.png)

## Navigation 
The diagram below highlights basic navigation controls and map elements of the Driver App.

![Screenshot 2021-03-02 131342](https://user-images.githubusercontent.com/79857237/109694808-3667a500-7b59-11eb-8c58-4471ea1129be.png)

1. User Profile Picture, Name, and Status – pressing on the Profile picture opens the Navigation Drawer 
2. Weather widget – automatically updated based on location
3. Status bar  
   3.1 If it is on active assignment, as seen in this diagram, the status bar includes the route number or address being worked, number of miles on the assignment, percentage          completed, status of the assignment and progress bar
   3.2 If it is in between assignments or no assignments, the system will display the appropriate notification to the user. 
5. Map – based on the TBD
6. "My current location on the map" pin
7. Button to create Road Hazards
8. Navigate button to get directions to the location from Google Maps
9. Another Driver marker in near-real time with current status color coded 
10. Route segments assigned to the Driver to work on. Routes are represented by different type of route segments: emergency - red, primary - blue, neighborhood - orange
11. Breadcrumbs (green colored) appear in near-real time over the Route that the Driver has worked on already 
12. Road hazard marker
13. Button "Find my location on the map"

## Navigation Drawer
Users can open the Navigation Drawer by pressing the User Profile picture icon as specified in the diagram above. The panel is divided into three sections:
#### 1. User Profile details:
This section lists the profile details of logged in driver. To edit them, the user can press 'Profile' in the section below.

#### 2. Supervisor details:
Each driver has a Supervisor they report to and who assigns them work. The Supervisor's name and phone number are listed in this section, with the ability to contact the Supervisor directly from within the app, by pressing the green phone icon.

#### 3. Operations menu:
The Operations Menu as seen above is for a Driver without any active or future assignments. If a driver receives an assignment or needs to complete an active assignment, an actionable option will be added to the menu, which can be seen here.

![Screenshot 2021-03-02 132549](https://user-images.githubusercontent.com/79857237/109696248-d671fe00-7b5a-11eb-8e2a-61ad4544589e.png)

## Profile
A user can press on 'Profile' to edit their name, phone number, and User Picture.

![Screenshot 2021-03-02 134830](https://user-images.githubusercontent.com/79857237/109698975-ffe05900-7b5d-11eb-8ea6-13c55b2c8a66.png)

## Salt Management
A Driver user can press on 'Salt Management' to record how much salt was loaded and returned by pressing 'Add Salt Usage Info.' The historical usage is saved in the list, as seen below. 

![Screenshot 2021-03-02 135028](https://user-images.githubusercontent.com/79857237/109699211-46ce4e80-7b5e-11eb-8005-cbc2a66637a7.png)

## About
Displays the current version of the app.

## Logout
A user must logout at the end of each workday.  



## Driver's Activity
##   Assignments
##   Accepting and Working Assignments
When a Supervisor assigns a route, a ticket, or an address-specific assignment, the Driver receives a notification as seen below. Press 'Ok' and follow the steps below:

![Screenshot 2021-03-02 142731](https://user-images.githubusercontent.com/79857237/109703426-759af380-7b63-11eb-9560-a2b63700389c.png)

- Get directions to the location of the assignment by using the navigate button in the app (the blue arrow icon in the top right corner), which opens Google Maps to provide those   directions. 
- Once the system starts tracking that the Driver is working on the assignment, i.e. the Driver's GPS location is on the assigned route or address, the system will change the       status of the Active Assignment to 'Started' in the status bar and begin displaying breadcrumbs to indicate the route that was worked on, as seen below. 
- Alternatively, the Driver can manually go to the Navigation drawer and press 'Start Assignment' as seen below. 

##   Completing Assignment 
A Driver can complete their Active Assignment by opening the Navigation drawer and pressing 'Complete Assignment' as seen below.

![Screenshot 2021-03-02 143149](https://user-images.githubusercontent.com/79857237/109703943-0eca0a00-7b64-11eb-8e8f-0314c9d1cc98.png)

This removes the assignment from the Status bar and also moves it from Active Assignments to History tab in the 'Assignments' panel in the Operations Menu. If the Driver has another Assignment in the queue (in the 'Future' tab in the 'Assignments' panel), then the Driver will receive the notification as seen below and will follow the process as specified in the section "Accepting Assignments" above.

![Screenshot 2021-03-02 152604](https://user-images.githubusercontent.com/79857237/109710430-a7b05380-7b6b-11eb-8bae-3e85b576ac49.png)

##   Completing Multi-Pass Assignment
If a Driver receives an Assignment with Multi-pass toggle on, it will be indicated in the notification and once the Driver completes a pass, they will press 'Complete Pass' in the Navigation drawer and will await further instructions from the supervisor as specified in the status bar as seen below. 
  - If a Supervisor chooses another pass for this assignment, the Driver will receive the following notification to proceed work on the multi-pass assignment until completed         with the pass and repeat the steps as specified above.

![Screenshot 2021-03-02 152939](https://user-images.githubusercontent.com/79857237/109710812-20afab00-7b6c-11eb-82e8-5a7a16c4a02e.png)

  - If a Supervisor decides that no more passes are needed, the Assignment will be removed from the Driver's Active Assignments into the 'History' tab on the 'Assignments'           panel. The status bar will be updated to await further instructions. 

![Screenshot 2021-03-02 153140](https://user-images.githubusercontent.com/79857237/109711112-7dab6100-7b6c-11eb-8522-9080ca93f77f.png)
![Screenshot 2021-03-02 153202](https://user-images.githubusercontent.com/79857237/109711121-813ee800-7b6c-11eb-98ab-3ad769315369.png)

##   Paused/Resumed Assignment
When a Supervisor pauses a Driver, the Driver's status changes to 'Paused' and the status bar is updated, as shown below. Once the Supervisor resumes the Driver, the previous Assignment is started again and the status returns to 'In Service.'

![Screenshot 2021-03-02 153644](https://user-images.githubusercontent.com/79857237/109711680-2063df80-7b6d-11eb-8a71-4a969581a18d.png)

#  Road Hazards <a name="-Road Hazards"></a>
##   Creating Road Hazard
A Driver can create a road hazard on the map to warn other Drivers of the hazards on their routes, by following the steps below:
  - On the map, press the road hazard plus icon
  - The system will display the following 'New road hazard' prompt
  - Press the type of road hazard from the list and press 'Yes' to confirm the creation of a new road hazard on the next prompt
  - The system will display the hazards as either a road plate or a warning as seen below
    - Road plates (orange stacked layers marker): permanent hazard on the road
    - Temporary hazard (orange warning triangle marker): tree down/power line down, accident, etc.
    
       **Note:** These hazards will appear on the map for all Supervisors and Drivers that are working in the same service area
    
![Screenshot 2021-03-02 154417](https://user-images.githubusercontent.com/79857237/109712638-46d64a80-7b6e-11eb-99c8-de3918cd153e.png)
![Screenshot 2021-03-02 154441](https://user-images.githubusercontent.com/79857237/109712647-48a00e00-7b6e-11eb-8b88-f76186aa2895.png)

##    Deleting Road Hazard
A Driver can delete an existing road hazard from the map if it doesn't exist anymore: 
  - Press on an existing road hazard on the map
  - The system will display the following 'Road hazard info' prompt
  - Press 'Delete' and press 'Yes' on the next prompt to confirm deletion of the road hazard
  - Once deleted, the marker is removed from the map for everyone
  
![Screenshot 2021-03-03 081910](https://user-images.githubusercontent.com/79857237/109811686-28696100-7bf9-11eb-95c4-f654c310f0c6.png)