import './Sorts.css';

interface ISorts {
    list: Array<string>;
}

export function Sorts(props: ISorts): JSX.Element {
    return (
      <>
        <div className='Sorts'>
              {props.list.map((item: string) => {
                return (

                  <div key={item} className='Sorts-content'>
                    <div className='Sorts-item'>{item}</div>
                  </div>

                )
              })}
        </div>
      </>
    )
  }
