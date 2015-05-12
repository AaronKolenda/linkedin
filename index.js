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

  var cardString = $("#card-template").text();
  templates.cardInfo = Handlebars.compile(cardString);

  var editCardString = $("#edit-card-template").text();
  templates.editCardInfo = Handlebars.compile(editCardString);

  var phoneString = $("#phone-template").text();
  templates.phoneInfo = Handlebars.compile(phoneString);

  var editPhoneString = $("#edit-phone-template").text();
  templates.editPhoneInfo = Handlebars.compile(editPhoneString);

};

$(document).on("ready", function(){
  getTemplates();
  // Display the header with default data
  var defaultHeader = new Header;
  var defaultHeaderView = new HeaderView(defaultHeader);
  $("#header-container").append(defaultHeaderView.$el);

  // Display two jobs with default data
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

  // Display two addresses with default data
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

  // Display two credit cards with default data
  var cardCollection = new CardCollection();
  var cardOne = new CardModel();
  var cardTwo = new CardModel();
  cardCollection.add([cardOne, cardTwo]);

  _.each(cardCollection.models, function(element, index){
    cardViews.push(new CardView(element));
  });

  _.each(cardViews, function(element, index){
    $("#card-container").append(cardViews[index].el);
  });

  $("#add-card").click(function(){
    var newCard = new CardModel();
    cardCollection.add(newCard);
    var newCardView = new CardView(newCard);
    cardViews.push(newCardView);
    $("#card-container").append(newCardView.el);
    newCardView.edit();
  })

  // Display two phone numbers with default data
  var phoneCollection = new PhoneCollection();
  var phoneOne = new PhoneModel();
  var phoneTwo = new PhoneModel();
  phoneCollection.add([phoneOne, phoneTwo]);

  _.each(phoneCollection.models, function(element, index){
    phoneViews.push(new PhoneView(element));
  });

  _.each(phoneViews, function(element, index){
    $("#phone-container").append(phoneViews[index].el);
  });

  $("#add-phone").click(function(){
    var newPhone = new PhoneModel();
    phoneCollection.add(newPhone);
    var newPhoneView = new PhoneView(newPhone);
    phoneViews.push(newPhoneView);
    $("#phone-container").append(newPhoneView.el);
    newPhoneView.edit();
  })

});