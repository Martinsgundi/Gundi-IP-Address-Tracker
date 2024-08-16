# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Desktop design](public/design/desktop-design.jpg)


![Mobile design](public/design/mobile-design.jpg)


### Links

- Solution URL: [Checkout out my solution on front end mentor](https://www.frontendmentor.io/solutions/gundis-ip-address-tracker-6VvPCkajRz)
- Live Site URL: [Checkout the live site](https://gundi-ip-address-tracker.netlify.app/)


## My process

### Built with

- CSS Grid
- JSX syntax
- Javascript(ES14)
- Mobile-first workflow
- [TailWindCSS](https://tailwindcss.com) - CSS Framework
- [React](https://react.dev/) - JS library
- [vite](https://vitejs.dev/) - Build Tool


### What I learned

Through this project, I deepened my understanding of React, particularly the use of `useEffect`. I learned that `useEffect` is specifically designed to handle side effects in a React component, such as performing data fetching, subscribing to events, or directly manipulating the DOM. Crucially, I realized that it should be used when a component mounts or updates, enabling these side effects to run only when necessary and avoid unwanted re-renders.

Additionally, I took a significant step forward by creating and implementing my own custom hook for the first time. This experience not only solidified my grasp of React hooks but also underscored the flexibility and reusability they offer in managing component logic.

As I continue to work with React, each project presents a valuable opportunity to reinforce my existing knowledge and uncover new insights. This project was no exception, as it provided me with further clarity on React’s core concepts and best practices.

### Continued development

Looking ahead, I am excited to embark on a variety of projects that will challenge me to apply React in diverse and increasingly complex scenarios. By tackling different use cases and experimenting with advanced techniques, I aim to deepen my mastery of React’s concepts and methods, ultimately becoming more proficient and versatile in building dynamic, high-performance web applications.

### Useful resources

- [React Leaflet](https://react-leaflet.js.org) - I utilized the Leaflet open-source JavaScript library to create mobile-friendly, interactive maps. React Leaflet made it seamless to integrate these maps into my React application, offering a robust solution for dynamic map rendering.
- [IP Geolocation API](https://ipgeolocation.io) - This API, with its clear and straightforward documentation, was instrumental in accurately detecting user locations. It provided the necessary geolocation data, including latitude and longitude, which are essential for rendering the maps.
- [Ikechukwu Peter's Youtube Video](https://youtu.be/6oYnt-H0Lwc?si=20k4Wgm4xtnPkICv) - Peter's video was invaluable in helping me navigate and understand the React Leaflet documentation. Initially, the location API I was familiar with didn’t provide the required latitude and longitude data for map rendering. Fortunately, this video introduced me to the IP Geolocation API, which offered all the features I needed to successfully implement the map functionality.


## Author

- Linkedin - [Martins Ogundipe](https://www.linkedin.com/in/martinsgundi)
- Frontend Mentor - [Martinsgundi](https://www.frontendmentor.io/profile/Martinsgundi)
- Twitter - [Martinsgundi1](https://www.twitter.com/martinsgundi1)
