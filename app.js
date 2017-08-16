'use strict';

var timeOfDay = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
var storesOwned = [];

function Store(name,minCust,maxCust,avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiePerCust = avgCookie;
  this.cookiesPerHour = [];
  this.totalSales = 0;
  this.custPerHour = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.salesPerHour = function(){
    this.totalSales = 0;
    for(var i = 0; i < 14; i++){
      var foo = this.custPerHour() * Math.floor(this.aveCookiePerCust);
      this.totalSales += foo;
      this.cookiesPerHour.push(foo);
    }
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
    var listTotal = document.createElement('li');
    listTotal.innerText = 'Total: ' + this.totalSales + ' cookies.';
    salesList.appendChild(listTotal);
  };
  storesOwned.push(this);
};

var firstAndPike = new Store('1st and Pike',23,65,6.3);
var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
var seattleCenter = new Store('Seattle Center',11,38,3.7);
var capitolHill = new Store('Capitol Hill',20,38,2.3);
var alkiStore = new Store('Alki',2,16,4.6);

for(var i = 0; i < storesOwned.length; i++){
  storesOwned[i].salesPerHour();
  storesOwned[i].goToPage();
}
