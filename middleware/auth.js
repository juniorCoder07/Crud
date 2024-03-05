import jwt from "jsonwebtoken"
const SECRET_key = "dfsjhdjhsdjhajkdhjash";
export const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    console.log(token)
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_key);
      req.userid = user.id;
    } else {
      res.status(401).json({ message: "AUth issue" });
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
