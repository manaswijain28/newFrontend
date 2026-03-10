import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        const res = await signup(fullname, email, password);
        if (res.success) {
            setMessage(res.message + ' Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
            <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg border border-border shadow-sm">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
                    <p className="text-muted-foreground">Enter your details to create your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">{error}</div>}
                    {message && <div className="p-3 text-sm text-green-600 bg-green-100 rounded-md">{message}</div>}
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="fullname">Full Name</label>
                        <input
                            id="fullname"
                            type="text"
                            className="w-full px-3 py-2 bg-transparent border border-input rounded-md focus:ring-2 focus:ring-ring outline-none"
                            placeholder="John Doe"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 bg-transparent border border-input rounded-md focus:ring-2 focus:ring-ring outline-none"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-3 py-2 bg-transparent border border-input rounded-md focus:ring-2 focus:ring-ring outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                    >
                        Sign up
                    </button>
                </form>
                <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
