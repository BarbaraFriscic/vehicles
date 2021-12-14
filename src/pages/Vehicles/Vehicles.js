import React from 'react'
import VehicleForm from './VehicleForm'
import PageHeader from "../../components/PageHeader";
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
}))

export default function Vehicles() {

    const classes = useStyles();

    return(
        <>
        <PageHeader
          title="New Vehicle"
          subTitle="Form design with validation"
          icon = {<DriveEtaTwoToneIcon fontSize="large"/>}
          />
        <Paper className={classes.pageContent}>
            <VehicleForm />
        </Paper>
        </>
    )
}