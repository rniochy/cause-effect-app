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
         <div>
                <ul>{person?.map(person=> person.name)} 
                <li>
                   <label>full name</label> 
                </li>
                <li>
                <label>full name</label>
                </li>
                <li>
                <label>full name</label>
                </li>
                <li>
                <label>full name</label>
                </li>
                <li>
                <label>full name</label>
                </li>
                <li>
                <label>full name</label>
                </li>
                <li>
                <label>full name</label>
                </li>
                </ul>
         </div>
    )
}
export default UserData;