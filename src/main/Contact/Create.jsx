
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { creatContact } from '../../Services/contactServices';
import Spinner from '../Spinner';
import CreateIMG from './CreateIMG';
import { useNavigate } from 'react-router-dom';
import contactSchema from '../validations/FormValidation';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from 'react-toastify';

const Create = ({ loading, groups }) => {

  // const [getContact, setContact] = useState({
  //   fullname: "",
  //   photo: "",
  //   mobaile: "",
  //   email: "",
  //   job: "",
  //   group: ""
  // })

  const Navigate = useNavigate()


  // const setContactInfo = (e) => {
  //   // setContact({
  //   //   ...getContact,
  //   //   [event.target.name]: event.target.value,
  //   // })

  //   setContact((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     }
  //   })
  // }

  const createContactForm = async (values) => {
    // event.preventDefault();
    try {
      const { status } = await creatContact(values);
      if (status === 201) {
        // setContact({})
        Navigate("/contacts")
        toast.success("مخاطب با موفقیت ساخته شد.")
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }


  return (

    <>
      {
        loading ? (
          <Spinner />
        ) :
          (

            <div className="container pb-50">
              <H2 className='text-center text-info'>ساخت مخاطب جدید</H2>
              <div className="row mt-50 mb-50">
                <div className="col-4 bg-dark rounded-5 py-20 px-40">
                  <Formik
                    initialValues={{
                      fullname: "",
                      photo: "",
                      mobaile: "",
                      email: "",
                      job: "",
                      group: ""
                    }}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                      createContactForm(values);
                    }}
                  >
                    <Form>
                      <div className=" mb-30">
                        <label className="mt-15 text-white"> نام و نام خانوادگی</label>
                        <Field type="text" name='fullname' className="form-control" />
                        <ErrorMessage name='fullname' render={msg => <div className='text-danger'>
                          {msg}
                        </div>} />
                        <label className="mt-15 text-white" > آدرس تصویر </label>
                        <Field type="text" name='photo' className="form-control" />
                        <ErrorMessage name='photo' render={msg => <div className='text-danger'>
                          {msg}
                        </div>} />
                        <label className="mt-15 text-white"> شماره موبایل</label>
                        <Field type="number" name='mobaile' className="form-control" />
                        <ErrorMessage name='mobaile' render={msg => <div className='text-danger'>
                          {msg}
                        </div>} />
                        <label className="mt-15 text-white">آدرس ایمیل </label>
                        <Field type="email" name='email' className="form-control" />
                        <ErrorMessage name='email' render={msg => <div className='text-danger'>
                          {msg}
                        </div>} />
                        <label className="mt-15 text-white"> شغل</label>
                        <Field type="text" name='job' className="form-control" />
                        <ErrorMessage name='job' render={msg => <div className='text-danger'>
                          {msg}
                        </div>} />
                        <label className="mt-15 text-white"> انتخاب گروه</label>
                        <Field as="select" className="form-select form-control" name='group'  >
                          <option value="" >انتخاب گروه</option>
                          {/* To ensure that the groups is a array of objects use groups.length  */}
                          {groups.length > 0 &&
                            groups.map(
                              (group) => (
                                <option key={group.id} value={group.id}>
                                  {group.name}
                                </option>
                              )
                            )
                          }
                        </Field>
                        <ErrorMessage name='group' render={msg => <div className='text-danger'>
                          {msg}
                        </div>} />
                      </div>
                      <div className='text-center'>
                        <input type="submit" className='btn bg-white py-10 px-15 rounded-5 ms-15' value="ایجاد مخاطب" />
                        <Link to="/contacts" className="bg-white btn py-10 px-15 rounded-5" >
                          انصراف
                        </Link>
                      </div>
                    </Form>
                  </Formik>

                </div>
                <CreateIMG />
              </div>
            </div>
          )
      }

    </>
  )
}

export default Create;


const H2 = styled.h2`
padding-bottom:40px ;
  border-bottom: 2px solid skyblue;
`