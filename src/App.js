import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Routes , Route } from "react-router-dom";

import Titel from "./header/TitelHeader";
import Contacts from "./main/Contact/Contacts";
import Create from "./main/Contact/Create";
import Edit from "./main/Contact/Edit";
import View from "./main/Contact/View";
import Time from "./main/Time";
import {ToastContainer} from "react-toastify"


function App() {


    const [getContacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    const [getGroups, setGroups] = useState([]);
  const [getFilteredContacts, setFilteredContacts] = useState([])
  
 
  return (
    <div className="App">
      <Titel  getContacts={getContacts} setFilteredContacts={ setFilteredContacts} />
      <Time />
      <ToastContainer rtl={ true} theme="colored" />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />

        <Route path="/contacts" element={<Contacts
          loading={loading} 
          setContacts={setContacts}
          setGroups={setGroups}
          setLoading={setLoading}
          getFilteredContacts={getFilteredContacts}
          setFilteredContacts={setFilteredContacts}
        />} />

        <Route path="/contacts/create" element={<Create loading={loading} groups={getGroups } />} />
        
        <Route path="/contacts/:contactID" element={<View setLoading={setLoading} loading={loading} />} />
        
        <Route path="/contacts/edit/:contactID" element={<Edit loading={loading} groups={getGroups } setLoading={setLoading}/>} />
        </Routes>
    </div>
  );
}

export default App;
