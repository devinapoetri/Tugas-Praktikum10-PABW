// Import React
import React, { FormEvent, useState } from 'react';
// Import router
import { router, usePage } from '@inertiajs/react';
 interface Biodata {
    id: number;
    nama: string;
    tempat_lahir: string;
    tanggal_lahir: string;
}

interface PageProps {
    biodata: Biodata;
}

export default function Edit(props: PageProps) {
  // Ambil data biodata
  const { biodata } = props;

  // State form awal
  const [form, setForm] = useState({ ...biodata });

  // Submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.put(`/biodata/${biodata.id}`, form);
  };

  return (
    <div className="container mt-4">
      <h2>Edit Biodata</h2>

      {/* Form Edit */}
      <form onSubmit={handleSubmit}>

        {/* Nama */}
        <div className="mb-3">
          <label>Nama</label>
          <input
            className="form-control"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
          />
        </div>

        {/* Tempat Lahir */}
        <div className="mb-3">
          <label>Tempat Lahir</label>
          <input
            className="form-control"
            value={form.tempat_lahir}
            onChange={(e) => setForm({ ...form, tempat_lahir: e.target.value })}
            required
          />
        </div>

        {/* Tanggal Lahir */}
        <div className="mb-3">
          <label>Tanggal Lahir</label>
          <input
            type="date"
            className="form-control"
            value={form.tanggal_lahir}
            onChange={(e) => setForm({ ...form, tanggal_lahir: e.target.value })}
            required
          />
        </div>

        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}
