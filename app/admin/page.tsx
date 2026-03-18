export default function Admin() {
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

                    <form>
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
                                required
                            />
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
                                required
                            />
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