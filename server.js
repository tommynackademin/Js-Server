const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());


app.post("/trigger-action", async (req, res) => {
    // Your code for triggering the action goes here
    try {
        // check the request body for validation or any other required things
        // if everything is fine, then proceed
        const { repo, owner, token } = req.body;
        const response = await axios.post(
          `https://api.github.com/repos/${owner}/${repo}/dispatches`,
          { event_type: "custom_event" },
          {
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        res.send(response.data);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });
    
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");



});