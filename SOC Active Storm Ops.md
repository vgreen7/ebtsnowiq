---
layout: page
title: Active Storm Ops
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 2
---

<section id="Active-Storm-Ops" markdown="1">
# Active Storm Ops

<section id="Map-Monitoring-View" markdown="1">
## Map Monitoring View <a name="-Map-Monitoring-View"></a>

The Map Monitoring view is the first page that users see when logging in, which can also be accessed from the navigation menu on the left under 'Active Storm Ops' option. This page is used to view near-real time visual updates during a storm event. The Map Monitoring view consists of the following elements:

  * A map based on the service area that is covered, with the borders and boundaries of a county (or other entity such as district, city, state, etc.), along with borders of depots within that entity
  * A visual of markers on the map that represent drivers, routes, road hazards, tickets, and clusters when the map is zoomed out
  * A panel to the left of the map with two tabs for Routes and their current status and Drivers and their status
  * A set of filters above the map that allow to narrow or expand what is displayed on the map

  ![Screenshot 2021-03-04 130851](https://user-images.githubusercontent.com/79857237/110009697-5c24b380-7ceb-11eb-9e08-bf29fbbbb6e4.png)  

<section id="Filters" markdown="1">
### Filters <a name="-Filters"></a>

Using the filters at the top of the Map Monitoring view allows users to narrow down what is seen on the map. Setting a filter can add or remove map elements such as route outlines, routes of different priorities, and routes/drivers that belong to a specific depot. Below are the filters and their options:

<section id="Route-Status" markdown="1">
#### Route Status <a name="-Route-Status"></a>

The Route Status filter allows users to view any routes set to a specific status during an assignment.

  * Unassigned - When there are no assignments created for the route
  * In Progress - When a route has at least one assignment attached to it that hasn't been completed yet
  * Completed - The route has had its assignment(s) completed by assigned driver(s) or the inspector/supervisor manually set the route to 'Completed' 
  * Inspected - The route has had its assignment verified and finalized by an inspector

![Screenshot 2021-03-04 130914](https://user-images.githubusercontent.com/79857237/110009702-5e870d80-7ceb-11eb-9df6-4c299472e76c.png)  
</status>

<section id="Priority" markdown="1">
#### Priority <a name="-Priority"></a>

The Priority filter allows users to view only specific route details and segments based on their priority. The route segments are displayed as color coded lines on the map.

Emergency (Red) – These routes have priority over Residential routes. When selected in an assignment, it must be worked on first. 

Residential (Orange - neighborhood and Blue - primary) – These routes are for all route boundaries not included in the emergency selection.

Route segments (map layer). Routes are represented by different type of route segments: Emergency - Red, Primary - Blue, Neighborhood - Orange

![Screenshot 2021-03-04 130935](https://user-images.githubusercontent.com/79857237/110009706-6050d100-7ceb-11eb-8ab8-430500fb1003.png)
</section>

<section id="-Depot" markdown="1">
#### Depot <a name="Depot"></a>

The Depot filter allows users to select a depot within the county which narrows down what drivers and routes are displayed on the map and on the tabs to the left of the map.

![Screenshot 2021-03-04 130957](https://user-images.githubusercontent.com/79857237/110009711-621a9480-7ceb-11eb-803f-5190b6b62db6.png)
</section>
</section>
</section>

<section id="Routes-Tab" markdown="1">
## Routes Tab <a name="-Routes-Tab"></a>

The Routes tab located to the left of the map, as seen below, displays a list of routes with their corresponding route name/number and a status indicator (color coded – see markers), the total number of miles on the route, and the percentage of completion if there is an active assignment. Applying Filters above the map will filter the routes on this tab as well. Clicking on any of the route labels within the tab focuses on that single route on the map.

![Screenshot 2021-03-04 131025](https://user-images.githubusercontent.com/79857237/110009718-647cee80-7ceb-11eb-934e-506f98f1c3f0.png)
</section>

<section id="Drivers-Tab" markdown="1">
## Drivers Tab <a name="-Drivers-Tab"></a>

The Drivers tab to the right of the Routes tab, as seen below, displays a list of Drivers with their names and statuses (color coded – see markers and Status Descriptions). When selecting a Driver from the list, their details will be shown above their icon located on the map as seen below. It provides additional details like the Driver's photo, Supervisor name, and the last time the Driver was seen using the Driver App (DA). 

![Screenshot 2021-03-04 131047](https://user-images.githubusercontent.com/79857237/110009729-68107580-7ceb-11eb-9615-c1f38acd75fa.png)

Clicking on the Blue arrow to the right of the Driver name produces the Driver's Profile panel, as seen below, with even more details.

![Screenshot 2021-03-04 131111](https://user-images.githubusercontent.com/79857237/110009735-6a72cf80-7ceb-11eb-8a5e-13d7474ca999.png)
</section>

<section id="Markers" markdown="1">
## Markers <a name="-Markers"></a>

![Screenshot 2021-03-04 131133](https://user-images.githubusercontent.com/79857237/110009738-6c3c9300-7ceb-11eb-9043-9f97d516593c.png)
![Screenshot 2021-03-04 131156](https://user-images.githubusercontent.com/79857237/110009757-7199dd80-7ceb-11eb-8033-c665e7f77eeb.png)
</section>

<section id="Clusters" markdown="1">
## Clusters <a name="-Clusters"></a>

On the Map Monitoring view,  when a user zooms outs, markers with numbers inside them appear called 'clusters' that de-clutter the map and group together like markers. Clicking on a cluster allows the user to zoom in on that area and view the separated markers on the map. 
</section>
</section>
