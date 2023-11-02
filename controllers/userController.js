const { User } = require('../models');
const Model = User


async function find(criteria = {}) {
  try {
    const payload = await Model.find(criteria)
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(err)
  }
}

// searches by username regex
async function searchUser(criteria) {
  const { username } = criteria
  try {
    const payload = await Model.find(
      {
        username:
        {
          $regex: username
        }
      }
    )
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(error)
  }
}

// Not sure if used, findone user
// async function findOne(criteria = {}) {
//   try {
//     const user = await Model.find(criteria).limit(1)
//     return (Array.isArray(payload)) ? payload[0] : payload
//   } catch (err) {
//     if (process.env.NODE_ENV === "development") console.log(err)
//     throw new Error(err)
//   }
// }


async function findById(id) {
  try {
    const payload = await Model.findById(id)
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(error)
  }
}


async function create(body) {
  try {
    const payload = await Model.create(body)
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(error)
  }
}


async function update(criteria, body) {
  try {
    const payload = await Model.findOneAndUpdate(criteria, body, { new: true })
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(error)
  }
}


async function updateById(id, body) {
  try {
    const payload = await Model.findByIdAndUpdate(id, body, { new: true })
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(error)
  }
}


async function remove(id) {
  try {
    const payload = await Model.findByIdAndDelete(id)
    return payload
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error)
    throw new Error(error)
  }
}

module.exports = {
  find,
  // findOne,
  findById,
  create,
  update,
  updateById,
  remove,
  searchUser
}