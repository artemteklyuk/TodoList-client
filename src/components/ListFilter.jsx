import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/select/MySelect";

const ListFilter = ({filter, setFilter}) => {
    return (
        <div className="filter_container">
            <MyInput
                value={filter.q}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default ListFilter;