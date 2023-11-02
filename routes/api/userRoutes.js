const router = require('express').Router();
const { 
  find,
  findById,
  create,
  updateById,
  remove,
  searchUser
} = require('../../controllers/userController');


router.get("/", async (req, res) => {
  try {
    const users = await find(req.query)
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).json({ message: "Error getting users", error })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const user = await findById(req.params.id)
    return res.status(200).json({ user })
  } catch (error) {
    return res.status(500).json({ message: "Error getting user", error })
  }
})

router.post("/", async (req, res) => {
  try {
    const user = await create(req.body)
    return res.status(201).json({ message: "User created", user })
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const user = await updateById(req.params.id, req.body, { new: true})
    return res.status(201).json({ message: "User updated", user })
  } catch (error) {
    return res.status(500).json({ message: "Error updating user", error })
  }
})

router.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const user = await remove(id)
    return res.status(201).json({ message: "User deleted", user })
  } catch(err) {
    return res.status(500).json({ message: "Error deleting user", error })
  }
})


module.exports = router;