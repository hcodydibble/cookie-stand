'use strict';

var timeOfDay = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
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
    var salesSection = document.getElementById('tableHolder');
    var salesSectionName = document.createElement('tr');
    salesSectionName.innerText = this.name;
    salesSection.appendChild(salesSectionName);
    // var salesList = document.createElement('ul');
    // salesSection.appendChild(salesList);
    for(var i = 0; i < timeOfDay.length; i++){
      var newTd = document.createElement('td');
      var shopSales = this.cookiesPerHour[i];
      newTd.innerText = shopSales;
      salesSection.appendChild(newTd);
    }
    // var listTotal = document.createElement('li');
    // listTotal.innerText = 'Total: ' + this.totalSales + ' cookies.';
    // salesList.appendChild(listTotal);
  };
  storesOwned.push(this);
};

var firstAndPike = new Store('1st and Pike',23,65,6.3);
var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
var seattleCenter = new Store('Seattle Center',11,38,3.7);
var capitolHill = new Store('Capitol Hill',20,38,2.3);
var alkiStore = new Store('Alki',2,16,4.6);

var createTable = function(){
  var tableLocation = document.getElementById('sales_section');
  var tableBody = document.createElement('table');
  tableLocation.appendChild(tableBody);
  tableBody.id = 'tableHolder';
  var blankSpace = document.createElement('th');
  blankSpace.innerText = ' ';
  tableBody.appendChild(blankSpace);
  for (var i = 0; i < timeOfDay.length; i++) {
    var timeRow = document.createElement('th');
    timeRow.innerText = timeOfDay[i];
    tableBody.appendChild(timeRow);
  }
  var totalEnd = document.createElement('th');
  totalEnd.innerText = 'Total Daily Sales';
  tableBody.appendChild(totalEnd);
};
createTable();

// firstAndPike.goToPage();
// seaTacAirport.goToPage();
// seattleCenter.goToPage();
// capitolHill.goToPage();
// alkiStore.goToPage();
for(var i = 0; i < storesOwned.length; i++){
  storesOwned[i].salesPerHour();
  storesOwned[i].goToPage();
}
