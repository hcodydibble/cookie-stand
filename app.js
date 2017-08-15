'use strict';

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];
// var pikeList = document.getElementById('pike');

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,
  cookiesPerHour: [],
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  salesPerHour: function(){
    var totalSales = 0;
    for(var i = 0; i < 15; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      totalSales = (totalSales + foo);
      this.cookiesPerHour.push(foo);
    }
    this.cookiesPerHour.push(totalSales);
  },
  goToPage: function(){
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      var newLi = document.createElement('li');
      var pikeTime = timeOfDay[i] + this.cookiesPerHour[i] + ' cookies.';
      newLi.innerText = pikeTime;
      pike.appendChild(newLi);
    }
  }
};
firstAndPike.salesPerHour();
firstAndPike.goToPage();

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
    this.cookiesPerHour.push(totalSales);
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
    this.cookiesPerHour.push(totalSales);
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
    this.cookiesPerHour.push(totalSales);
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
    this.cookiesPerHour.push(totalSales);
  }
};
