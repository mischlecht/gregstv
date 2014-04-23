
/*
 * App router
 */

function index(req, res) {
	res.render('index');
};

function about(req, res) {
	res.render('about');
};

function monthlyad(req, res) {
    res.render('monthlyad');
};

function rental(req, res) {
    res.render('rental');
};

function askus(req, res) {
    res.render('askus');
};


exports.index = index
exports.about = about
exports.monthlyad = monthlyad
exports.rental = rental
exports.askus = askus

// Old Code
/*
    exports.userlist = function(db) {
        return function(req, res) {
            var collection = db.get('usercollection');
            collection.find({}, {}, function(e, docs){
                res.render('userlist', {
                    "userlist" : docs
                });
            });
        };
    };

    exports.newuser = function(req, res) {
    	res.render('newuser', { title: 'Add New User'});
    };

    exports.adduser = function(db) {
        return function(req, res) {

            // Get our form values. These rely on the "name" attributes
            var userName = req.body.username;
            var userEmail = req.body.useremail;

            // Set our collection
            var collection = db.get('usercollection');

            // Submit to the DB
            collection.insert({
                "username" : userName,
                "email" : userEmail
            }, function (err, doc) {
                if (err) {
                    // If it failed, return error
                    res.send("There was a problem adding the information to the database.");
                }
                else {
                    // If it worked, set the header so the address bar doesn't still say /adduser
                    res.location("userlist");
                    // And forward to success page
                    res.redirect("userlist");
                }
            });

        }
    }
*/