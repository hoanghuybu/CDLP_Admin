import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import './Login.scss';

function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formSubmit = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            const response = await fetch(
                'https://beprn231catdoglover20231030132717.azurewebsites.net/api/Auth/LoginAdmin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formSubmit),
                },
            );
            if (response.status === 200) {
                const data = await response.json();
                await new Promise((resolve) => {
                    sessionStorage.setItem('accessToken', data.accessToken);
                    sessionStorage.setItem('refreshToken', data.refreshToken);
                    sessionStorage.setItem('accountId', data.account.accountId);
                    const event = new Event('accessTokenUpdated');
                    window.dispatchEvent(event);
                    resolve();
                }).then(navigate('/home'));
            } else if (response.status === 401) {
                setIsFailed(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid"
                    alt="Sample image"
                ></img>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                {isLoading && (
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="rgba(105, 108, 255, 0.85)"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                )}
                <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="form3Example3"
                            ref={emailRef}
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                        />
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="form3Example4">
                            Password
                        </label>
                        <input
                            type="password"
                            id="form3Example4"
                            ref={passwordRef}
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label className="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                        </div>
                        <a href="#!" className="text-body">
                            Forgot password?
                        </a>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" className="btn btn-primary btn-lg button-login">
                            Login
                        </button>
                    </div>
                </form>
                {isFailed && <h3 style={{ color: '#fe2c55' }}>Wrong Email Or Password</h3>}
            </div>
        </div>
    );
}

export default LoginPage;
