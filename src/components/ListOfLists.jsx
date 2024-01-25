import React from 'react';
import ListItm from "./ListItm";

const ListOfLists = ({lists, remove}) => {
    return (
        <div className="lists_container">
            {lists.map((list, index) =>
                <ListItm remove={remove}
                         number={index + 1}
                         list={list}
                         key={list.id}/>
            )}
        </div>
    );
};

export default ListOfLists;