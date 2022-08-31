

module.exports = Controller = {
    index(req,res){
        res.render('home.ejs')
    },
    about(req,res){
        res.render('about.ejs')
    },
    portifolio(req,res){
        res.render('portifolio.ejs')
    }
}

