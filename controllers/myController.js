
exports.juego = (req, res) => {
    res.status(200).render('juego'); 
};

exports.home = (req, res) => {
    res.status(200).render('principal'); 
};
