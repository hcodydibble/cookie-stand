'use strict';

var timeOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

function Store(name,minCust,maxCust,avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiePerCust = avgCookie;
  this.cookiesPerHour = [];
  this.custPerHour = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.salesPerHour = function(){
    var totalSales = 0;
    for(var i = 0; i < 14; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      totalSales = (totalSales + foo);
      this.cookiesPerHour.push(foo);
    }
    this.cookiesPerHour.push(totalSales);
  };
  this.goToPage = function(){
    var salesSection = document.getElementById('sales_section');
    var salesSectionName = document.createElement('h2');
    salesSectionName.innerText = this.name;
    salesSection.appendChild(salesSectionName);
    var salesList = document.createElement('ul');
    salesSection.appendChild(salesList);
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      var newLi = document.createElement('li');
      var pikeTime = timeOfDay[i] + this.cookiesPerHour[i] + ' cookies.';
      newLi.innerText = pikeTime;
      salesList.appendChild(newLi);
    }
  };
};

var firstAndPike = new Store('1st and Pike',23,65,6.3);
firstAndPike.salesPerHour();
firstAndPike.goToPage();

var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
seaTacAirport.salesPerHour();
seaTacAirport.goToPage();

var seattleCenter = new Store('Seattle Center',11,38,3.7);
seattleCenter.salesPerHour();
seattleCenter.goToPage();

var capitolHill = new Store('Capitol Hill',20,38,2.3);
capitolHill.salesPerHour();
capitolHill.goToPage();

var alkiStore = new Store('Alki',2,16,4.6);
alkiStore.salesPerHour();
alkiStore.goToPage();
