module.exports = function(app){
  // set notice page
  app.get(['/Notice', '/Notice/:id'], function(req, res){
  		res.render('notice');
  });
}
