
"use client"
import { LoginAction } from "@/actions/loginAction";
import { useActionState } from "react";

export default function Admin() {
    // const loginEndPonit = "https://dummyjson.com/auth/login";
    const [formState, action, isPending] = useActionState
        (LoginAction, {
            errors: {}
        });

    let isUsername = !!formState?.errors.username;
    let isUsernameMessage = formState?.errors.username;
    let isPassword = !!formState?.errors.password;
    let isPasswordMessage = formState?.errors.password;

    return (
        <>
            <div
                className="card shadow-sm"
                style={{
                    maxWidth: "400px",
                    margin: "50px auto",
                    borderRadius: "8px",
                }}
            >
                <div className="card-body p-4">
                    <h2 className="card-title text-center mb-4">Log In</h2>

                    <form noValidate action={action} >
                        {/* Username / Email */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username or Email Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username or email"
                                name="username"

                            />
                            {
                                isUsername ? <span className="text-danger">
                                    {isUsernameMessage}
                                </span> : null
                            }
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                name="password"

                            />
                            {
                                isPassword ? <span className="text-danger">
                                    {isPasswordMessage}
                                </span> : null
                            }
                        </div>

                        {/* Remember Me */}
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Log In
                            </button>
                        </div>

                        {/* Links */}
                        <div className="mt-3 text-center">
                            <a href="#" className="me-2">
                                Lost your password?
                            </a>
                            <a href="#">Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}