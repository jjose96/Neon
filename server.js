const express = require('express');
const path = require('path')
var cors = require('cors')
const app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" }));
app.use(cors());
const body_parser = require('body-parser');
var admin = require("firebase-admin");
var serviceAccount = require("./neon-3ac65-d2152f95a92b.json");
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

    function ValidateEmail(email) {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)) {
            return true;
        } else {
            messageStatus = 5;
            res.status(200).json({ 'status': messageStatus });
        }
    }

    function ValidateName(name) {
        if (name.length == 0) {
            messageStatus = 6;
            res.status(200).json({ 'status': messageStatus });
        } else {
            return true;
        }
    }

    EmVal = ValidateEmail(req.body.email);
    NmVal = ValidateName(req.body.name);
    let UserRef = db.collection('Users').doc(req.body.email);
    if (EmVal && NmVal) {
        if (req.body.password != "") {
            if (req.body.password.length < 7) {
                messageStatus = 3;
                res.status(200).json({ 'status': messageStatus });
            } else {
                if (messageStatus != 4) {
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
                    });
                }
            }
        } else {
            messageStatus = 4;
            res.status(200).json({ 'status': messageStatus });
        }
    }

});

app.post('/api/login', function(req, res) {
    email = req.body.email;
    password = req.body.password;
    let UserRef = db.collection('Users').doc(email);
    let getDoc = UserRef.get()
        .then(doc => {
            if (doc.exists) {
                if (password == doc.data().password) {
                    console.log("success");
                    req.session.username = email;
                    console.log(req.session.username);
                    res.status(200).json({ 'status': 1 });
                } else {
                    res.status(200).json({ 'status': 0 });
                }
            }
        })
});
app.post("/api/dashboard", function(req, res) {
    console.log(req.session.username);
    if (req.session.username === undefined) {
        res.status(200).json({ 'status': 0 });
    } else {
        res.status(200).json({ 'status': 1 });
    }
})

app.post("/api/create", function(req, res) {
    if (req.session.username === undefined) {
        res.status(200).json({ 'status': 0 });
    } else {
        let NotesRef = db.collection('Notes').doc(req.session.username);
        let setDoc = NotesRef.set(data);
        messageStatus = 1;
        res.status(200).json({ 'status': messageStatus });
        res.status(200).json({ 'status': 1 });
    }
});
app.listen(process.env.PORT || 8082);
