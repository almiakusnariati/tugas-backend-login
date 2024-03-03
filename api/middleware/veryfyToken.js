import jwt from "jsonwebtoken";

export const veryfytoken = (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return req.status(401).send("Unauthorized");
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(error){
        res.status(403).send("invalid");
    }
}
// export{veryfyToken}
// import jwt from 'jsonwebtoken';

// const veryfytoken = (req, res, next) => {
//     // Mendapatkan token dari header atau cookie atau tempat lain sesuai kebutuhan Anda
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized: Missing token' });
//     }

//     try {
//         // Verifikasi token
//         const decoded = jwt.verify(token, 'your-secret-key'); // Ganti 'your-secret-key' dengan secret key yang digunakan untuk sign token
//         req.user = decoded; // Menyimpan informasi pengguna yang terdekripsi ke dalam req.user
//         next(); // Lanjut ke middleware atau handler berikutnya
//     } catch (error) {
//         console.error('Error in verifying token:', error);
//         return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// };

// export { veryfytoken };
