const db = require("../models");

module.exports = (app) => {

    // Get all examples
    app.get("/api/results", (req, res) => {
        if (req.isAuthenticated()) {
            db.user.findOne(
                {
                where: {
                   id: req.session.passport.user
                }
            }).then(function (dbResults){
                db.results.findAll({
                    include: [db.user],
                    where: {
                        id: req.session.passport.user
                    }
                }).then(function (dbResults){
                    res.render("favRecipes", {
                        title: dbResults,
                        ingredients: dbResults
                    })
                })
            })
        };
            
        //     .then((dbResults) => {
        //             res.json(dbResults);  
        //         });
        // } else {
        //     res.redirect("/search");
        // }    

    // app.get("/api/results/:userID", (req, res) => {
    //     db.users.findOne({
    //         where: {
    //             id: req.session.passport.userID
    //         }
    //     }).then(dbusers => {
    //         db.results.findAll({
    //             include: [db.users],
    //             where: {
    //                 userId: req.params.id
    //             }
    //         }).then(dbresults => {
    //             res.render("favRecipes.handlebars", {
    //                 title: dbresults,
    //                 ingredients: dbresults
    //             });
    //         });
    //     });
    // });

    // app.post("/api/results", (req, res) => {
    //     console.log("post results");

    //     const resultsObj = {
    //         title: req.body.title,
    //         ingredients: req.body.ingredients,
    //         userID: req.session.passport.user.id
    //     };
    //     console.log(resultsObj);
    //     db.results.create(resultsObj).then(dbresults => {
    //         res.json(dbresults);
    //         console.log("created");
    //     })
    // }); 


    });
    console.log("favRecipeRoutes available");
}