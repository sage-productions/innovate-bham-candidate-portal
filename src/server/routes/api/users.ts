import * as express from "express";
// import db from "../../db"

const router = express.Router();



router.get("/", async (req, res) => {
  try {
    res.json({ msg: "get all test" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "my code sucks, let me know!", error });
  }
});

router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
  try {
    res.json({id, msg: "get one test" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "my code sucks, let me know!", error });
  }
});

router.post("/", async (req, res) => {
    const newBody = { ...req.body };
  try {
    res.json({ msg: "post test", bodyTest: newBody});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "my code sucks, let me know!", error });
  }
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const editBody = { ...req.body };
    try {
    res.json({id, msg: "put test", testbody: editBody});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "my code sucks, let me know!", error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    res.json({ id, msg: "delete test" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "my code sucks, let me know!", error });
  }
});

export default router;
