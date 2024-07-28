'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const kompak = () => {
  return (
    <PageContainer title="Komputerisasi Akuntansi" description="this is kompak">
      <DashboardCard title="kompak">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default kompak;

