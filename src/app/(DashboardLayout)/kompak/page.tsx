'use client';

import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { FC, useState } from 'react';

interface Data {
  id: number;
  name: string;
  age: number;
  alamat: string;
}

const DataGrid: FC = () => {
  const [data] = useState<Data[]>([
    { id: 1, name: 'Bima Adam', age: 22, alamat: 'Ciamis ID' },
    { id: 2, name: 'Romanus', age: 16, alamat: 'Lombok ID' },
    { id: 3, name: 'Wisnu', age: 21, alamat: 'Keru ID' },
    { id: 4, name: 'Bayu', age:12, alamat: 'Dompu' },
    { id: 5, name: 'Jayakarta', age: 23, alamat: 'Jakarta ID' },
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Alamat</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.alamat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Kompak: FC = () => {
  return (
    <PageContainer title="Komputerisasi Akuntansi" description="this is kompak">
      <DashboardCard title="Data Mahasiswa">
        <>
          <Typography variant="h6" id="judul">Table Mahasiswa</Typography>
          <DataGrid />
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default Kompak;
