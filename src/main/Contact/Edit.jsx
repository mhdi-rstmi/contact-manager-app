import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getContact, updateContact } from '../../Services/contactServices';
import Spinner from "../Spinner";
import CreateIMG from "./CreateIMG";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from 'react-toastify';
import contactSchema from '../validations/FormValidation';

const Edit = ({ loading, groups, setLoading }) => {

    const { contactID } = useParams();
    const Navigate = useNavigate()

    const [editContact, setEditContact] = useState({
        fullname: "",
        photo: "",
        mobaile: "",
        email: "",
        job: "",
        group: "",
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactData } = await getContact(contactID)



                setEditContact(contactData);


                setLoading(false)
            }
            catch (err) {

                console.log(err.message);
                setLoading(false)

            }
        };
        fetchData()
    }, [])




    const submitForm = async (values) => {
        // event.preventDefault();
        try {
            setLoading(true)
            const data = await updateContact(values, contactID);

            setLoading(false)
            if (data) {
                Navigate("/contacts");
                toast.info("مخاطب با موفقیت ویرایش شد !")
            }
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    };


    return (

        <>
            {
                loading ? (
                    <Spinner />
                ) : (

                    <div className="container pb-50 ">
                        <H2 className='text-center text-info'>ویرایش مخاطب</H2>
                        <div className="row mt-50 mb-50 bg-dark align-items-center mx-auto w-75 rounded">
                            <div className="col-md-8  rounded-5 py-10">
                                <Formik
                                    initialValues={{
                                        fullname: editContact.fullname,
                                        photo: editContact.photo,
                                        mobaile: editContact.mobaile,
                                        email: editContact.email,
                                        job: editContact.job,
                                        group: editContact.group
                                    }}
                                    validationSchema={contactSchema}
                                    onSubmit={(values) => {
                                        submitForm(values);
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
                                            <input type="submit" className='btn bg-white py-10 px-15 rounded-5 ms-15' value="ویرایش مخاطب" />
                                            <Link to="/contacts" className="bg-white btn py-10 px-15 rounded-5" >
                                                انصراف
                                            </Link>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                            <div className='col-md-4 d-flex justify-content-sm-center mb-sm-10'>
                                <img src={editContact.photo} className='img-fluid rounded ' alt={editContact.fullname} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <CreateIMG />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Edit;


const H2 = styled.h2`
padding-bottom:40px ;
  border-bottom: 2px solid skyblue;
`
