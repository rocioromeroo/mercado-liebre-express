var path = require('path');
var fs = require('fs');

module.exports = {

      register: function(req, res){
        res.render('user/register')
      },

      login:function(req, res){
            res.render("user/login")
      },        

      
  }
  