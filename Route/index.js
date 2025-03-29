const express = require("express");
const router = express.Router();
const controller = require("../Controller/index"); // Make sure this path is correct!


router.get("/SelectAds/:city", controller.getTotalByName);
router.get("/SelectAds", controller.getTotalByName);

router.get("/ColdDrink", controller.getAllColdDrink);
router.get("/ColdDrinkName/:name", controller.getColdDrinkByName);

router.get("/DairyProduct", controller.getAllDairyProduct);
router.get("/DairyProductName/:name", controller.getAllDairyProductByName);

router.get("/Gummies", controller.getAllGummies);
router.get("/GummiesName/:name", controller.getAllGummiesByName);

router.get("/Hookha", controller.getAllHookha);
router.get("/HookhaName/:name", controller.getAllHookhaByName);

router.get("/MouthFreshner", controller.getAllMouthFreshner);
router.get("/MouthFreshnerName/:name", controller.getAllMouthFreshnerByName);

router.get("/Rolling", controller.getAllRolling);
router.get("/RollingName/:name", controller.getAllRollingByName);

router.get("/Snack", controller.getAllSnack);
router.get("/SnackName/:name", controller.getAllSnackByName);

router.get("/VariousSmallCatagory", controller.getVariousSmallCatagory);
router.get("/VariousSmallCatagory1", controller.getVariousSmallCatagory1);
router.get("/Menu", controller.getMenu);

module.exports = router;
