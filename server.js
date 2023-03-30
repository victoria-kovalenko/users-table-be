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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongodb_1 = require("mongodb");
var _a = require('mongodb'), MongoClient = _a.MongoClient, ServerApiVersion = _a.ServerApiVersion;
var uri = "mongodb+srv://victoriakovalenkojob:Vv0820132525@cluster0.svj5c27.mongodb.net/?retryWrites=true&w=majority" || process.env.MONGODB_URI;
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
    var collection = client.db("thinkmobiles_tt").collection("users");
    if (!err) {
        console.log('connect');
    }
    else {
        console.log(err);
    }
});
var PORT = process.env.PORT || 3030;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.connect(function (err) {
                    var collection = client.db("thinkmobiles_tt").collection("users");
                    collection.find({}).toArray(function (err, docs) {
                        res.send(docs);
                        res.end();
                    });
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.get('/users/:userId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                return [4 /*yield*/, client.connect(function (err) {
                        var collection = client.db("thinkmobiles_tt").collection("users");
                        collection.find({ _id: (0, mongodb_1.ObjectId)(userId) }).toArray(function (err, docs) {
                            res.send(docs);
                            res.end();
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.patch('/users/:userId', express_1.default.json(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, count, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                data = {
                    title: req.body.title,
                    description: req.body.description,
                    start: req.body.start,
                    end: req.body.end,
                };
                return [4 /*yield*/, client.connect(function (err) { return __awaiter(void 0, void 0, void 0, function () {
                        var collection;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, client.db("thinkmobiles_tt").collection("users")];
                                case 1:
                                    collection = _a.sent();
                                    collection.find({ _id: (0, mongodb_1.ObjectId)(userId) }).toArray(function (err, docs) {
                                        var previousCount = 1;
                                        if (docs[0] && docs[0].count != null) {
                                            previousCount = 1 + (+docs[0].count);
                                        }
                                        var count = previousCount.toString();
                                        collection.updateOne({ _id: (0, mongodb_1.ObjectId)(userId) }, { $set: __assign(__assign({}, data), { count: count }) }, { upsert: true }, function (err, result) {
                                            res.end();
                                        });
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.post('/user', express_1.default.json(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = {
                    id: req.body.id,
                    name: req.body.name,
                    surname: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                };
                return [4 /*yield*/, client.connect(function (err) {
                        var collection = client.db("thinkmobiles_tt").collection("users");
                        collection.insertOne(data, function (err, result) {
                            if (err) {
                                res.send({ 'error': 'An error has occurred' });
                                return;
                            }
                        });
                        res.send(data);
                        res.end();
                        client.close();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT, "..."));
});
