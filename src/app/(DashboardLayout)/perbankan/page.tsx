'use client'
import { Typography } from "@mui/material";
import PageContainer from "../components/container/PageContainer"
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const perbankan = () => {
    return ((
        <PageContainer title="Perbankan" description="this is perbankan">
            <DashboardCard title="Perbankan">
                <Typography>Ini adalah menu Perbankan</Typography>
            </DashboardCard>
        </PageContainer>
        ))
}

export default perbankan;