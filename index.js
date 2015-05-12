var templates = {};

var getTemplates = function(){

  var headerString = $("#header-template").text();
  templates.headerInfo = Handlebars.compile(headerString);

  var editHeaderString = $("#edit-header-template").text();
  templates.editHeaderInfo = Handlebars.compile(editHeaderString);

  var workString = $("#work-template").text();
  templates.workInfo = Handlebars.compile(workString);

  var editWorkString = $("#edit-work-template").text();
  templates.editWorkInfo = Handlebars.compile(editWorkString);

  var addressString = $("#address-template").text();
  templates.addressInfo = Handlebars.compile(addressString);

  var editAddressString = $("#edit-address-template").text();
  templates.editAddressInfo = Handlebars.compile(editAddressString);

};

$(document).on("ready", function(){
  getTemplates();
  var defaultHeader = new Header;
  var defaultHeaderView = new HeaderView(defaultHeader);
  $("#header-container").append(defaultHeaderView.$el);

  var workCollection = new WorkCollection();
  var jobOne = new WorkModel();
  var jobTwo = new WorkModel();
  workCollection.add([jobOne, jobTwo]);

  _.each(workCollection.models, function(element, index){
    workViews.push(new WorkView(element));
  });

  _.each(workViews, function(element, index){
    $("#work-container").append(workViews[index].el);
  });

  $("#add-work").click(function(){
    var newJob = new WorkModel();
    workCollection.add(newJob);
    var newJobView = new WorkView(newJob);
    workViews.push(newJobView);
    $("#work-container").append(newJobView.el);
    newJobView.edit();
  })

  var addressCollection = new AddressCollection();
  var addressOne = new AddressModel();
  var addressTwo = new AddressModel();
  addressCollection.add([addressOne, addressTwo]);

  _.each(addressCollection.models, function(element, index){
    addressViews.push(new AddressView(element));
  });

  _.each(addressViews, function(element, index){
    $("#address-container").append(addressViews[index].el);
  });

  $("#add-address").click(function(){
    var newAddress = new AddressModel();
    addressCollection.add(newAddress);
    var newAddressView = new AddressView(newAddress);
    addressViews.push(newAddressView);
    $("#address-container").append(newAddressView.el);
    newAddressView.edit();
  })

});