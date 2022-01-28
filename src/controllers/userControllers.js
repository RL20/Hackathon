const User = require("../models/user");

//get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: " Internal Server Error" });
  }
};

//get user by id
const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOne({ _id });
    console.log("user", user);
    if (!user) {
      console.log("userinside", user);
      return res.status(404).send(`User ${_id}  not found`);
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: " Internal Server Error" });
  }
};

//add user
const addUser = async (req, res) => {
  const user = await new User(req.body);
  try {
    console.log(user);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error });
    // res.status(400).send({ message: "Bad Request" });
  }
};

//update user
const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  console.log("req.body", req.body);
  const allowUpdates = ["name", "cash", "credit", "email", "password"];
  const isValidOperation = updates.every((update) => {
    return allowUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }
  try {
    //!we will rewrite findByIdAndUpdate becuse we can't use the save methos in this way
    //!instead we will use findById
    // const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const user = await User.findById(req.params.id);
    //? we want to update dinamicly the user and not hardcore the fileld the th user want to tupdat
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save(); // this where our save middleware will be execute

    if (!user) {
      return res.status(404).send({ error: `no such ${req.params.id} to update` });
    }
    res.status(200).send(user);
  } catch (error) {
    // res.status(400).send({ message: "Bad Request" });
    res.status(400).send({ error });
  }
};

//Remove user
const removeUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    if (!user) {
      return res.status(404).send({ error: `User ${req.params.id}  not found` });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "Bad Request" });
  }
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  removeUser,
};
