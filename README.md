## About

WdMath is a powerful [Node.js](https://nodejs.org) module that helps you in math questions, this module is for advanced calcs using geometric math and others

## Instalation

**Node.js is required.**

```ssh-session
npm install wdmath
yarn add wdmath
```

## Some stuff

```js
const WdMath = require("WdMath");

let radians = WdMath.toRadians(degrees); // Convert degrees to radians
let degrees = WdMath.toDegrees(radians); // Convert radians to degrees
let dist = WdMath.distInKm(startLat, startLon, destLat, destLon); // Gets the distance between two coordinates in km
let bearing = WdMath.getBearing(startLat, startLon, destLat, destLon); // Gets the bearing of two coordinates
let cone = WdMath.cone(radius, height); // Some stuff about cone calcs
```

## Help
If you want to help us at this project, please don't hesitate to join us official [discord server](https://discord.gg/ucq6sg3CWd)