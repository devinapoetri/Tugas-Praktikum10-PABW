// Import komponen Link dan hook react
import { Link, usePage, router } from '@inertiajs/react';

interface Biodata {
    id: number;
    nama: string;
    tempat_lahir: string;
    tanggal_lahir: string;
}
interface PageProps {
    biodatas: Biodata[];

}
export default function Index(props: PageProps) {
    // Ambil data 'biodatas' yang dikirim dari controller Laravel via Inertia
    const { biodatas } = props;

    return (
        <div className="container mt-4">
            <h2>Daftar Biodata</h2>

            {/* Tombol Tambah */}
            <Link href="/biodata/create" className="btn btn-primary mb-3">
                Tambah
            </Link>

            {/* Tabel Biodata */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Loop data array */}
                    {biodatas.map((data) => (
                        <tr key={data.id}>
                            <td>{data.nama}</td>
                            <td>{data.tempat_lahir}</td>
                            <td>{data.tanggal_lahir}</td>

                            <td>
                                {/* Tombol Edit */}
                                <Link
                                    href={`/biodata/${data.id}/edit`}
                                    className="btn btn-sm btn-warning me-2"
                                >
                                    Edit
                                </Link>

                                {/* Tombol Hapus */}
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => {
                                        if (confirm("Yakin hapus?")) {
                                            router.delete(`/biodata/${data.id}`);
                                        }
                                    }}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
