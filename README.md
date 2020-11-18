# Human Rights First D DS

## Description
We were approached to undertake this project by Human Rights First, a non-profit, nonpartisan organization dedicated to fighting for human rights and race equality. They have been working diligently for over 40 years, with a strong presence across the country, from Washington D.C. and Los Angeles. They have been on the forefront of this struggle for a long time, and they are very good at what they do.
The purpose of this app is to better track and report acts of police use of force. There are wild inconsistencies regarding how these acts are reported, and the information is thin no matter where you look. Using various APIs and datasets, we pooled and shaped these sources and rendered them onto an easily navigated map of the US as well as multiple graphs pointing out discrepancies. Each datapoint on the map is clickable and will give the metrics for what it represents. The goal was to have a single source of truth on this matter.
Moving forward, the app could benefit from more social media API data, and possibly an NLP model to assess this data to find relevant incidents.

If we do a video, we should add it here.

## Contributors

| [Rob Bennett](https://github.com/RobDBennett) | [Sasana Kongjareon](https://github.com/popkdodge) | [Royer Adames](https://github.com/royeradames) | [Bikesh Maharjan](https://github.com/bikesh-maharjan) | [Heath Scott](https://github.com/Scotth72) |
| :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/64490045?s=460&u=85f903c0baf6ae8fcab0ae2d1686a434ce90be6b&v=4" width = "200" />](https://github.com/RobDBennett) | [<img src="https://avatars1.githubusercontent.com/u/62583069?s=460&u=2ce19efe9d7d8a39d3c2dc64b7a1b764b6d3c79c&v=4" width = "200" />](https://github.com/popkdodge) | [<img src="https://avatars1.githubusercontent.com/u/16887907?s=460&u=abefba57b8b58084d4df6c8a666873ed0986eea6&v=4" width = "200" />](https://github.com/royeradames) | [<img src="https://avatars2.githubusercontent.com/u/55510668?s=460&u=971839c4635847249a9c6ffc1d3b855f05910041&v=4" width = "200" />](https://github.com/bikesh-maharjan) | [<img src="https://avatars1.githubusercontent.com/u/59752102?s=460&u=bdcb67dfd73148cd7e867bd7d0448f75f45c5d3c&v=4" width = "200" />](https://github.com/Scotth72) |
| Data Scientist | Data Scientist | Back-End Developer | Front-End Developer | Front-End Developer |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RobDBennett) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/popkdodge) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/royeradames) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bikesh-maharjan) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Scotth72) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/robdbennett-tech/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sasana-kongjareon-2618281a6/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/royer-adames/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/bikeshmaharjan91/) |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/heath-l-scott/) |            

<br>

## Deployed Product
- Front-End Deployment- This is the user version for the current product deployment.
https://d-fe.humanrightsfirst.dev/
- Back-End App- This is the back end app that pulls from the DS API and wires into the front-end. However, there isn't a splash page.
https://hrf-d-api.herokuapp.com/
- Data-Science API- This is the API that pulls from the various data sources, cleans/shapes the data, and reports various visualizations.
http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/#/

## Linked Repos
- Front-End Repo- This repo contains all of the documentation and files for the front end deployment
https://github.com/Lambda-School-Labs/human-rights-first-d-fe
- Back-End Repo- This repo contains all of the documentation and files for the back end deployment
https://github.com/Lambda-School-Labs/human-rights-first-d-be
- Data-Science Repo- This repo contains all of the documentation and files for the data science api deployment
https://github.com/Lambda-School-Labs/human-rights-first-d-ds

## Components
- Loading Page
- NavBar
- Map
- Graph
- Pie Chart
- Top List 
- About

## Features
- added to the navigation bar with tabs displaying dashboards with Police use of force, incidents of killing, and the About page. 
- tabs provide the display of the data from the backend and the Data Science
- also a filter button to filter the information requested (not functional)
- Police use of force (Dashboard/Tab1)
    - Recent acts of Police Force
        -This graph shows incidents over time, allowing the end user to watch the whole year, or scroll manually to the date that most interests them.
    - Events of Police Violence
        -This graph shows the last 6 months of Police Use of Force. Hovering over the line will reveal individual incidents that compose the line.
- Incidents of Killing (Dashboard/Tab2)
    - Map of Police Shooting
        -This graph shows the recorded incidents of lethal police encounters over the map location where they occurred. Hovering over the individual points will provide more data on each incident.
    - Number of people killed per state
        -This bar graph shows the number of incidents per state, normalized to account for state population. This should counter popular presumptions that more densely populated states have a higher statistical risk.
    - Pie graph of victim's race
        -This pie chart compiles the racial components of the victims of these acts.
    - Demographic of US
        -This pie chart shows the national racial breakdown for comparison of relative risk.

## Contributing - future features needed/desired for this project:
   -ability to reset filters
   -ability to apply and filter by date range
   -ability to filter by source type
   -add description on each map, graph and pie chart 
   -add top five recent killings 


## Tech Stack Used 
- React
- React Redux
    - useEffect, useSelector, dispatch, store
- Axios
- Plotly
- ANT Design
- CSS

## User Flows 
The user goes to the front-end website. They are greeted with the non-lethal incidents data. There are two graphs. The left-most graph is the progression of incidents over time. The play button should automatically advance time, but you can also drag the slider to a specific date. Each point will populate on the map with details and a clickable link to the stories they are associated with.

The right-most graph is a line graph with the same information, but displayed over time to easy show spikes of activity.
![User1](https://github.com/Lambda-School-Labs/human-rights-first-d-ds/blob/main/screenshots/User-Flow1.JPG)

Along the top of the screen you will have a few tabs. Clicking on the 'Incidents of Killing' tab will give you the second batch of graphs.
On this screen the user should see four graphs. The upper left graph is a map of the US with historical data of police lethal use of force, including off-duty incidents. The default filter is for the full time of the data, but there is a filter tab on the upper right that will allow the user to dial in on the specific timeframe they wish to see displayed. On the US map, each point is a specific instance that can be hovered over for more data. The map can zoom and pan effectively, and each datapoint is represented as close to the address that it occured as possible.

The upper-right graph is a bar graph displaying the different states with their number of incidents. This data has been normalized so that the population of the state is taken into account with the number of incidents. The purpose of this is to illustrate that the general public tends to associate police use of force with big cities, but the extremely troubling trend is that more rural areas like New Mexico have a substantively higher lethal force per capita.

The lower-left graph is a breakdown of the victim's race displayed on a pie-chart.

The lower-right graph is the breakdown of the national racial demographics for the US to illustrate differences in lethal force.
![User2](https://github.com/Lambda-School-Labs/human-rights-first-d-ds/blob/main/screenshots/User-Flow2.JPG)

The final user option is to go to the About page, which has some information regarding the Human Rights First organization.
![User3](https://github.com/Lambda-School-Labs/human-rights-first-d-ds/blob/main/screenshots/User-Flow3.JPG)

## Wireframes (FE only)
- Front End should include a description and screen shot of wireframes
![FE-Wire](https://github.com/Lambda-School-Labs/human-rights-first-d-ds/blob/main/screenshots/New_Wire_Frame.png)


## Architecture
The flow for visualizations and descriptions between the user and the back end are detailed below.

![FE-Wire](https://github.com/Lambda-School-Labs/human-rights-first-d-ds/blob/main/screenshots/Front-End-Wire-Frame.JPG)

The base architecture for the Data-Science API is displayed below.
![DS-Wire](https://github.com/Lambda-School-Labs/human-rights-first-d-ds/blob/main/screenshots/DS-Wire-Frame.JPG)











