import { confirmAlert } from "react-confirm-alert";
import { useEffect } from "react";

import Contact from './Contact';
import NotFound from "../NotFound";
import Spinner from "../Spinner";
import { toast } from 'react-toastify';



import { getAllContacts, getAllGroups, deleteContact } from './../../Services/contactServices';


const Contacts = ({ loading, getContacts, getGroups, setContacts, setGroups, setLoading, getFilteredContacts, setFilteredContacts }) => {


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactsData } = await getAllContacts();
                const { data: groupsData } = await getAllGroups();

                setContacts(contactsData);
                setFilteredContacts(contactsData)
                setGroups(groupsData);

                setLoading(false)
            }
            catch (err) {
                setLoading(false)

                console.log(err.message);
            }
        };
        fetchData()
    }, [])


    // Delete Contact

    const confirm = (contactId, contactFullname) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div
                        dir="rtl"

                        className="p-4 bg-primary p-20 rounded"
                    >
                        <h1>پاک کردن مخاطب</h1>
                        <p >
                            مطمئنی که میخوای مخاطب {contactFullname} رو پاک کنی ؟
                        </p>
                        <button
                            onClick={() => {
                                removeContact(contactId);
                                onClose();
                            }}
                            className="btn mx-10 btn-danger"
                        >
                            مطمئن هستم
                        </button>
                        <button
                            onClick={onClose}
                            className="btn btn-success"
                        >
                            انصراف
                        </button>
                    </div>
                );
            },
        });
    };

    const removeContact = async (contactId) => {
        try {
            setLoading(true);
            const response = await deleteContact(contactId);
            if (response) {
                const { data: contactsData } = await getAllContacts();
                setFilteredContacts(contactsData);
                setContacts(contactsData)
                setLoading(false);
                toast.error("مخاطب با موفقیت حذف شد!")
            }
        } catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    };


    // Delete Contact



    return (
        <>
            {
                loading ? <Spinner />
                    :

                    <div className="container">
                        <div className="row">
                            {
                                getFilteredContacts.length > 0 ? getFilteredContacts.map(c => (
                                    <Contact key={c.id} contact={c}
                                        confirmDelete={() => confirm(c.id, c.fullname)}
                                    />
                                ))
                                    :
                                    <NotFound />
                            }

                        </div>
                    </div>

            }

        </>
    )
}

export default Contacts