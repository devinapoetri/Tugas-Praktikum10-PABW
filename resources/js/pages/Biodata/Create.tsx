import React, { FormEvent, useState } from 'react';
import { router } from '@inertiajs/react';

// Definisi tipe form
interface FormData {
    nama: string;
    tempat_lahir: string;
    tanggal_lahir: string;
}

export default function Create() {
    // State form
    const [form, setForm] = useState<FormData>({
        nama: '',
        tempat_lahir: '',
        tanggal_lahir: '',
    });

    // Submit form
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.post('/biodata', form as any);
    };

    return (
        <div className="container mt-4">
            <h2>Tambah Biodata</h2>

            <form onSubmit={handleSubmit}>
                {/* Nama */}
                <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input
                        className="form-control"
                        value={form.nama}
                        onChange={(e) =>
                            setForm({ ...form, nama: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Tempat Lahir */}
                <div className="mb-3">
                    <label className="form-label">Tempat Lahir</label>
                    <input
                        className="form-control"
                        value={form.tempat_lahir}
                        onChange={(e) =>
                            setForm({ ...form, tempat_lahir: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Tanggal Lahir */}
                <div className="mb-3">
                    <label className="form-label">Tanggal Lahir</label>
                    <input
                        type="date"
                        className="form-control"
                        value={form.tanggal_lahir}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                tanggal_lahir: e.target.value,
                            })
                        }
                        required
                    />
                </div>

                {/* Tombol Simpan */}
                <button className="btn btn-primary">Simpan</button>
            </form>
        </div>
    );
}
