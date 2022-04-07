import React from "react";
import {makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles((theme) => createStyles({
    table: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    tableHead: {
        backgroundColor: purple['A100'],
    }
}));

function MainTable(props){
    const classes = useStyles();

    const {headerList, rows} = props;

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {/* ヘッダー部分 */}
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {headerList.map((item, index) => (
                            <TableCell align="center" key={index}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                {/* ボディ部分 */}
                <TableBody>
                    { rows.map((row, i) => (
                        <TableRow key={i}>
                            {Object.keys(row).map((key, j) => {
                                return(
                                    <TableCell align="center" key={j}>{row[key]}</TableCell>
                                );
                            })}
                        </TableRow> 
                    ))}
                </TableBody>

            </Table>
     </TableContainer>
    );
}
export default MainTable;