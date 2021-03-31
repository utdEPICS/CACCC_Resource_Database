const Intake = require("../models/intake")
const serveIndex = require("serve-index")
const uploadDir = process.env.uploadDir + "/intake/"

module.exports = (router) => router.post("/", async (req, res) => {
    const intake = new Intake(req.body)
    await intake.save()
    // TODO: PDF gen here
  })
  .get("/", serveIndex(uploadDir))