'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const manajemen = () => {
  return (
    <PageContainer title="Manajemen" description="this is manajemen">
      <DashboardCard title="manajemen">
        <Typography>Males Gua Cok Akhir Akhir ini</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default manajemen;

