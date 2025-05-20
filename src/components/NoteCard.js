import React, { useState } from 'react';

function NoteCard({ note, onDelete }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Memetakan warna urgensi untuk ditampilkan
    const getTingkatUrgensi = (color) => {
        const levels = {
            'danger': 'Kritis',
            'warning': 'Tinggi',
            'primary': 'Sedang',
            'info': 'Rendah',
            'success': 'Selesai',
            'secondary': 'Diarsipkan'
        };
        return levels[color] || 'Tidak Diketahui';
    };

    const cardStyle = {
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
    };

    return (
        <div
            className={`card bg-${note.backgroundColor} text-${note.backgroundColor === 'warning' || note.backgroundColor === 'info' ? 'dark' : 'white'}`}
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-header d-flex justify-content-between align-items-center">
                <span className="badge bg-light text-dark">
                    {getTingkatUrgensi(note.backgroundColor)}
                </span>
                <button
                    className="btn btn-sm btn-close"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(note.id);
                    }}
                    aria-label="Hapus"
                ></button>
            </div>
            <div className="card-body">
                <p className="card-text">{note.content}</p>
            </div>
        </div>
    );
}

export default NoteCard;
