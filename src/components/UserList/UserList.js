import React from "react";
import './UserList.css';
import {useSelector, useDispatch} from "react-redux";
import {switchUser} from "../../actions";


const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userReducer.userList);

    const selectUser = (payload) => {
        dispatch(switchUser(payload));
    }

    const UsersView = () => userList.map((item) => {
        return <div className='users-view__item' key={item.id} onClick={() => selectUser(item.id)}>User name: {item.name}</div>
    })


    return (
        <div className='users-view'>
            <UsersView />
        </div>
    )
}

export {UserList}