import { useEffect, useState } from 'react';
import IUser from '../../util/user';
import { Link } from 'react-router-dom';
import './usersname.css'
function UsersName(){
    const [people, setPeople] = useState<IUser[]>();

    useEffect (()=>{
        //@ts-ignore

        if(people === undefined){
            fetch('../../../data/people.json').
                then(res =>res.json()).
                then(res=> setPeople(res)).
                catch(err=>{});
        }
    }, [people])
     return (
         <div className='username-content'>
               <h2>USERNAME  .... </h2>
                <ul>
                    {
                        people?.map((person, index) => <li key={index}><h4><Link to={`/user/${person.id}`}> {person.name}</Link></h4></li>)
                    }
                </ul>
               

         </div>
     )
}
export default UsersName;
