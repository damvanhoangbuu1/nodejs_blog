class SiteController {

    // [GET] /
    index(req, res){
        res.render('home');
    }

    // [GET] /contact
    contact(req,res){
        res.render('contact');
    }
}

module.exports = new SiteController;
