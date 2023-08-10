import * as yup from 'yup';// install add yup diyerek indirip burada kullanırız ve validasyonları yapmamıza olanak sağlar!

const validations=yup.object().shape({
email:yup.string().email('geçerli bir email adresi giriniz').required('zorunlu alan'),
password:yup.string().min(5,'parolanız en az 5 karakterden oluşmalıdır').required('zorunlu alan'),
passwordConfirm:yup.string().oneOf([yup.ref('password')],'parolalar uyuşmuyor').required('zorunlu alan'),
})

export default validations;
//buradaki validasyonları nerede uygulamak isterseniz oraya import edin biz buradakileri signUp içerisnde kullanacağımız için oraya import ederiz!
//buradaki isimlendirmeler ile initialValues'daki isimlendirmeler eşleşmelidir.