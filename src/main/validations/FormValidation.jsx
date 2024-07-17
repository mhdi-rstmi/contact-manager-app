import * as yup from "yup";

const contactSchema = yup.object().shape({
    fullname: yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    photo: yup.string().url("آدرس معتبر نیست").required("تصویر مخاطب الزامی می باشد"),
    mobaile: yup.number().required("شماره موبایل الزامی می باشد"),
    email: yup.string().email("آدرس ایمیل معتبر نیست").required("آدرس ایمیل الزامی می باشد"),
    job: yup.string().nullable(),
    group: yup.string().required("انتخاب گروه الزامی می باشد")
});

export default contactSchema;