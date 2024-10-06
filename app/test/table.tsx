import React from 'react';

import './table.scss';

type TableProps = {
    className?: string;
    props?: React.HTMLAttributes<HTMLTableElement>;
    children: React.ReactNode;
};

// 테이블 table 태그
const Table = ({ className, ...props }: TableProps) => {
    return <table className={`${className} table`} {...props} />;
};

// 테이블 헤드 thead 태그
const TableHead = ({ className, ...props }: TableProps) => {
    return (
        <thead className={`${className} header`}>
            <tr>{props.children}</tr>
        </thead>
    );
};

// 테이블 바디 tbody 태그
const TableBody = ({ className, ...props }: TableProps) => {
    return (
        <tbody className={`${className} body`}>
            <tr>{props.children}</tr>
        </tbody>
    );
};

// 테이블 기본 셀 td 태그
const TableCell = ({ className, ...props }: TableProps) => {
    return <td className={`${className} default`}>{props.children}</td>;
};

export { Table, TableHead, TableBody, TableCell };
