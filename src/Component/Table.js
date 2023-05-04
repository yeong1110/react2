const Table = (props) => {
    return (
    <table className='w-100 t_wrap'>
        <thead className='table_h'>
            <th style={{"width":"60%"}}>제목</th>
            <th style={{"width":"150px"}}>작성자</th>
            <th style={{"width":"150px"}}>조회수</th>
            <th style={{"width":"150px"}}>작성일지</th>
        </thead>
        <tbody>
            <tr>
                <td className="text-start">{props.title}1</td>
                <td>운영자</td>
                <td>0</td>
                <td>2023-05-02</td>
            </tr>
            <tr>
                <td className="text-start">{props.title}2</td>
                <td>운영자</td>
                <td>0</td>
                <td>2023-05-02</td>
            </tr>
            <tr>
                <td className="text-start">{props.title}3</td>
                <td>운영자</td>
                <td>0</td>
                <td>2023-05-02</td>
            </tr>
            <tr>
                <td className="text-start">{props.title}4</td>
                <td>운영자</td>
                <td>0</td>
                <td>2023-05-02</td>
            </tr>
        </tbody>
    </table>
    );
};

export default Table;