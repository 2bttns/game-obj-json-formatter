"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var fs = require("fs");
var path = require("path");
// Define the output shape
var outputShape = {
    gameObjects: [
        {
            id: " ",
            name: " ",
            description: " ",
            tagIds: []
        }
    ],
    tags: [
        {
            id: " ",
            name: " ",
            description: " "
        }
    ]
};
// Create a readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to prompt the user for input
function prompt(question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
}
// Function to convert the input JSON based on user mappings
function convertJSON(input, mappings) {
    var output = __assign({}, outputShape);
    // Map the gameObjects based on user mappings
    if (input.metadata && Array.isArray(input.metadata)) {
        output.gameObjects = input.metadata.map(function (item) {
            var gameObject = __assign({}, outputShape.gameObjects[0]);
            for (var key in mappings) {
                if (mappings.hasOwnProperty(key)) {
                    var inputKey = mappings[key];
                    if (inputKey !== undefined) {
                        var inputValue = item[inputKey];
                        gameObject[key] = inputValue !== undefined ? inputValue : gameObject[key];
                    }
                }
            }
            return gameObject;
        });
    }
    return output;
}
// Function to start the conversion process
function startConversion() {
    return __awaiter(this, void 0, void 0, function () {
        var inputPath, inputData, inputJSON, outputFolder, outputFileName, outputPath, mappings, fields, _i, fields_1, field, fieldType, promptMessage, key, outputData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, prompt("Enter the path of the input JSON file: ")];
                case 1:
                    inputPath = _a.sent();
                    inputData = fs.readFileSync(inputPath, 'utf-8');
                    inputJSON = JSON.parse(inputData);
                    outputFolder = path.join(__dirname, 'output');
                    if (!fs.existsSync(outputFolder)) {
                        fs.mkdirSync(outputFolder);
                    }
                    outputFileName = 'ready-for-upload.json';
                    outputPath = path.join(outputFolder, outputFileName);
                    mappings = {};
                    fields = Object.keys(outputShape.gameObjects[0]);
                    _i = 0, fields_1 = fields;
                    _a.label = 2;
                case 2:
                    if (!(_i < fields_1.length)) return [3 /*break*/, 5];
                    field = fields_1[_i];
                    fieldType = typeof outputShape.gameObjects[0][field];
                    promptMessage = "Which key in your JSON corresponds to \"".concat(field, "\" with value type \"").concat(fieldType, "\"? Enter \"none\" if none exists.");
                    return [4 /*yield*/, prompt(promptMessage)];
                case 3:
                    key = _a.sent();
                    mappings[field] = key === 'none' ? undefined : key;
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    outputData = JSON.stringify(convertJSON(inputJSON, mappings), null, 2);
                    // Write the output JSON file
                    fs.writeFileSync(outputPath, outputData, 'utf-8');
                    console.log("Output JSON file saved successfully!");
                    rl.close();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error("An error occurred:", error_1);
                    rl.close();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Start the conversion process
startConversion();
