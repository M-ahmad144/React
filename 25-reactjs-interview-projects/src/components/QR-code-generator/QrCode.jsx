import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QrCode() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleQrCode = () => {
        setQrCode(input);
        setInput('');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="text-center mb-4">QR Code Generator</h1>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    onChange={(e) => setInput(e.target.value)}
                                    type="text"
                                    placeholder="Enter your value here"
                                    value={input}
                                />
                            </div>

                            <div className="text-center my-3">
                                <button
                                    className="btn btn-primary my-3"
                                    disabled={!input.trim()}
                                    onClick={handleQrCode}
                                >
                                    Generate QR Code
                                </button>
                            </div>

                            <div className="text-center">
                                {qrCode && (
                                    <QRCode
                                        id='qr-code-value'
                                        value={qrCode}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
