import React, { useState } from 'react'
import VehicleForm from './VehicleForm'
import PageHeader from "../../components/PageHeader";
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, ListItemIcon } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as vehicleService from "../../services/vehicleService"

const useStyles = makeStyles(theme => ({
    pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
}))

const headCells = [
    {id:'fullName', label:'Vehicle Name'},
    {id:'email', label:'Email Address (Personal)'},
    {id:'mobile', label:'Mobile Number'},
    {id:'department', label:'Department'},
]

export default function Vehicles() {

    const classes = useStyles();
    const [records, serRecords]=useState(vehicleService.getAllVehicles())

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells);

    return(
        <>
        <PageHeader
          title="New Vehicle"
          subTitle="Form design with validation"
          icon = {<DriveEtaTwoToneIcon fontSize="large"/>}
          />
        <Paper className={classes.pageContent}>
            {/* <VehicleForm /> */}
            <TblContainer>
                <TblHead />
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key ={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                            </TableRow>))
                    }
                </TableBody>
            </TblContainer>
            <TblPagination />
        </Paper>
        </>
    )
}