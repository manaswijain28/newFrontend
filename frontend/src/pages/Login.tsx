import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const res = await login(email, password);
        if (res.success) {
            navigate('/');
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg border border-border shadow-sm">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Login</h1>
                    <p className="text-muted-foreground">Enter your credentials to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">{error}</div>}
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
                        Login
                    </button>
                </form>
                <div className="text-center text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
