const express = require('express');
const path = require('path')
var cors = require('cors')
const app = express();
app.use(cors());
const body_parser = require('body-parser');
var admin = require("firebase-admin");
var serviceAccount = require("neon-3ac65-d2152f95a92b.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://neon-3ac65.firebaseio.com"
});
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true
}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Neon'));
var db = admin.firestore();

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/Neon/index.html'));
});
app.post('/api/signup', function(req, res) {
    hello = req.body;
    messageStatus = 0;
    let data = {
        name: req.body.name,
        password: req.body.password
    };

    let UserRef = db.collection('Users').doc(req.body.email);
    let getDoc = UserRef.get().then(doc => {
        if (!doc.exists) {
            let setDoc = UserRef.set(data);
            messageStatus = 1;
            res.status(200).json({ 'status': messageStatus });

        } else {
            console.log('Document data:', doc.data());
            messageStatus = 2;
            res.status(200).json({ 'status': messageStatus });
        }
    })
});

app.listen(8081);