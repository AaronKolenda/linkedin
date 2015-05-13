var Header = Backbone.Model.extend({

  defaults: {
  	cover: "https://unsplash.imgix.net/uploads/14126758789351371c7ec/aa322c2d?fit=crop&fm=jpg&h=700&q=75&w=1050;",
    avatar: "http://png.findicons.com/files/icons/2198/dark_glass/128/emoticon.png",
    name: "Johnny McJagger",
    bio: "I was born and raised in Arkansas, moved to the Yukon when I was seventeen, and after learning to kill an grizzly bear with my bear hands, decided it was time for a change. I took up computer programming and now I'm here.",
    facebook: "Link to Facebook",
    twitter: "Link to Twitter",
    linkedin: "Link to Linkedin"
  },

  viewDetails: function() {
  	var details = this.toJSON();
  	return details;
  }

});

var HeaderView = Backbone.View.extend({

  events: { "click #edit": "edit",
            "click #cancel": "render",
            "click #save": "save"},

  className: "header",

  initialize: function(model) {
  	this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(templates.headerInfo(this.model.viewDetails()));
    $(".header-container").css("background-image", "url(" + this.model.get("cover") + ")");
    console.log(this.model.get("cover"));
  },

  edit: function(){
    this.$el.html(templates.editHeaderInfo(this.model.viewDetails()));
  },

  save: function(){
    var cover = $("#cover").val();
    var avatar = $("#avatar").val();
    var name = $("#name").val();
    var bio = $("#bio").val();
    var facebook = $("#facebook").val();
    var twitter = $("#twitter").val();
    var linkedin = $("#linkedin").val();
    this.model.set("cover", cover);
    this.model.set("avatar", avatar);
    this.model.set("name", name);
    this.model.set("bio", bio);
    this.model.set("facebook", facebook);
    this.model.set("twitter", twitter);
    this.model.set("linkedin", linkedin);
    this.render();
  }

});




