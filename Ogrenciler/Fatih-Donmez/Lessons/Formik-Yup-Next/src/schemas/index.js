import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Lütfen minumun 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır")
    .required("Kullanıcı adı zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
export const internShipSchema = yup.object().shape({
  name: yup
    .string()
    .required("Adınızı giriniz")
    .min(3, "Adınız en az 3 karakter olmalıdır"),
  surname: yup
    .string()
    .required("Soyadınızı giriniz")
    .min(3, "Soyadınız en az 3 karakter olmalıdır"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .min(18, "Staj yapabilmek için en az 18 yaşında olmalısınız")
    .max(30, "Staj yapabilmek için en fazla 30 yaşında olmalısınız")
    .required("Yaş girmek zorunludur"),
  city: yup.string.required("Şehir Yazınız."),
  type: yup.string().required("Staj türünü seçiniz."),
  length: yup
    .number()
    .min(15, "Staj süresi en az 15 gün olabilir!")
    .max(30, "Staj süresi en fazla 30 gün olabilir!")
    .required("Staj süresini giriniz."),
});
