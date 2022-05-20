import './Filters.css';
import React from "react";

interface IFilters {
    mylist: Array<string>;
}

export function Filters(props: IFilters, toparent: string) {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // send event to parent
        props.mylist.push(toparent);
    };

        return (
            <>
                <div className='Filters'>
                    {props.mylist.map((item: string) => {
                        return (
                            <div key={item}
                                 className={`Filters-content ${item}`}
                                onClick={handleClick}>
                                <div className='Filters-item'>{item}</div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
  }
