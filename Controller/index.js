const totalList = require("../Model/Total.json");
const ColdDrinkList = require("../Model/ColdDrink");
const dairyProductList = require("../Model/DairyProduct");
const gummiesList = require("../Model/Gum");
const hookhaList = require("../Model/Hookha");
const MouthFreshnerList = require("../Model/Mouth");
const rollingList = require("../Model/Rolling");
const snackList = require("../Model/Snack");
const variousSmallCatagoryList = require("../Model/VariousSmallCatagory.json");
const variousSmallCatagory1List = require("../Model/VariousSmallCatagory1.json");
const menuList = require("../Model/Menu.json");


exports.getMenu = (req,res) =>{
    res.status(200).json({menuList : menuList});
}


exports.getVariousSmallCatagory = (req,res) =>{
    res.status(200).json({variousSmallCatagoryList : variousSmallCatagoryList});
}


exports.getVariousSmallCatagory1 = (req,res) =>{
    res.status(200).json({variousSmallCatagory1List : variousSmallCatagory1List});
}
// ****************Total List*****************

exports.getTotalByName1 = (req,res) => {
    const name = req.params.name;
    const filterdTotal = totalList.filter(rest => rest.name == name);
    if(filterdTotal.length > 0){
        res.status(200).json(filterdTotal);
    }else{
        res.status(404).json(
            {message : "Please provide correct coldrink name"});
    }
}

exports.getTotalByName = (req,res) => {
    const city = req.params.city;
    const filterdTotal = totalList.filter(rest => rest.city == city);
    if(filterdTotal.length > 0){
        res.status(200).json(filterdTotal);
    }else{
        res.status(404).json(
            {message : "Please provide correct coldrink name"});
    }
}

// *****************coldDrinkList****************

exports.getAllColdDrink = (req, res) => {
    ColdDrinkList.find()
             .then(ColdDrinkList => res.status(200).json({ ColdDrinkList }))
             .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
     };

     exports.getColdDrinkByName = (req, res) => {
        const name = req.params.name;
        ColdDrinkList.find({ name: name })
            .then(filteredColdDrinks => {
                if (filteredColdDrinks.length > 0) {
                    res.status(200).json(filteredColdDrinks);
                } else {
                    res.status(404).json({ message: "Please provide correct cold drink name" });
                }
            })
            .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
    };


// ***************AllDairyProduct******************
exports.getAllDairyProduct = (req, res) => {
    dairyProductList.find()
        .then(dairyProductList => res.status(200).json({ dairyProductList})) // Renamed variable
        .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};

exports.getAllDairyProductByName = (req, res) => {
    const name = req.params.name;
    dairyProductList.find({ name: name })
        .then(filteredDairyProducts => {
            if (filteredDairyProducts.length > 0) {
                res.status(200).json(filteredDairyProducts);
            } else {
                res.status(404).json({ message: "Please provide correct dairy product name" });
            }
        })
        .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};

// ********************AllGummie**************************


exports.getAllGummies = (req,res) =>{
    gummiesList.find()
    .then(gummiesList => res.status(200).json({ gummiesList})) // Renamed variable
    .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
}

exports.getAllGummiesByName = (req, res) => {
    const name = req.params.name;
    gummiesList.find({ name: name })
        .then(filteredGumies => {
            if (filteredGumies.length > 0) {
                res.status(200).json(filteredGumies);
            } else {
                res.status(404).json({ message: "Please provide correct Gummies name" });
            }
        })
        .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};
// ************************AllHookha**************************
exports.getAllHookha = (req,res) =>{
   hookhaList.find()
   .then(hookhaList => res.status(200).json({hookhaList}))
   .catch(error => res.status(404).json({message:"Server error", error: error.message }))
}
exports.getAllHookhaByName = (req,res) => {
    const name = req.params.name;
    hookhaList.find({ name: name })
        .then(filteredHookha => {
            if (filteredHookha.length > 0) {
                res.status(200).json(filteredHookha);
            } else {
                res.status(404).json({ message: "Please provide correct Gummies name" });
            }
        })
        .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};
// *******************AllMouthFreshner************************

exports.getAllMouthFreshner = (req, res) => {
    MouthFreshnerList.find()
             .then(MouthFreshnerList => res.status(200).json({ MouthFreshnerList }))
             .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
     };
exports.getAllMouthFreshnerByName = (req,res) => {
    const name = req.params.name;
    MouthFreshnerList.find({ name: name })
        .then(filteredMouthFreshner => {
            if (filteredMouthFreshner.length > 0) {
                res.status(200).json(filteredMouthFreshner);
            } else {
                res.status(404).json({ message: "Please provide correct Mouth fershner name" });
            }
        })
        .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};
// ********************AllRolling************************

exports.getAllRolling = (req, res) => {
    rollingList.find()
             .then(rollingList => res.status(200).json({ rollingList }))
             .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
     };
exports.getAllRollingByName = (req,res) => {
    const name = req.params.name;
    rollingList.find({ name: name })
    .then(filteredRolling => {
        if (filteredRolling.length > 0) {
            res.status(200).json(filteredRolling);
        } else {
            res.status(404).json({ message: "Please provide correct Roll name" });
        }
    })
    .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};
// *********************AllSnack*************************

exports.getAllSnack = (req, res) => {
    snackList.find()
             .then(snackList => res.status(200).json({ snackList }))
             .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
     };
exports.getAllSnackByName = (req,res) => {
    const name = req.params.name;
    snackList.find({ name: name })
    .then(filteredSnack => {
        if (filteredSnack.length > 0) {
            res.status(200).json(filteredSnack);
        } else {
            res.status(404).json({ message: "Please provide correct Snack name" });
        }
    })
    .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
};
