const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =
    "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());

let videoGames = [
    {
        title: "GTAV",
        rating: undefined,
        id: 1
    },
    {
        title: "Pong",
        rating: undefined,
        id: 2
    },
    {
        title: "The Witcher 3: Wile Hunt",
        rating: undefined,
        id: 3
    },
    {
        title: "Fallout 4",
        rating: undefined,
        id: 4
    },
    {
        title: "FAILout 76",
        rating: undefined,
        id: 5
    },
    {
        title: "NBA Street: Vol 2",
        rating: undefined,
        id: 6
    },
    {
        title: "World of Warcraft",
        rating: undefined,
        id: 7
    },
    {
        title: "No Man Sky",
        rating: undefined,
        id: 8
    },
];

let nextId = 9;

function authenticator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === token) {
        next();
    } else {
        res.status(403).json({ error: "User must be logged in to do that." });
    }
}

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "test" && password === "test") {
        req.loggedIn = true;
        setTimeout(() => {
            res.status(200).json({
            payload: token
            });
        }, 1000);
    } else {
        res
            .status(403)
            .json({ error: "Username or Password incorrect. Please see Readme" });
    }
    });

    app.get("/api/videoGames", authenticator, (req, res) => {
        res.send(videoGames);
    });

    app.post("/api/videoGames", authenticator, (req, res) => {
        if (req.body.videoGame !== undefined && req.body.rating !== undefined) {
            const newVideoGame = req.body;
            newVideoGame.id = nextId;
            newVideoGames.push(newVideoGame);
        }
        nextId = nextId + 1;
        res
            .status(201)
            .json(newVideoGames);
    });

    app.put("/api/videoGames/:id", authenticator, (req, res) => {
        if (!req.params.id)
            res.status(400).send("Your request is missing the game id");
        if (req.body.id === undefined || !req.body.title || !req.body.rating) {
            res
            .status(422)
            .send("Make sure your request body has all the fields it needs");
        }
        videoGames = videoGames.map(game => {
            if (`${game.id}` === req.params.id) {
            return req.body;
            }
            return game;
        });
        res.status(200).send(req.body);
    });

    app.delete("/api/videoGames/:id", authenticator, (req, res) => {
        if (!req.params.id)
            res.status(400).send("Your request is missing the game id");
            videoGames = videoGames.filter(game => `${game.id}` !== req.params.id);
        res.status(202).send(req.params.id);
        });

        app.get("/", function(req, res) {
        res.send("App is working 👍");
        });

        app.listen(5000, () => {
        console.log("Server listening on port 5000");
    });