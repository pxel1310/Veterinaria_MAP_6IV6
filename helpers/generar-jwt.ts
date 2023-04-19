import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";
const generarJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: "7d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

export { generarJWT };
