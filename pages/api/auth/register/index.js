import EncryptPassword from "@/functions/utils/EncryptPassword";
import { createNewData } from "@/services/serviceOperations";

const handler = async (req, res) => {
  if (!req) {
    return res
      .status(500)
      .json({ status: "error", message: "Bir hata oluştu!" });
  }

  if (req.method === "POST" && req.body) {
    try {
      const data = req.body;

      //bilgileri kontrol et
      if (!data.password || !data.email) {
        throw new Error("E-posta ve şifre gereklidir!");
      }
      //şifremiz ve emailimiz var. şifreyi encrypt et

      data.password = await EncryptPassword(data.password);
      //şifreyi hashledik.

      //database'e userı kaydet:
      const userFromDB = await createNewData("user", data);

      if (userFromDB.error || !userFromDB) {
        throw new Error("Bir hata oluştu");
      } else {
        return res.status(200).json({
          success: true,
          status: "success",
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, status: "error", error: error.message });
    }
  } else {
    return res.status(405).json({
      status: "error",
      message: "Bu sayfaya bu şekilde erişim sağlanamaz!",
    });
  }
};

export default handler;
