import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";
//import { useThunk } from "../hooks/useThunk";

function UsersList() {
    // const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers); 
    // const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [loadingUsersError, setIsLoadingUsersError] = useState(null);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setIsCreatingUserError] = useState(null);

    const dispatch = useDispatch();
    const { data } = useSelector((state) => {
        return state.users; // { data: [], isLoading: false, error: null }
    });

    useEffect(() => {
        //doFetchUsers();
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
        .unwrap()
        .catch((err) => setIsLoadingUsersError(err))
        .finally(() => setIsLoadingUsers(false));
    }, [dispatch]);

    const handleUserAdd = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
        .unwrap()
        .catch((err) => setIsCreatingUserError(err))
        .finally(() => setIsCreatingUser(false));
    }

    let content;
  
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        content = <div>Error fetching data...</div>;
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        });
    }

    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            {creatingUserError && 'Error creating user...'}
        </div>
        {content}
    </div>;
}

export default UsersList;