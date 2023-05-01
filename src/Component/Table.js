const Table = (props) => {
    return (
    <table className='w-100 t_wrap'>
        <thead className='table_h'>
            <th style={{"width":""}}>제목</th>
            <th style={{"width":"14%"}}>작성자</th>
            <th style={{"width":"10%"}}>조회수</th>
            <th style={{"width":"15%"}}>작성일지</th>
        </thead>
        <tbody>
            <tr>
                <td>{props.title}1</td>
                <td>운영자</td>
                <td>0</td>
                <td>2023-05-02</td>
            </tr>
        </tbody>
    </table>
    );
};

export default Table;