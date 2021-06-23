---
layout: page
title: MC311 Tickets
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Storm Operations Center
nav_order: 5
---

<section id="MC311-Ticket-Request-Management" markdown="1">
# MC311 Ticket Request Management<a name="MC311-Ticket-Request-Management"></a>

The MC311 system is used by Montgomery County, MD to process ticket requests that come in during the snow storm. The SNOWiQ's MC311 Tickets page allows Admin users to send the ticket requests imported from MC311 to Supervisors who will in turn assign them to Drivers during an event. Additionally, users are able to create emergency request tickets for specific addresses.

There are two ways to view the tickets: the List view and the Map View, as shown below:

<section id="Ticket-List-View" markdown="1">
## Ticket List View<a name="Ticket-List-View"></a>

This view is a standard table that allows users to close (blue 'Close' button) or assign (blue 'Send' button) tickets to Supervisors. Additionally, there are multiple filters available to narrow down the list displayed: Service Request (SR) ID, Route Name/Number, Depot, Supervisors the ticket is assigned to, Status Indicator, and Type of Ticket. A user can also filter the tickets by the time they were opened and/or closed.  

![Screenshot 2021-03-05 100248](https://user-images.githubusercontent.com/79857237/110134030-f98af080-7d9a-11eb-9414-189512fa59c1.png)

<section id="Ticket-Type" markdown="1">
### Ticket Type<a name="Ticket-Type"></a>

The Ticket Type filter allows users to view the two different types of tickets. 

* Residential (a blue circle next to the SR ID on the list): imported MC311 tickets.
* Emergency Tickets (a red asterisk next to the SR ID on the list): requests from emergency services (EMS, Fire Dept), emergency tickets created by an Admin user in Storm Operations Center, or specific requests created by a Supervisor user in Supervisor App.

A checkmark on either type of ticket indicates that the ticket is closed and has a Closed date and who closed the ticket. 

![Screenshot 2021-03-05 100309](https://user-images.githubusercontent.com/79857237/110134039-fb54b400-7d9a-11eb-99b9-1d6ccc8fcb6f.png)
</section>

<section id="Ticket-Status" markdown="1">
### Ticket Status<a name="Ticket-Status"></a>

The Ticket Status filter allows users to view any ticket set to a specific status. 

* **New (311 and Emergency):** The system checked that the 311 ticket is valid for assignment or a new emergency ticket was created but not sent out for assignment yet. 
* **Sent:** The Admin user reviewed the ticket and sent it to a Supervisor App (SA) for assignment creation.
* **Assigned:** The Supervisor created the Assignment in the SA and sent it to the Driver, but the work hasn't begun yet.
* **In Progress:** The Driver began working on the ticket assignment.
* **Closed:** 
   1. An Admin user manually closes a ticket that they deem invalid or that doesn't need work.
   1. The system has checked the service request and found it invalid and set the ticket to closed.
   1. The assigned driver has completed the task and marked the assignment as completed - Which closes the ticket throughout all systems.
* **Pending:** The system found the ticket to be invalid and is preparing to close the ticket.
</section>

<section id="Ticket-Import-Validation-Rules" markdown="1">
### Ticket Import Validation Rules<a name="Ticket-Import-Validation-Rules"></a>

System identifies the route by the address of the ticket and Checks if the route is being treated/plowed.

* If route is not yet started (=unassigned, pending or assigned status) - auto-close the ticket.
* If route has been started (=started state) but there're no breadcrumbs near the address in the ticket - auto-close the ticket.
* If route is started and there are breadcrumbs near the address on the ticket, or route is in completed/inspected status - 311 ticket should remain open (do not auto-close tickets for areas that haven't been serviced yet.)
</section>
</section>

<section id="Ticket-Map-View" markdown="1">
## Tickets Map View<a name="Tickets-Map-View"></a>

This view provides a panel on the left that lists the tickets and their statuses and also a visual on the map of markers (color coded) that represent tickets to give users an idea of where the tickets are located in the service area. Additionally, clusters are visible when the map is zoomed out.

Clicking on the blue arrow next to the ticket in the left panel or on the marker on the map produces a popup with the details of the ticket, as seen below. It also allows to either Close or Send a ticket.

![Screenshot 2021-03-05 100331](https://user-images.githubusercontent.com/79857237/110134045-fd1e7780-7d9a-11eb-93fe-f3e16fac4b53.png)

<section id="Clusters" markdown="1">
### Clusters<a name="Clusters"></a>

When a user zooms outs, markers with numbers inside them appear called 'clusters' that de-clutter the map and group together like markers. Clicking on a cluster allows the user to zoom in on that area and view the separated markers on the map. 
</section>
</section>

<section id="Sending-Ticket-Requests" markdown="1">
## Sending Ticket Requests<a name="Sending-Ticket-Requests"></a>

In order for the ticket to be worked on, it must go through a sequence of steps, the first of which is to send the ticket to the Supervisor to create an assignment by following the steps below:

* Locate the ticket in either the List View or the Map View
* Click the blue 'Send' button (List View – located all the way on the right of the ticket; Map View – in the popup details for the ticket)
* Enter value in the Note field and select a Supervisor from the dropdown and click 'Send,' as shown below.

![Screenshot 2021-03-05 100355](https://user-images.githubusercontent.com/79857237/110134052-fee83b00-7d9a-11eb-92fc-7d2a941988e7.png)

* Once the ticket is sent, the Supervisor will continue through the SNOWiQ iPad Supervisor App to assign drivers to a ticket. (The process can be seen here.)
</section>

<section id="Closing-Tickets" markdown="1">
## Closing Tickets<a name="Closing-Tickets"></a>

An Admin user can manually close the ticket if the ticket is deemed to be invalid, by following the steps below:

* Locate the ticket in either the List View or the Map View 
* Click the blue 'Close' button (List View – located all the way on the right of the ticket; Map View – in the popup details for the ticket), as shown below.
* Click 'Yes' on the validation popup.

![Screenshot 2021-03-05 100420](https://user-images.githubusercontent.com/79857237/110134066-014a9500-7d9b-11eb-929a-d0c18e5cca20.png)

![Screenshot 2021-03-05 100449](https://user-images.githubusercontent.com/79857237/110134073-03145880-7d9b-11eb-944a-a26d7e199c0b.png)

If the status of the ticket is 'Assigned' or 'In Progress' a warining prompt will display as shown below:

![Screenshot 2021-03-05 100512](https://user-images.githubusercontent.com/79857237/110134084-06a7df80-7d9b-11eb-94cc-93a25ec425af.png)
</section>

<section id="Creating-Emergency-Ticket-Requests" markdown="1">
## Creating Emergency Ticket Requests<a name="Creating-Emergency-Ticket-Requests"></a>

An Admin user can manually create an Emergency Ticket by following the steps below:

* Navigate to either the Active Storm Ops Map View of M311 Tickets Map View.
* Click on the magnifying glass icon for the search bar to open on the map, as shown below.

![Screenshot 2021-03-05 100531](https://user-images.githubusercontent.com/79857237/110134125-0f001a80-7d9b-11eb-9238-178ab3b2c52a.png)

* Enter the address and hit Enter, which will prompt the system to locate the address and if it does, it will display below the search bar.
* Select the address and the system will display the address on the map with the Red location marker as seen below:

![Screenshot 2021-03-05 100559](https://user-images.githubusercontent.com/79857237/110134139-11627480-7d9b-11eb-85e1-1220c896d537.png)

* Click on the marker and the system will display the following prompt.

![Screenshot 2021-03-05 100619](https://user-images.githubusercontent.com/79857237/110134147-132c3800-7d9b-11eb-88a4-06a9e6f3503e.png)

* Enter value in the Notes field and select a Supervisor to send it to.

![Screenshot 2021-03-05 100640](https://user-images.githubusercontent.com/79857237/110134156-158e9200-7d9b-11eb-98e2-c3e57794d898.png)

* If the ticket was created while on the M311 Tickets Map View, the newly created ticket is added to the list on the panel to the left with a red asterisk like an Emergency Ticket. Its status is set to 'Sent' which means the process of sending it to the Supervisor has been completed.
</section>
</section>




