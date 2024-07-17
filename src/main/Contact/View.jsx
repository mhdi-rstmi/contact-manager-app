import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';


import Spinner from "../Spinner";
import { getContact, getGroup } from './../../Services/contactServices';


const View = ({ loading, setLoading }) => {

    const { contactID } = useParams();


    const [contact, setContact] = useState({})
    const [group, setGroup] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactData } = await getContact(contactID)

                const { data: groupData } = await getGroup(contactData.group);

                setContact(contactData);
                setGroup(groupData);

                setLoading(false)
            }
            catch (err) {

                console.log(err.message);
                setLoading(false)

            }
        };
        fetchData()
    }, [])

    return (
        <>

            {
                loading ?
                    (<Spinner />) :
                    (<>
                        {
                            Object.keys(contact).length > 0 && (
                                <div className="container">
                                    <div>
                                        <H2 className='text-center text-info p-40'>
                                            اطلاعات مخاطب
                                        </H2>
                                    </div>
                                    <div className="row mt-50 mx-auto w-75 rounded">
                                        <div className="">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-4 col-sm-4">
                                                            <img src={contact.photo} alt={contact.fullname}
                                                                className="img-fluid rounded" />
                                                        </div>
                                                        <div className="col-md-8 col-sm-7 text-center">
                                                            <ul className="list-group pe-0">
                                                                <Li className="list-group-item pt-10 m-10">

                                                                    نام و نام خانوادگی : {" "} <span className="fw-bold">
                                                                        {contact.fullname}
                                                                    </span>
                                                                </Li>
                                                                <li className="list-group-item m-10">
                                                                    شماره موبایل : {" "} <span className="fw-bold">
                                                                        {contact.mobaile}

                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item m-10">
                                                                    آدرس ایمیل : {" "} <span className="fw-bold">
                                                                        {contact.email}

                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item m-10">
                                                                    شغل : {" "} <span className="fw-bold">
                                                                        {contact.job}

                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item m-10">
                                                                    گروه : {" "} <span className="fw-bold">
                                                                        {group.name}

                                                                    </span>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='text-center'>
                                            <Link to="/contacts" className="bg-white btn py-10 px-15 rounded-5 m-20" >
                                                بازگشت
                                            </Link>
                                        </div>


                                    </div>

                                </div>
                            )
                        }
                    </>)

            }


        </>
    )
}

export default View;


const H2 = styled.h2`
    border-bottom: 2px solid skyblue;
`

const Li = styled.li`
    border-top: none;
`