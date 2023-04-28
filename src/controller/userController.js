import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Jwt  from "jsonwebtoken";
import { TOKEN_KEY } from "../../config/index.js";
export const userController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(email && name && password )) {
      res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });
   //  if (oldUser.email ===  email) {
   //     res.status(409).send("User Already exist. Please login");
   //  }
   const encryptedPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const tokenCreate = Jwt.sign(
      { user_id: createUser._id, email },
      TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    createUser.token = tokenCreate;
    res.status(201).json(createUser);
  } catch (err) {
    console.log(err);
  }
};
