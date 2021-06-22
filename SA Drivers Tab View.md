---
layout: page
title: Drivers Tab View
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 4
---

# Drivers Tab View <a name="-Drivers-Tab-View"></a>

The Drivers panel displays a list of drivers active in the system with their names and current statuses. The driver marker is displayed on the map (color coded based on status). Above the list there is a set of filters: by Depot, Route Type, and Route Status. Pressing on the name of the driver in the panel on the left takes the user to the [Driver Details](#-Driver-Details)

![Screenshot 2021-03-05 132229](https://user-images.githubusercontent.com/79857237/110157319-0701a400-7db6-11eb-9493-e230d019c5df.png)

Pressing on the driver marker on the map (the snowplow icon) produces a prompt on the map with additional driver details, as seen below. Pressing on the name in the prompt takes the user to the **Driver Details panel**

![Screenshot 2021-03-05 132249](https://user-images.githubusercontent.com/79857237/110157328-0963fe00-7db6-11eb-9d3c-b0f826ee05ee.png)

## Drivers Filters <a name="-Drivers-Filters"></a>

Using the filters above the drivers list allows users to narrow down what is seen on the map. Setting a filter can add or remove map elements such as driver types or drivers with different statuses. The filters and their options are listed below:

### Depot <a name="-Depot"></a>

The depot filter defaults to the depot the Supervisor is assigned to and only the drivers associated with that depot will be displayed. 

### Driver Type <a name="-Driver-Type"></a>

The Route Type filter allows users to filter by County or Contractor employees. County employees can be found on the map with a circular snowplow marker while contractors will be found with a square marker  
![Screenshot 2021-03-05 132949](https://user-images.githubusercontent.com/79857237/110158261-251bd400-7db7-11eb-9796-8878e26572b6.png)![Screenshot 2021-03-05 133125](https://user-images.githubusercontent.com/79857237/110158270-277e2e00-7db7-11eb-95c2-00c4c6b4e1e0.png) 

### Driver Status <a name="-Driver-Status"></a>

The Driver Status filter allows users to view drivers with a specific status only.

* Logged in (Contractor Only) –  is for Contract Drivers who have logged into the system, but have not accepted any new assignments or working on any active assignments. This status is for drivers awaiting a new status after logging in. (This status means no payment is being calculated for the driver, whether they just logged on or have been released.)
* Standby (Contractor Only) – is for Contract drivers who are in position, awaiting assignment. This status is applied manually to a driver by their supervisor. (This status allows for calculation of payment by half of their rate.)   
* Ready – is the default status for County Drivers after logging on. For Contract Drivers, it is applied manually by their supervisor to indicate that the driver is ready to begin work on another assignment. (This status allows for calculation of payment in the Contract Driver's full rate.)
* Address Assignment – is for Drivers working on an address specific assignment.
* In Service – is for Drivers who have accepted and started an assignment on a route.
* Paused  – is for when a supervisor manually pauses a driver. This puts all assignments in the driver's queue on hold until the Supervisors resumes the driver manually. 
* Offline  – is for users that are not logged into the SNOWiQ Driver Application, drivers that are out of range of the service area (out of range), or any drivers that are not able to broadcast/receive GPS coordinates to the system (out of service).

## Driver Details <a name="-Driver-Details"></a>

The Driver Details panel focuses on one selected driver both on the map and on the left-hand panel and all the details associated with that driver: Active Assignments, if any, and their progress, history of previous assignments and future ones. Here, the Supervisor is also able to 
1. 'Pause' (or 'Resume' not shown) an Active Assignment, which would notify the Driver in the Driver App that their Assignment has been paused.  
1. 'Add Task' to the selected Driver, which would notify the Driver in the Driver App. 

![Screenshot 2021-03-05 132315](https://user-images.githubusercontent.com/79857237/110157332-0b2dc180-7db6-11eb-9022-def880815d4d.png)

Clicking on the 'i' (information) icon produces the 'Detail information' profile page of the driver with the driver's contact information, as seen below:

![Screenshot 2021-03-05 132337](https://user-images.githubusercontent.com/79857237/110157336-0cf78500-7db6-11eb-9f92-ca8bfb967396.png)
