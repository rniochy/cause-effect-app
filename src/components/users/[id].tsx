import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IUser from '../../util/user';
import './userdata.css'
function UserData() {
    const [person, setPerson] = useState<IUser[]>();
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
    }, [person])
    return (
         <div className='userdata-container'>
                {person?.map(person=>
                <ul>
                    <li>
                    <label>full name</label> 
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
                    <label>full name</label>
                </li>
                </ul>
                )} 
         </div>
    )
}
export default UserData;