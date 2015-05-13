var cardViews = [];

var CardCollection = Backbone.Collection.extend({

  model: CardModel

});

var CardModel = Backbone.Model.extend({

  defaults: {
    digitsOne: "3504",
    digitsTwo: "3240",
    digitsThree: "5313",
    digitsFour: "1564",
    date: "JUN 18",
    code: "999",
    zip: "55555",
  },

  viewDetails: function() {
    var details = this.toJSON();
    return details;
  }

});


var CardView = Backbone.View.extend({

  events: { "click #edit": "edit",
            "click #save": "save",
            "click #cancel": "render"},

  className: "data-wrap",

  initialize: function(model) {
  	this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.cardInfo(this.model.viewDetails()));
  },

  edit: function(){
    this.$el.html(templates.editCardInfo(this.model.viewDetails()));
  },

  save: function(){
    var digitsOne = ($("#number").val()).substring(0, 4);
    var digitsTwo = ($("#number").val()).substring(5, 9);
    var digitsThree = ($("#number").val()).substring(10, 14);
    var digitsFour = ($("#number").val()).substring(15, 19);
    var date = $("#date").val();
    var code = $("#code").val();
    var zip = $("#zip").val();
    this.model.set("digitsOne", digitsOne);
    this.model.set("digitsTwo", digitsTwo);
    this.model.set("digitsThree", digitsThree);
    this.model.set("digitsFour", digitsFour);
    this.model.set("date", date);
    this.model.set("code", code);
    this.model.set("zip", zip);
    this.render();
  }



});