import './Filters.css';

interface IFilters {
    list: Array<string>;
}

export function Filters(props: IFilters): JSX.Element {
    return (
      <>
        <div className='Filters'>
              {props.list.map((item: string) => {
                return (

                  <div className='filters-content'>
                    <div className='filters-item'>{item}</div>
                  </div>

                )
              })}
        </div>
      </>
    )
  }
