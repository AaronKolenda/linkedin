var templates = {};
var views = [];

var getTemplates = function(){

  var headerString = $("#header-template").text();
  templates.headerInfo = Handlebars.compile(headerString);

  var editHeaderString = $("#edit-header-template").text();
  templates.editHeaderInfo = Handlebars.compile(editHeaderString);

  /*var singleString = $("#single-task-template").text();
  templates.singleInfo = Handlebars.compile(singleString);

  var statString = $("#stats-template").text();
  templates.statInfo = Handlebars.compile(statString);*/

  };

var Header = Backbone.Model.extend({

  defaults: {
  	cover: "",
    avatar: "",
    name: "nameex",
    bio: "bioex",
    facebook: "fex",
    twitter: "twex",
    linkedin: "liex"
  },

  viewDetails: function() {
  	var details = this.toJSON();
  	return details;
  }

});

var HeaderView = Backbone.View.extend({

  events: { "click #edit": "edit"},

  className: "header",

initialize: function(model) {
  	this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.headerInfo(this.model.viewDetails()));
  },

  edit: function(){
    
  }

});

$(document).on("ready", function(){
  getTemplates();
  var defaultHeader = new Header;
  var defaultHeaderView = new HeaderView(defaultHeader);
  $("#header-container").append(defaultHeaderView.$el);
});