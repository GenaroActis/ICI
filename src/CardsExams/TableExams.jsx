import React from 'react';
import { Table } from 'react-bootstrap';

const TableExams = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Fecha de Examen</th>
                <th>Fecha de Inscripción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PAPER BASED (including R/W/L Fast Track): 16 al 21 de ENERO <br/><br/>
                        FAST TRACK SPEAKING: 20 de ENERO <br/><br/>
                        ONLINE EXAM (R/W/L/S): 20 DE ENERO</td>
                    <td>14 al 21 de DICIEMBRE</td>
                </tr>
                <tr>
                    <td>PAPER BASED: 13 al 18 de FEBRERO <br/> <br/>
                        FAST TRACK SPEAKING: 17 de FEBRERO <br/> <br/>
                        ONLINE EXAM (R/W/L/S): 17 DE FEBRERO</td>
                    <td>20 al 26 de ENERO</td>
                </tr>
                <tr>
                    <td></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>13 al 18 de FEBRERO</td>
                    <td>*</td>
                </tr>
                <tr>
                    <td>20 al 26 de ENERO</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>13 al 18 de MARZO</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>14 al 20 de FEBRERO</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>10 al 15 de ABRIL</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>14 al 20 de MARZO</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>22 al 27 de MAYO</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>24 al 29 de ABRIL</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>12 al 24 de JUNIO</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>25 al 30 de MAYO</td>
                    <td>-</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TableExams;