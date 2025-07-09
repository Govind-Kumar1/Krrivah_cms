const { user } = require("../prismaClient");
const ApiResponse = require("../utils/apiResponse");
const bcrypt = reqire("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const totalUsers = await prisma.user.count();
    if (totalUsers > 3) {
      return res.status(400).json({
        error: "Maximum number of users reached",
      });
    }
    const userExists = await prisma.user.findUnique({
      where: { email },
    });
    if (userExists) {
      return res.status(400).json({
        error: "User Already exixts",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    return res
      .status(201)
      .json(new ApiResponse(201, "User created successfully", user));
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new ApiResponse(401, "Invalid email or password");
    }
    const isMatch = await bcrypt.comapre(password, user.password);
    if (!isMatch) {
      return new ApiResponse(401, "Invalid email or password");
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // use HTTPS in production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    };

    res.cookie("token", token, options);

    res.status(200).json(new ApiResponse(200, "login successful", { user }));
  } catch (error) {
    next(error);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json(new ApiResponse(200, "logout successful"));
};
