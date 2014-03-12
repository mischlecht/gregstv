
/*
 * App router
 */

function index(req, res) {
	res.render('index', { title: 'Home' });
};

function about(req, res) {
	res.render('about', { title: 'Our Story' });
};

function localad(req, res) {
    res.render('localad', { title: 'Local Ad' });
};

function rental(req, res) {
    res.render('rental', { title: 'Just Ask Rental' });
};

function login(req, res) {
    // Perhaps substitute for a modal popup
    res.render('login', { title: "Login" });
}

function register(req, res) {
    res.render('register', { title: "Register" });
}

function userinfo(req, res) {
    res.render('userinfo', { title: "User Info" });
}


exports.index = index
exports.about = about
exports.localad = localad
exports.rental = rental
exports.login = login
exports.register  = register
exports.userinfo = userinfo


// Various other functions



/*function initialize() {
    var mapcanvas = document.getElementById('mapcanvas');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapcanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

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