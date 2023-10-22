import './Live.scss';
import { Dropdown } from 'react-bootstrap';

function Live() {
    const users = [
        {
            id: 1,
            userName: 'User1',
            gender: 'Male',
            status: 'Active',
            actions: ['Edit', 'Delete'],
        },
        {
            id: 2,
            userName: 'User2',
            gender: 'Female',
            status: 'Active',
            actions: ['Edit', 'Delete'],
        },
        {
            id: 3,
            userName: 'User3',
            gender: 'Male',
            status: 'Inactive',
            actions: ['Edit', 'Delete'],
        },
        {
            id: 4,
            userName: 'User4',
            gender: 'Female',
            status: 'Active',
            actions: ['Edit', 'Delete'],
        },
        {
            id: 5,
            userName: 'User5',
            gender: 'Male',
            status: 'Active',
            actions: ['Edit', 'Delete'],
        },
    ];

    return (
        <div className="content-wrapper">
            <div className="ontainer-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div className="table-responsive text-nowrap">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Name</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <span
                                                className={`badge ${
                                                    user.status === 'Active' ? 'bg-label-success' : 'bg-label-danger'
                                                } me-1`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    Select Actions
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Live;
