import React, { useState } from 'react'
import VehicleForm from './VehicleForm'
import PageHeader from "../../components/PageHeader";
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, ListItemIcon, InputAdornment, Toolbar } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as vehicleService from "../../services/vehicleService";
import Controls from "../../components/controls/Controls";
import {Search} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        },
    searchInput:{
        width:'75%'
    }
}))

const headCells = [
    {id:'fullName', label:'Vehicle Name'},
    {id:'email', label:'Email Address (Personal)'},
    {id:'mobile', label:'Mobile Number'},
    {id:'department', label:'Department', disableSorting: true},
]

export default function Vehicles() {

    const classes = useStyles();
    const [records, serRecords]=useState(vehicleService.getAllVehicles())
    const[filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells, filterFn);

    const handleSearch = e =>{
        let target = e.target;
        setFilterFn({
            fn:items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    return(
        <>
        <PageHeader
          title="New Vehicle"
          subTitle="Form design with validation"
          icon = {<DriveEtaTwoToneIcon fontSize="large"/>}
          />
        <Paper className={classes.pageContent}>
            {/* <VehicleForm /> */}
            <Toolbar>
                <Controls.Input
                    label="Search Vehicles"
                    className = {classes.searchInput}
                    InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={ handleSearch }
                    />                   
            </Toolbar>
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