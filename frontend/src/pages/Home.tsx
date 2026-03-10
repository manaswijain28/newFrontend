import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tighter">
                    Welcome, <span className="text-primary">{user.fullname}</span>!
                </h1>
                <p className="text-xl text-muted-foreground">You have successfully logged in.</p>
            </div>
            <div className="p-10 bg-card border border-border rounded-2xl shadow-xl max-w-2xl w-full">
                <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                        <h2 className="text-2xl font-semibold">User Dashboard</h2>
                        <button
                            onClick={logout}
                            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-all font-medium"
                        >
                            Logout
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/50 rounded-xl space-y-1">
                            <p className="text-sm font-medium text-muted-foreground uppercase">Email</p>
                            <p className="text-lg font-medium">{user.email}</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-xl space-y-1">
                            <p className="text-sm font-medium text-muted-foreground uppercase">User ID</p>
                            <p className="text-lg font-medium truncate">{user._id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
