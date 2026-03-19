"use client";
import { useState } from "react";

interface formInterface {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
}

export default function BackendRegistration() {
    const [formData, setFormData] = useState<Partial<formInterface>>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        role: "user",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<Partial<formInterface>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // validate field
        const error = validateField(name, value);

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));

    };

    const validateField = (name: string, value: string) => {
        let error = "";

        if (name === "firstName") {
            if (!value.trim()) {
                error = "First name is required";
            }
        }
        if (name === "lastName") {
            if (!value.trim()) {
                error = "Last name is required";
            }
        }

        if (name === "phone") {
            if (!value.trim()) {
                error = "Phone number is required";
            } else if (!/^\d{10,12}$/.test(value)) {
                error = "Phone must be 10–12 digits";
            }
        }

        if (name === "email") {
            if (!value.trim()) {
                error = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = "Invalid email address";
            }
        }

        if (name === "password") {
            if (!value.trim()) {
                error = "Password is required";
            } else if (value.length < 4) {
                error = "Password must be at least 4 characters";
            }
        }

        if (name === "confirmPassword") {
            if (!value.trim()) {
                error = "Confirm password is required";
            } else if (formData.password !== value) {
                error = "Password and Confirm password not matched";
            }
        }

        return error;
    };

    const isFormFilled = Object.values(formData).every(
        (value) => value && value.toString().trim() !== ""
    );

    const hasErrors = Object.values(errors).some(
        (error) => error && error.length > 0
    );

    const isFormValid = isFormFilled && !hasErrors;

    const handleSubmit = async (e: MouseEvent) => {
        e.preventDefault();

        if (!isFormValid) return;

        alert("form is valid");

        // const res = await fetch("/api/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        // });

        // const data = await res.json();
        // console.log(data);
    };

    return (
        <div
            className="card shadow-sm"
            style={{ maxWidth: "450px", margin: "50px auto" }}
        >
            <div className="card-body">
                <h3 className="text-center mb-4">Create User</h3>

                <form onSubmit={(e) => handleSubmit(e)} noValidate>
                    {/* name */}

                    <div className="row mb-3">
                        <div className="col-6">
                            <label className="form-label">Frist Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            {
                                errors.firstName && (
                                    <span className="text-danger d-block mt-1">{errors.firstName}</span>
                                )
                            }

                        </div>
                        <div className="col-6">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            {errors.lastName && (<span className="text-danger d-block mt-1">{errors.lastName}</span>)}
                        </div>
                    </div>

                    {/* phone */}
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleChange}
                            required
                        />
                        {errors.phone && (<span className="text-danger d-block mt-1">{errors.phone}</span>)}
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleChange}
                            required
                        />
                        {errors.email && (<span className="text-danger d-block mt-1">{errors.email}</span>)}
                    </div>

                    {/* Role */}
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select
                            name="role"
                            className="form-control"
                            value={formData.role}
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="user" defaultValue={'user'} >User</option>
                        </select>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleChange}
                            required
                        />
                        {errors.password && (<span className="text-danger d-block mt-1">{errors.password}</span>)}
                    </div>

                    {/* confirm Password */}
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleChange}
                            required
                        />
                        {errors.confirmPassword && (<span className="text-danger d-block mt-1">{errors.confirmPassword}</span>)}
                    </div>


                    {/* Submit */}
                    <div className="d-grid">
                        <button type="submit" className={`btn btn-primary ${!isFormValid ? "disabled" : ""}`}>
                            Register User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}