"use strict";
exports.__esModule = true;
var express_1 = require("express");
var handeler_js_1 = require("../../handelers/handeler.js");
var router = express_1["default"].Router();
// Get all company employee
router.get("/getAllEmp", handeler_js_1["default"].getAllEmp);
router.post("/insertEmp", handeler_js_1["default"].insertOneEmployee);
router.put("/updateSalary", handeler_js_1["default"].updateOneEmpSalary);
router["delete"]("/deleteOneEmp", handeler_js_1["default"].deleteOneEmp);
exports["default"] = router;
