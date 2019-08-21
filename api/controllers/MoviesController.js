/**
 * MoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function(req,res){
    Movies.find({}).exec(function(err,ms){
        return res.view('movies/list',{movies:ms});
    });
  },
  create: function(req, res) {
    Movies.create({
          title: req.body.title,
          description: req.body.description,
          rating: req.body.rating
    }).exec(function(err){
        if (err) {
            return res.send(500, {error: 'Database error'});
        }
        return res.redirect('/movies');
    });
  },
  show: function(req,res){
    Movies.findOne({id: req.params.id}).exec(function (err,movie){
      return res.view('movies/show',{movie:movie})
    });
  },
};

