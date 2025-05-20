import React, { useState, useEffect } from 'react';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';

function NotesApp() {
    // useState untuk menyimpan data tugas
    const [notes, setNotes] = useState([
        {
            id: 1,
            content: "Menyelesaikan Proposal Proker KKN-51",
            backgroundColor: "danger"
        },
        {
            id: 2,
            content: "Kontrol Asma di RS HJ.Dardjat",
            backgroundColor: "warning"
        },
        {
            id: 3,
            content: "Progress programan React",
            backgroundColor: "primary"
        },
        {
            id: 4,
            content: "Belajar membuat Kopi Gula Aren Homemade",
            backgroundColor: "info"
        },
        {
            id: 5,
            content: "Membersihkan Motor di Steam Wash",
            backgroundColor: "success"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const [urgencyFilter, setUrgencyFilter] = useState('all');

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // menambahkan tugas baru
    const addNote = (note) => {
        const newNote = {
            id: notes.length + 1,
            content: note.content,
            backgroundColor: note.backgroundColor
        };
        setNotes([...notes, newNote]);
    };

    // menghapus tugas
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const filteredNotes = notes.filter(note => {
        const matchesSearch = note.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesUrgency = urgencyFilter === 'all' || note.backgroundColor === urgencyFilter;
        return matchesSearch && matchesUrgency;
    });

    return (
        <div>
            <div className="row mb-4">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control border border-success rounded p-3"
                        placeholder="Cari tugas..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-select border border-success rounded p-3"
                        value={urgencyFilter}
                        onChange={(e) => setUrgencyFilter(e.target.value)}
                    >
                        <option value="all">Semua Tingkat Urgensi</option>
                        <option value="danger">Kritis</option>
                        <option value="warning">Tinggi</option>
                        <option value="primary">Sedang</option>
                        <option value="info">Rendah</option>
                        <option value="success">Selesai</option>
                        <option value="secondary">Diarsipkan</option>
                    </select>
                </div>
            </div>

            <NoteForm addNote={addNote} />

            {!isLoaded ? (
                <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Memuat...</span>
                    </div>
                    <p className="mt-2">Memuat tugas...</p>
                </div>
            ) : (
                <div className="row">
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map(note => (
                            <div className="col-md-4 mb-3" key={note.id}>
                                <NoteCard note={note} onDelete={deleteNote} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>Tidak ada tugas ditemukan. Tambahkan tugas baru menggunakan formulir di atas!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default NotesApp;
