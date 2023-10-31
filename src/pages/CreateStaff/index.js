import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStaff() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const nameRef = useRef(null);
    const dateOfBirthRef = useRef(null);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const descriptionRef = useRef(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate;

    const handleRefresh = async () => {
        const refreshToken = sessionStorage.getItem('refreshToken');
        if (refreshToken) {
            try {
                const response = await fetch(
                    `https://beprn231catdoglover20231030132717.azurewebsites.net/api/Auth/RefreshToken/${refreshToken}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );

                if (response.ok) {
                    const data = await response.json();
                    sessionStorage.setItem('accessToken', data.accessToken);
                    sessionStorage.setItem('refreshToken', data.refreshToken);
                    window.location.reload();
                } else {
                    console.error('Error refreshing token');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            navigate('/');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            passwordConfirm: passwordConfirmRef.current.value,
            fullName: nameRef.current.value,
            dateOfBirth: dateOfBirthRef.current.value === '' ? null : dateOfBirthRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            avatarLink: '',
            description: descriptionRef.current.value,
            roleId: 2,
        };

        console.log(formData);

        try {
            const response = await fetch(
                'https://beprn231catdoglover20231030132717.azurewebsites.net/api/Account/CreateAccount',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(formData),
                },
            );
            if (response.status === 201) {
                setIsSuccess(true);
            }
        } catch (error) {
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                await handleRefresh();
            } else {
                console.log(error);
            }
        }
    };
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                    <span class="text-muted fw-light">Create/</span> Staff
                </h4>
                <div className="row">
                    <div className="col-xxl">
                        <div className="card mb-4">
                            <div className="card-header d-flex align-items-center justify-content-between">
                                <h5 className="mb-0">Staff infomation</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-email">
                                            Email
                                        </label>
                                        <div className="col-sm-10">
                                            <div className="input-group input-group-merge">
                                                <input
                                                    type="text"
                                                    id="basic-default-email"
                                                    className="form-control"
                                                    placeholder="john.doe"
                                                    aria-label="john.doe"
                                                    aria-describedby="basic-default-email2"
                                                    ref={emailRef}
                                                />
                                                <span className="input-group-text" id="basic-default-email2">
                                                    @gmail.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-password">
                                            Password
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                id="basic-default-password"
                                                className="form-control"
                                                placeholder="Enter Password"
                                                ref={passwordRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-password-confirm">
                                            Confirm Password
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                id="basic-default-password-confirm"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                ref={passwordConfirmRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-name">
                                            Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="basic-default-name"
                                                ref={nameRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-date-of-birth">
                                            Date of Birth
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="datetime-local"
                                                id="basic-default-date-of-birth"
                                                className="form-control"
                                                ref={dateOfBirthRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-phone">
                                            Phone No
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                id="basic-default-phone"
                                                className="form-control phone-mask"
                                                ref={phoneRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-address">
                                            Address
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                id="basic-default-address"
                                                className="form-control"
                                                ref={addressRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label" for="basic-default-description">
                                            Description
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea
                                                id="basic-default-description"
                                                className="form-control"
                                                ref={descriptionRef}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {isSuccess && <h3 style={{ color: '#00AA00' }}>Create Success</h3>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateStaff;
