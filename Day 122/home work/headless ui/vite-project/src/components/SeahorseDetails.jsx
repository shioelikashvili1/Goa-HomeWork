import { useParams } from 'react-router-dom';

function SeahorseDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-semibold">ზღვის ცხენის დეტალები</h2>
      <p>ეს არის ზღვის ცხენის ID: {id}</p>
    </div>
  );
}

export default SeahorseDetails;
