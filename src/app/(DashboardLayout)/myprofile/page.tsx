"use client";

import { FC } from "react";
import PageContainer from "../components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Typography } from "@mui/material";

const Myprofile = () => {
  return (
    <PageContainer title="MyProfile | Bima Adam">
      <DashboardCard>
        <>
          <h1>Profile Bima Adam</h1>
          <Typography>About Me</Typography>
          <p>
            Halo saya Bima Adam Nugraha saya mahasiswa
            <strong> Politeknik Triguna Tasikmalaya</strong>
          </p>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default Myprofile;
