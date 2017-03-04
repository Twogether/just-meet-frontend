export default (app) => {
  app.get('*', function(req, res, next) {
    res.status(200);
    res.render('index.ejs', {});
  });
};
