'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,
  cookiesPerHour: [],
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  salesPerHour: function(){
    for(i = 0; i < 15; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      this.cookiesPerHour.push(foo);
    }
  }
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  aveCookiePerCust: 1.2,
  cookiesPerHour: [],
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  salesPerHour: function(){
    for(i = 0; i < 15; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      this.cookiesPerHour.push(foo);
    }
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  aveCookiePerCust: 3.7,
  cookiesPerHour: [],
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  salesPerHour: function(){
    for(i = 0; i < 15; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      this.cookiesPerHour.push(foo);
    }
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  aveCookiePerCust: 2.3,
  cookiesPerHour: [],
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  salesPerHour: function(){
    for(i = 0; i < 15; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      this.cookiesPerHour.push(foo);
    }
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  aveCookiePerCust: 4.6,
  cookiesPerHour: [],
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  salesPerHour: function(){
    for(i = 0; i < 15; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      this.cookiesPerHour.push(foo);
    }
  }
};
