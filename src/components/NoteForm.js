import React, { useState } from 'react';

function NoteForm({ addNote }) {
    // useState untuk formulir
    const [content, setContent] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('warning');

    const tingkatUrgensi = [
        { level: 'Kritis', color: 'danger', description: 'Butuh perhatian segera' },
        { level: 'Tinggi', color: 'warning', description: 'Penting, lakukan segera' },
        { level: 'Sedang', color: 'primary', description: 'Prioritas normal' },
        { level: 'Rendah', color: 'info', description: 'Bisa menunggu' },
        { level: 'Selesai', color: 'success', description: 'Tugas selesai' },
        { level: 'Diarsipkan', color: 'secondary', description: 'Tidak relevan lagi' }
    ];

    //  pengiriman formulir
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!content.trim()) return;

        addNote({ content, backgroundColor });

        setContent('');
        setBackgroundColor('warning');
    };

    return (
        <div className="card mb-4 border border-success">
            <div className="card-header">
                <h5 className="mb-0">Tambah Tugas Baru</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="noteContent" className="form-label">Deskripsi Tugas</label>
                        <textarea
                            className="form-control"
                            id="noteContent"
                            rows="3"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Masukkan tugas atau kegiatan Anda di sini..."
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label mb-5">Tingkat Urgensi</label>
                        <div className="d-flex flex-wrap gap-2 justify-content-center">
                            {tingkatUrgensi.map(({ level, color, description }) => (
                                <div key={color} className="form-check me-3 mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="backgroundColor"
                                        id={`color-${color}`}
                                        value={color}
                                        checked={backgroundColor === color}
                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                    />
                                    <label className="d-flex flex-column" htmlFor={`color-${color}`}>
                                        <span className={`badge bg-${color} text-${['warning', 'info'].includes(color) ? 'dark' : 'white'} px-3 py-2`}>
                                            {level}
                                        </span>
                                        <small className="text-muted mt-1">{description}</small>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success mt-5">Tambah Tugas</button>
                </form>
            </div>
        </div>
    );
}

export default NoteForm;
