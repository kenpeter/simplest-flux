# NOTE
* This is based on the original simplest flux app, git@github.com:bengrunfeld/react-flux-simple-app.git
* Two things I had changed: 1. Need to use ReactDOM.rener, instead of React.render in 0.14 version of React. 2. Need to register callback in AppDispatcher.js, not in AppStore.js

# React Flux Simple App

This is the simples possible App that I can think of that implements the React framework on top of the Flux architecture.

## Installation

    git clone git@github.com:bengrunfeld/react-flux-simple-app.git
    cd react-flux-simple-app
    npm install
    gulp

## Usage

* Open up `dist/index.html` in Chrome
* Hit `Cmd + Option + j` to bring up the Dev Tools window
* Click on the text in the UI and you'll see the log show up in the console.

## Questions

For any question about Flux, hit me up on Twitter at: [@bengrunfeld](https://twitter.com/bengrunfeld)
