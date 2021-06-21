---
layout: page
title: Login and Navigation
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 1

---



<details open markdown="block">
  <summary>
    <b>Table of contents</b>
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>


## Login <a name="Login"></a>

The login screen below allows Supervisor users to enter into
the SNOWiQ Supervisor Application. Click the 'Login' button
to be re-routed to enter the assigned userame and password
for the application.

![Screenshot 2021-03-03 122503](https://user-images.githubusercontent.com/79857237/109845806-84dd7800-7c1b-11eb-9143-8bbf7c4624fc.png)

Once logged into SA, users will see the Map Monitoring view as seen below.
A Supervisor assigned to a specific depot will only see routes associated
with that depot.

![Screenshot 2021-03-03 130131](https://user-images.githubusercontent.com/79857237/109851081-4054db00-7c21-11eb-9d67-0db47f67ce83.png)

## Navigation <a name="-Navigation"></a>
 
The diagram below highlights basic navigation controls and map elements of the Supervisor App 

![Screenshot 2021-03-03 130159](https://user-images.githubusercontent.com/79857237/109851086-421e9e80-7c21-11eb-8985-0fdcd624c5c3.png)

 
1. Gear Icon - Navigate to the Setting Menu
2. Tabs - Switch between the different tabs Routes/Drivers/Tickets
3. Weather widget - automatically updated based on location
4. Filter options based on what tab is selected
5. List of routes, drivers or tickets depending on which tab is selected (with applied filters)
6. Map - based on the service area that is covered, with the borders and boundaries of a country (or other entity such as district, city, state, etc.), along with borders of depots within that entity
7. "Find my location on the map" button
8. Route marker with route number and current status color coded (Map layers)
9. MC3111 ticket or Emergency request marker (Map layers)
10. Route segments (Map layers). Routes are represented by different type of route segments: 
  - Emergency - Red
  - Primary - Blue
  - Neighborhood - Orange
11. Road hazard boundary (Map layers)
12. Road hazard marker
13. Cluster of multiple markers
14. Service area (Depot) boundary (Map layers)
15. Map layer button - displays a panel to select different map layers (Marker or Segements displayed on the map)
16. Search bar - search address on the map to create address assignments
17. Notification banner - displays active event estimates. Pressing on the banner opens up the Event Log

## Settings Menu <a name="-Setting-Menu"></a>
 
Users can navigate to the Settings Menu by pressing the 'Gear' icon as specified in the diagram above. The menu opens to the 'My Profile' page automatically. The following menu options are available:

![Screenshot 2021-03-03 130221](https://user-images.githubusercontent.com/79857237/109851092-43e86200-7c21-11eb-929d-708935a2c9b5.png)

### My Profile <a name="-My-Profile"></a>
 
A user can edit their own profile by pressing 'Edit Profile' in the top right corner, as can be seen in the screenshot above, which would allow the user to edit their own information such as name, phone number and email.

### About <a name="-About"></a>
 
Displays the current version of the app.

### Event Log <a name="-Event-Log"></a>
 
The Event Log allows Supervisor users a closer look at the actions, users and timestamps of the actions for the current actice Event. As seen below, the log shows the time the action occurred in the system, what the action was, and who performed the action (username or system). Actions may include creating an Assignment or activating a new Phase for a Depot.

![Screenshot 2021-03-03 130248](https://user-images.githubusercontent.com/79857237/109851103-477be900-7c21-11eb-875b-eb317f27273c.png)

## Map Layers <a name="-Map-Layers"></a>
 
A user can access the Map Layers panel by pressing the Map Layers icon on the map (stack of layers icon as shown below). By selecting the elements from the panel, a user can specify which markers or segments to be displayed on the map, subjected to filters selected in the left-hand panel.

![Screenshot 2021-03-03 130313](https://user-images.githubusercontent.com/79857237/109851111-4945ac80-7c21-11eb-82be-4de629453545.png)

## Clusters <a name="-Clusters"></a>
 
On the Map Monitoring view, When a user zooms outs, markers with numbers inside them appear called 'clusters' that de-clutter the map and group together like markers. Clicking on a cluster allows to user to zoom in on that area and view the separated markers on the map.
