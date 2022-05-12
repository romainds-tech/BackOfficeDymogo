import './Filters.css';
import {h} from "preact";

interface IFilters {
    list: Array<string>;
}

export function Filters(props: IFilters): JSX.Element {
    return (
      <>
        <div className='Filters'>
              {props.list.map((item: string) => {
                return (
                  <div className={`Filters-content ${item}`}>
                    <div className='Filters-item'>{item}</div>
                  </div>
                )
              })}
        </div>
      </>
    )
  }
