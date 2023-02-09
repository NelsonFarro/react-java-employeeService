import axios from "axios";
import { useState } from "react";
//import "../compnents/registration.css";


function Register()
{
    const[id, setId] = useState("");
    const[firstname, setFname] = useState("");
    const[lastname, setLname] = useState("");
    const[phone, setPhone] = useState("");
    const[salary, setSalary] = useState("");

    async function handleSubmit(event)
    {
        event.preventDefault();
        try
        {
            await axios.post("http://localhost:8081/save",
            {
                id: id,
                fname: firstname,        //in json: frontend name
                lname: lastname,
                phone: phone,
                salary: salary
            });
            alert("User Registration Successful");
            setId("");
            setFname("");
            setLname("");
            setPhone("");
            setSalary("");
        }
        catch(err)
        {
            alert("User Registration Failed");
        }
    }
    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <br></br>
                <h1>Register</h1>
                <p>Fill the information below.</p>
                <input type="text"
                        name="id"
                        placeholder="id"
                        onChange={(event) =>
                            {
                                setId(event.target.value);
                            }
                        }
                />
                <input type="text"
                        name="firstname"
                        placeholder="Firstname"
                        onChange={(event) =>
                            {
                                setId(event.target.value);
                            }
                        }
                />
                <input type="text"
                        name="lastname"
                        placeholder="Lastname"
                        onChange={(event) =>
                            {
                                setId(event.target.value);
                            }
                        }
                />
                <input type="text"
                        name="phone"
                        placeholder="phone"
                        onChange={(event) =>
                            {
                                setId(event.target.value);
                            }
                        }
                />
                <input type="text"
                        name="salary"
                        placeholder="salary"
                        onChange={(event) =>
                            {
                                setId(event.target.value);
                            }
                        }
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;