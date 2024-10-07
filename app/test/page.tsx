'use client';

import React from 'react';

import { Table, TableBody, TableCell, TableHead } from './table';

export default function page() {
    return (
        <Table>
            <TableHead>
                {dummyData.map(([key, value]) => (
                    <td key={value}>{ value}</td>
                ))}
            </TableHead>
            <TableBody>
                <TableCell>sdfdsfd</TableCell>
                <TableCell>sdfdsfd</TableCell>
                <TableCell>sdfdsfd</TableCell>
                <TableCell>sdfdsfd</TableCell>
            </TableBody>
        </Table>
    );
}

const dummyData = [
    { test1: 1, test2: 2, test3: 3, test4: 4 },
    { test1: 1, test2: 2, test3: 3, test4: 4 },
    { test1: 1, test2: 2, test3: 3, test4: 4 },
    { test1: 1, test2: 2, test3: 3, test4: 4 },
];
