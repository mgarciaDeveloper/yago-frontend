import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";
import { Paper, Stack, Typography, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import variables from "../../variables";

export default function Topbar() {

    function logout(values) {
        Axios({
            method: "POST",
            data: values,
            withCredentials: true,
            url: `${variables.backUrl}/logout`,
        }).then((res) => {
            res.data.erro ? alert(res.data.mensagem) : navigate("/login");
        });
    }

    const navigate = useNavigate();
    return <Paper sx={{ width: '100%' }}>
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
        >
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
                sx={{ width: "50%", marginRight: '2%' }}
            >
                <IconButton onClick={() => {
                    navigate("/");
                }}  > <HomeIcon /> </IconButton>
                <Typography variant='h6' sx={{ color: '#282c34' }}>
                    GERENCIADOR </Typography>
            </Stack>


            <IconButton onClick={() => {
                logout();
            }} sx={{ marginRight: '2%' }} > <LogoutIcon /> </IconButton>
        </Stack>
    </Paper>
}