class SearchController {

    // [GET] /search
    index(req, res){
        res.render('search');
    }

    // [GET] /search/:slug
    show(req,res){
        res.send('Search detail');
    }
}

module.exports = new SearchController;
