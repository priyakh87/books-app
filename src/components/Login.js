import React, { useState } from "react";
import { Button, FormCheck, Modal } from "react-bootstrap";
import BookToast from "./BookToast";
import { useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
    const [showLogin, setShowLogin] = useState(!isLoggedIn);
    const [isInvalid, setIsInvalid] = useState(false); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [Toastmessage, setToastmessage] = useState("");
    const [ToastTitle, setToastTitle] = useState("");
    const navigate = useNavigate();
    const handleSubmitLogin = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setIsInvalid(true);
            return; 
        } else {
            setIsInvalid(false); 
        }

        try {
            if (username && password) {
                setIsLoggedIn(true);
                setShowLogin(false);
                setToastmessage('You are logged in successfully');
                setToastTitle('Login Success');
                setShowToast(true); 
                navigate('/')
            }
        } catch (error) {
            console.log('Error logging in', error);
            setToastmessage('Login failed');
            setToastTitle('Error');
            setShowToast(true);
        }
    };

    return (
        <>
            {showToast && (
                <BookToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    message={Toastmessage}
                    title={ToastTitle}
                />
            )}

            <Modal show={showLogin} onHide={() => setShowLogin(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="m-auto p-4">
                        <h2 className="text-center">Welcome Back</h2>
                </div>
                    <div className="m-auto p-4">
                        <form onSubmit={handleSubmitLogin}>
                            <div className="mb-3">
                                <input
                                    className={
                                        isInvalid && username === ""
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    Please enter a username.
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    className={
                                        isInvalid && password === ""
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                    Please enter a password.
                                </div>
                            </div>
                            <Button variant="dark" type="submit">
                                Login
                            </Button>
                        </form>
                    </div>
                    <div className="m-auto p-4">
                        <FormCheck label="Remmber me" id="Checkbox_remember_me" />
                    </div>
                    <div className="m-auto p-4 text-center">
                        Don't have an account yet? <a href="/signup">Signup</a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;