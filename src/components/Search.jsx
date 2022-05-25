import {Input} from 'antd';
import { useState } from 'react';

export default function Search(props){

    const [searchData, setSearchData] = useState('');

    function handleSearchData(event){

        setSearchData(event.target.value);

        props.checkCoincidences(event.target.value);
    }

    return(
        <form>
            <label>Search</label>
            <Input name='search' value={searchData} type='text' onChange={handleSearchData} />
        </form>
    );
};