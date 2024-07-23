# Travel viz

## View the project
https://pbrotman.github.io/travel-viz/

## Description

In June 2023, I quit my job to get life experiences I didn't have time for while working. I spent the following winter backpacking around Southeast Asia, from 5 December 2023 through 13 March 2024.

This project is a map of everywhere I traveled to. Each circle is a location I visited, and the lines represent my travel route.

#### Key:
- Circle area represents the number of nights spent at each location.
- Circle color represents country.
- Path style represents mode of transportation. (Solid black: land (incl. bus, van, train, motorbike), Dotted: boat, Grey: plane).
- Trip starts and ends in Kuala Lumpur, Malaysia.

## Resources

https://leafletjs.com/examples/quick-start/

## Design decisions

Due to the limited scope of the data, and in order to maintain simplicity, I opted to store the data as json objects in external javascript files.

## Calculating Mercator Distortions

Currently, I define circle size by geographic, rather than pixel, specifications (as this is the most convenient way to draw circles innately in Leaflet). However due to the Mercator projection, circles of the same geographic will appear larger on the map closer to the poles.

I have fixed this problem by scaling the circles by the Mercator distortion factor—$sec^2(ϕ)$, with $ϕ$ as latitude—as described in the [following article](https://www.marksmath.org/classes/common/MapProjection.pdf).