import axios from 'axios';
import {useState} from "react";

function RegistrationPage() {
    const[id, setId] = useState('');
    const[name, setName] = useState('');
    const[address, setAddress] = useState('');
    const[mobile, setMobile] = useState('');

    async function save(event)
    {
        event.preventDefault();
        try
        {
            await axios.post("http://localhost:8080/save",
            {
                id: id,
                fname: name,        //in json: frontend name
                lname: address,
                city: mobile
            });
                alert("User Registrtion Successfull");
                setId("");
                setName("");
                setAddress("");
                setMobile("");
        }
        catch(err)
        {
            alert("User Registration Failed")
        }
    }

    return (
    <div class="container mt-4">
      <form>
        <div class="form-group">
            <label>Name</label>
            <input type="test" class="form-control" placeholder="Enter name"
            value={name}
            onChange = {(event) =>
            {
                setName =(event.target.value);
            }}
            />
        </div>
        <div class="form-group">
            <label>Address</label>
            <input type="test" class="form-control" placeholder="Enter address"
            value={address}
            onChange = {(event) =>
            {
                setAddress =(event.target.value);
            }}
            />
        </div>
        <div class="form-group">
            <label>Mobile No.</label>
            <input type="test" class="form-control" placeholder="Enter mobile no."
            value={mobile}
            onChange = {(event) =>
            {
                setMobile =(event.target.value);
            }}
            />
        </div>
        <button class="btn btn-primary mt-4" onClick={save}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;