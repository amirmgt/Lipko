const { static } = require('express');
const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getThisYear', () => {
    thisYear = new Date().getFullYear();
    year = thisYear - 10;
    return year;
})

let app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    let checkYear = new Date().getFullYear();
    if(checkYear === 2020 ){
        next();
    }
})

app.get('/', (req, res) => {

    res.render('index.hbs', {
        pageTitle: 'main page'
    })
})

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle:"خانه",
        welcomeMessage: 'wlcome visitors to africa',
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'درباره ما',
    })
})

app.get('/contact', (req, res) => {
    res.send('this is contact page')
})

app.listen(5010,()=>{
    console.log("server is running on port 5010");
 });