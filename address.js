var addressViews = [];

var AddressCollection = Backbone.Collection.extend({

  model: AddressModel

});

var AddressModel = Backbone.Model.extend({

  defaults: {
    streetOne: "350 5th Avenue",
    streetTwo: "Apt. #240",
    city: "New York",
    state: "New York",
    zip: "10118"
  },

  viewDetails: function() {
    var details = this.toJSON();
    return details;
  }

});


var AddressView = Backbone.View.extend({

  events: { "click #edit": "edit",
            "click #save": "save",
            "click #cancel": "render"},

  className: "address-wrap",

  initialize: function(model) {
  	this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.addressInfo(this.model.viewDetails()));
  },

  edit: function(){
    this.$el.html(templates.editAddressInfo(this.model.viewDetails()));
  },

  save: function(){
    var streetOne = $("#streetOne").val();
    var streetTwo = $("#streetTwo").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    this.model.set("streetOne", streetOne);
    this.model.set("streetTwo", streetTwo);
    this.model.set("city", city);
    this.model.set("state", state);
    this.model.set("zip", zip);
    this.render();
  }



});