import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const userToken = req.headers.authorization;

    if (!userToken) return res.status(401).json({ error: "Unauthorized User" });
    const token = userToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.userData = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export default auth;
