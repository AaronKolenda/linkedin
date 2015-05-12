var phoneViews = [];

var PhoneCollection = Backbone.Collection.extend({

  model: PhoneModel

});

var PhoneModel = Backbone.Model.extend({

  defaults: {
    digitsOne: "350",
    digitsTwo: "555",
    digitsThree: "5313",
    type: "Mobile",
  },

  viewDetails: function() {
    var details = this.toJSON();
    return details;
  }

});


var PhoneView = Backbone.View.extend({

  events: { "click #edit": "edit",
            "click #save": "save",
            "click #cancel": "render"},

  className: "phone-wrap",

  initialize: function(model) {
  	this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.phoneInfo(this.model.viewDetails()));
  },

  edit: function(){
    this.$el.html(templates.editPhoneInfo(this.model.viewDetails()));
  },

  save: function(){
    var digitsOne = ($("#number").val()).substring(0, 3);
    var digitsTwo = ($("#number").val()).substring(4, 7);
    var digitsThree = ($("#number").val()).substring(8, 12);
    var type = $("#type").val();
    this.model.set("digitsOne", digitsOne);
    this.model.set("digitsTwo", digitsTwo);
    this.model.set("digitsThree", digitsThree);
    this.model.set("type", type);
    this.render();
  }

});