import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"

var time = undefined;

const Searchheader = ({ getContacts, setFilteredContacts }) => {

    const [query, setquery] = useState({ text: "" })


    const searchContacts = (event) => {
        // console.log(time);
        setquery({
            ...query, text: event.target.value
        })
        clearTimeout(time);
        time = setTimeout(() => {

            setFilteredContacts(getContacts.filter((contact) => {
                return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase())
            }))
        }, 1000)
    }

    return (

        <div className="input-group w-25 col-4 d-flex" dir="ltr">
            <span
                className="input-group-text"
                id="basic-addon1"
            >
                <Iconsearch />
            </span>
            <input
                dir="rtl"
                type="text"
                value={query.text}
                onChange={searchContacts}
                className="form-control"
                placeholder="جستجوی مخاطب"
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
        </div>
    )
}

export default Searchheader


//********************************* */

//style

const Iconsearch = styled(FaSearch)`
 font-size: 20px;
 `

