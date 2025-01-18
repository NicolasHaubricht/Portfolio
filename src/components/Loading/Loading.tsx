import React from 'react';
import './Loading.css';

interface LoadingProps {
    message?: string;
}

const Loading: React.FC<LoadingProps> = () => {
    return (
        <div className="flex items-center justify-center min-h-screen overflow-y-hidden">
            <div>
                <div className="terminal-loader">
                    <div className="terminal-header">
                        <div className="terminal-title">Status</div>
                        <div className="terminal-controls">
                            <div className="control close"></div>
                            <div className="control minimize"></div>
                            <div className="control maximize"></div>
                        </div>
                    </div>
                    <div className="text">Loading...</div>
                </div>

            </div>
        </div>
    );
};

export default Loading;
