"use strict";
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
        while (_) try {
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
var _a = require('mongodb'), MongoClient = _a.MongoClient, ServerApiVersion = _a.ServerApiVersion;
var uri = "mongodb+srv://victoriakovalenkojob:Vv0820132525@cluster0.svj5c27.mongodb.net/?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(function (err) {
    var collection = client.db("thinkmobiles_tt").collection("users");
    // perform actions on the collection object
    if (!err) {
        console.log('connect');
    }
    else {
        console.log(err);
    }
});
var app = express_1.default();
app.use(cors_1.default());
app.get('/', function (req, res) {
    console.log(req.params);
    res.send('hello world');
    res.end();
});
// const schema = {
//   properties: {
//     _id: 'string',
//     name: 'string',
//     email: 'string',
//     phone: 'string',
//     count: 'string',
//     next: 'string',
//   },
//   primaryKey: '_id'
// };
// const monmodel = mongoose.model("users", schema);
app.post('/users', express_1.default.json(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        data = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            count: req.body.count,
            next: req.body.next,
        };
        // db.collection('users').insertOne(data, (err:any, result:any) => {
        //   if (err) {
        //     res.send({ 'error': 'An error has occurred' });
        //     return;
        //   }
        // });
        // res.status(204);
        // res.end();
        client.connect(function (err) {
            var collection = client.db("thinkmobiles_tt").collection("users");
            // perform actions on the collection object
            if (!err) {
                console.log('connect');
            }
            else {
                console.log(err);
            }
            var db = client.db('thinkmobiles_tt');
            db.collection('users').insertOne(data, function (err, result) {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                    return;
                }
            });
            res.status(204);
            res.end();
            client.close();
        });
        return [2 /*return*/];
    });
}); });
app.listen(3000, function () {
    console.log('http://localhost:3000/');
});
