import User from "../model/user.js";
import expressAsyncHandler from "express-async-handler";

export const createUser = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "No name" });
  }

  const userExist = await User.findOne({
    name: { $regex: name, $options: "i" },
  });
  if (userExist) {
    return res.status(400).json({ message: "name already exist" });
  }

  const numberOfUsers = await User.countDocuments({});
  let lastUser;
  if (numberOfUsers > 0) {
    lastUser = await User.findOne().skip(numberOfUsers - 1);
  }
  const id = lastUser ? lastUser.id + 1 : 1;

  const newUser = await User.create({ name, id });

  res.status(200).json({ id: newUser.id, name: newUser.name });
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const { name } = req.params;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "No name" });
  }

  const userExist = await User.findOne({
    name: { $regex: name, $options: "i" },
  });
  if (!userExist) {
    return res.status(404).json({ message: "name does not exist" });
  }

  const deletedUser = await User.findOneAndRemove({
    name: { $regex: name, $options: "i" },
  });

  res.status(200).json({ message: `${deletedUser.name} deleted successfully` });
});

export const getUser = expressAsyncHandler(async (req, res) => {
  const { name } = req.params;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "No name" });
  }

  const userExist = await User.findOne({
    name: { $regex: name, $options: "i" },
  });
  if (!userExist) {
    return res.status(404).json({ message: "name does not exist" });
  }

  res.status(200).json({ id: userExist.id, name: userExist.name });
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  const { oldName } = req.params;
  const { name } = req.body;

  if (
    !name ||
    typeof name !== "string" ||
    !oldName ||
    typeof oldName !== "string"
  ) {
    return res.status(400).json({ message: "No name" });
  }

  const userExist = await User.findOne({
    name: { $regex: oldName, $options: "i" },
  });
  if (!userExist) {
    return res.status(404).json({ message: "name does not exist" });
  }

  const newNameExist = await User.findOne({
    name: { $regex: name, $options: "i" },
  });

  if (newNameExist) {
    return res
      .status(404)
      .json({ message: `${newNameExist.name} exist already` });
  }

  const newName = await User.findOneAndUpdate(
    { name: { $regex: oldName, $options: "i" } },
    { name },
    { new: true }
  );

  res.status(200).json({ id: newName.id, name: newName.name });
});
