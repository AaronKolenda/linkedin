var workViews = [];

var WorkCollection = Backbone.Collection.extend({

  model: WorkModel

});

var WorkModel = Backbone.Model.extend({

  defaults: {
    name: "Company",
    title: "Manager",
    description: "Managed People",
    start: "June 8th, 2012",
    end: "May 21, 2015"
  },

  viewDetails: function() {
    var details = this.toJSON();
    return details;
  }

});


var WorkView = Backbone.View.extend({

  events: { "click #edit": "edit",
            "click #save": "save",
            "click #cancel": "render"},

  className: "data-wrap",

  initialize: function(model) {
  	this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.workInfo(this.model.viewDetails()));
  },

  edit: function(){
    this.$el.html(templates.editWorkInfo(this.model.viewDetails()));
  },

  save: function(){
    var companyName = $("#company-name").val();
    var title = $("#title").val();
    var description = $("#description").val();
    var start = $("#start").val();
    var end = $("#end").val();
    this.model.set("name", companyName);
    this.model.set("description", description);
    this.model.set("title", title);
    this.model.set("start", start);
    this.model.set("end", end);
    this.render();
  }

});