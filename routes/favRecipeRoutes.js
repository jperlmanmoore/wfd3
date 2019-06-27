const db = require("../models");

module.exports = (app) => {

    app.get("/api/users", (req, res) => {
        db.users.findAll({
            include: [{
                model: db.favs,    
            }]
        }).then(users => {
            const resObj = users.map(user => {
                return Object.assign(
                    {},
                    {
                        user_id: user.user_id,
                        username: username,
                        favs: user.favs.map(post => {
                            return Object.assign(
                                {},
                                {
                                    fav_id: fav.id,
                                    user_id: fav.user_id,
                                    title:
                                }
                                
                            )
                        })
                    }
                )
            })
        })
    })




    // Get all examples
    // app.get("/api/results", (req, res) => {
        
    //         db.user.findOne(
    //             {
    //             where: {
    //                id: req.session.passport.user
    //             }
    //         }).then(function (dbResults){
    //             db.results.findAll({
    //                 include: [db.user],
    //                 where: {
    //                     id: req.session.passport.user
    //                 }
    //             }).then(function (dbResults){
    //                 res.render("favRecipes", {
    //                     title: dbResults,
    //                     ingredients: dbResults
    //                 });
    //             });
    //         });
       
            
       

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
