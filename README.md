# Leaflet street map of NZ

![Leaflet screenshot of Eden Terrace](/public/Leaflet-screenshot.png)

This web app uses React and React-Leaflet to display a map of NZ - initially centered on Eden Terrace, Auckland - with two overlays displaying red and blue lines on the streets within a small radius. 

The layer of red polylines displays roads with Māori names, and the layer of blue polylines displays all other roads. Clicking another location will render more street lines around that point, with all data being saved to the Redux store enabling a larger view of street lines to be built up.

![Leaflet screenshot of Auckland city](/public/Leaflet-auckland.png)

All road name and node co-ordinate data is being called from https://data.linz.govt.nz/. Please note the categorisation between te reo / other street names is likely not 100% accurate at the moment (with a bit of guessing / arbitrary decisions made in some cases).

### To run

Clone down repo, run `yarn`, `yarn start`, navigate to `http://localhost:3000`

OR

visit https://nga-huarahi.herokuapp.com/
