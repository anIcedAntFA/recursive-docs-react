import { IData } from '../assets/data';

interface IProps {
  data: IData[];
}
function RecursiveTree({ data }: IProps) {
  return (
    <div style={{ marginLeft: '24px' }}>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <RecursiveTree data={item.children} />
        </div>
      ))}
    </div>
  );
}

export default RecursiveTree;
