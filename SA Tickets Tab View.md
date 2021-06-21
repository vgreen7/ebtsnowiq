---
layout: page
title: Tickets Tab View
author: EastBanc Technologies
name: EastBanc Technologies
email: contact@eastbanctech.com
parent: Supervisor App
nav_order: 5
---



<details open markdown="block">
  <summary>
    <b>Table of contents</b>
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Tickets Tab <a name="-Tickets-Tab"></a>

When Admin sends a new ticket to a Supervisor it will be appear as a ticket count on the Ticket tab for the Supervisor, as seen below.

![Screenshot 2021-03-05 135134](https://user-images.githubusercontent.com/79857237/110160501-197ddc80-7dba-11eb-86d5-950839566500.png)  

After selecting the Tickets tab, the Tickets panel displays a list of tickets and a visual on the map of markers that represent tickets and their statuses to give users an indicator of where the tickets are located in the service area. Above the list, there is a set of filters: by Depot, Route, Ticket Status, and Ticket Type. 
   
A new Ticket is notated with a 'New' tag and identified with a red asterisk marker on the map on the right. A checkmark on any type of ticket indicates that the ticket is closed.

![Screenshot 2021-03-05 135157](https://user-images.githubusercontent.com/79857237/110160508-1be03680-7dba-11eb-9f9c-3202bc7d063c.png)

## Tickets Filters <a name="-Tickets-Filters"></a>

Using the filters on the side panel allows Supervisors to define a more focused look at the MC311 tickets. Setting a filter can add or remove map elements such as the depot that would limit the area displayed on the map to the depot selected, route outlines, ticket status, or ticket types. The filters and their options can be seen below:

### Depot <a name="-Depot"></a>

The depot filter defaults to the depot the Supervisor is assigned to and only displays the tickets within that Depot's service area. 

### Route <a name="-Route"></a>

The route filter allows users to filter tickets by a specific route number, which would display only the tickets in proximity to that route. 

### Ticket Status <a name="-Ticket-Status"></a>

Ticket Status filter allows users to view any ticket set to a specific status.

  * New: The system checked that the 311 ticket is valid for assignment or a new emergency ticket was created but not sent out for assignment yet
  * Sent: The Admin user reviewed the ticket and sent it to a Supervisor App (SA) for assignment creation
  * Assigned: The Supervisor created the Assignment in the SA and sent it to the Driver, but the work hasn't begun yet
  * In Progress: The Driver began working on the ticket assignment
  * Closed: 
  1. An Admin user manually closes a ticket that they deemed invalid or that doesn't need work. 
  2. The system has checked the service request and found it invalid and set the ticket to closed. 
  3. The assigned driver has completed the task and marked the assignment as completed - which closes the ticket throughout all systems.
  * Pending: The system found the ticket to be invalid and is preparing to close the ticket.

### Ticket Type <a name="-Ticket-Type"></a>

Ticket Type filter allows users to filter by two different types of tickets. 

  * Residential (a blue circle next to the SR ID on the list): imported MC311 tickets. 
  * Emergency Tickets (a red asterisk next to the SR ID on the list): requests from emergency services, (EMS, Fire Dept) emergency tickets created by an Admin user in Storm Operations Center, or address specific requests created by a Supervisor user in Supervisor App.

A Checkmark on either type of ticket indicates that the ticket is closed.

  ![Screenshot 2021-03-05 135220](https://user-images.githubusercontent.com/79857237/110160519-1da9fa00-7dba-11eb-94ab-3270b23940ff.png)

## Ticket Details <a name="-Ticket-Details"></a>

Selecting a ticket label from the list focuses on that single ticket on the map and brings up the 'Ticket details' panel on the left. The panel includes all the relevant ticket information and allows the Supervisor to 'Assign drivers' to that ticket. 

  ![Screenshot 2021-03-05 135243](https://user-images.githubusercontent.com/79857237/110160529-1f73bd80-7dba-11eb-8b66-da8d5899bdeb.png)

