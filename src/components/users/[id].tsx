import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IUser from '../../util/user';
import './userdata.css'
function UserData() {
    const [person, setPerson] = useState<IUser[]>();
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect (()=>{
        //@ts-ignore

        if(person === undefined){
            fetch('../../../data/people.json').
                then(res =>res.json()).
                then(res=>
                     setPerson(res.filter((elem:IUser) => String(elem.id) === String(id)))).
                catch(err=>{});
        }
    }, [person]);
    const backtoHome = () => {
         navigate("/");
    }
    return (
         <div className='userdata-container'>
                {person?.map(person=>
                <ul>
                    <li>
                        <label>Full name</label> 
                        <p>{person.name}</p>
                    </li>
                    <li>
                        <label>Birthday</label>
                        <p>{person.birthday}</p>
                    </li>
                    <li>
                        <label>Country</label>
                        <p>{person.country}</p>
                    </li>
                    <li>
                        <label>State</label>
                        <p>{person.state}</p>
                    </li>
                    <li>
                        <label>Street</label>
                        <p>{person.street}</p>
                    </li>
                    <li>
                        <label>full name</label>
                        <p>{person.telephone}</p>
                    </li>
                    <li>
                </li>
                </ul>
                )} 
                <span><p onClick={backtoHome}>Back</p></span>
         </div>
    )
}
export default UserData;