# Leaflet

![Leaflet screenshot of Eden Terrace](/public/Leaflet-screenshot.png)

This web app uses React and React-Leaflet to currently display a map of Auckland centered on Eden Terrace, with two overlays of polylines covering a small radius around the centre location. 

The layer of red polylines displays roads with Māori names, and the layer of blue polylines displays all other roads. Clicking another location within NZ on the map will re-set the focal point and re-render the overlays.

All road name and node co-ordinates data is being called from data.linz.govt.nz, but please note the categorisation between the two layers is not 100% accurate at the moment (with a bit of guessing / arbitrary decisions made in some cases).

### To run

Clone down repo, run `yarn`, `yarn dev`, navigate to `http://localhost:3000`