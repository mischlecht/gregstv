
/*
 * App router
 */

function index(req, res) {
	res.render('index', { title: 'Home' });
};

function about(req, res) {
	res.render('about', { title: 'About Greg\'s True Value' });
};

function rewards(req, res) {
    var win = window.open("https://rewards.truevalue.com/", '_blank');
    win.focus();
};

function localad(req, res) {
    res.render('localad', { title: 'Local Ad' });
};

function rental(req, res) {
    res.render('rental', { title: 'Just Ask Rental' });
};



exports.index = index
exports.about = about
exports.rewards = rewards
exports.localad = localad
exports.rental = rental



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