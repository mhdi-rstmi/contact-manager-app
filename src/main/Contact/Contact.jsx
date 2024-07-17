import { IoEye, IoPencil, IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";


const Contact = ({ contact, confirmDelete }) => {
    return (
        <>

            <div className="col-md-6 mb-15">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-4 col-sm-4">
                                <img src={contact.photo} alt={contact.fullname}
                                    className="img-fluid rounded" />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <ul className="list-group pe-0">
                                    <li className="list-group-item">
                                        نام و نام خانوادگی : {" "} <span className="fw-bold">
                                            {contact.fullname}
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        شماره موبایل : {" "} <span className="fw-bold">
                                            {contact.mobaile}
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        آدرس ایمیل : {" "} <span className="fw-bold">
                                            {contact.email}
                                        </span>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-sm-1 d-flex flex-column align-items-center justify-content-between">
                                <button className="my-10 bg-info border-0 fs-5 rounded-2">
                                    <Link to={`/contacts/${contact.id}`}>
                                        <IoEye>

                                        </IoEye>
                                    </Link>

                                </button>
                                <button className="my-10 bg-warning border-0 fs-5 rounded-2">
                                    <Link to={`/contacts/edit/${contact.id}`}>
                                        <IoPencil>

                                        </IoPencil>
                                    </Link>

                                </button>
                                <button onClick={confirmDelete} className="my-10 bg-danger border-0 fs-5 rounded-2">
                                    <IoTrash>

                                    </IoTrash>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Contact

