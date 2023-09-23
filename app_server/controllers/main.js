/* GET HOMEPAGE */
const index = (req, res) => { // creates index function
    res.render('index',{title: 'Express'}) ; // includes controller code for the homepage
} ; 
// exposes the index function as amethod
module.exports = {
    index
} ; 
