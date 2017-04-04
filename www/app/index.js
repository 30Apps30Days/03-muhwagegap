'use strict';

function bindEvents(thisArg, events) {
   Object.keys(events).forEach(function (selector) {
        Object.keys(events[selector]).forEach(function (event) {
            var handler = events[selector][event].bind(thisArg);
            if('document' === selector) {
                document.addEventListener(event, handler, false);
            } else if ('window' === selector) {
                window.addEventListener(event, handler, false);
            } else {
                document.querySelectorAll(selector).forEach(function (dom) {
                    dom.addEventListener(event, handler, false);
                });
            }
        });
    }); // all events bound
}

var app = {
  init: function () {
    bindEvents(this, {
      '#app': { 'click': this.toggle },
    });

    this.audio = document.querySelector('audio');
    return this;
  },

  toggle: function () {
    if(this.audio.paused) {
      this.audio.currentTime = 1.7;
      this.audio.play();
    } else {
      this.audio.pause();
    }
    return this;
  }
};

app.init();
