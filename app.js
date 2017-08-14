'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,
  custPerHour: function(min, max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  aveCookiePerCust: 1.2,
  custPerHour: function(min, max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  aveCookiePerCust: 3.7,
  custPerHour: function(min, max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  aveCookiePerCust: 2.3,
  custPerHour: function(min, max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  aveCookiePerCust: 4.6,
  custPerHour: function(min, max){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};
