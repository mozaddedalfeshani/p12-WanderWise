import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import HOST from "../../constant/HOST";

const TgDetails = () => {
  const { id } = useParams();
  const [tg, setTg] = React.useState({});
  //collection of tg person from backend
  React.useEffect(() => {
    const tgData = async () => {
      const res = axios.get(`${HOST}/api/tg/${id}`).then((res) => {
        console.log(res.data);
        setTg(res.data);
      });
    };
    tgData();
  }, []);

  console.log(id);
  if (!tg)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="container mx-auto card my-5 flex flex-col md:flex-row justify-center items-center">
      <div className="card-body md:w-96 w-72 ">
        <img src={tg.image} alt={tg.name} className="rounded-lg" />
      </div>
      <div className="card-body border rounded-md shadow-xl border-t-green-700 md:border-t-white md:border-l-red-400 ">
        <h2 className="card-title">{tg.name}</h2>
        <p>{tg.profile}</p>
        <p>{`Experience: ${tg.experience}`}</p>
        <p>{`Rating: ${tg.rating}`}</p>
        <p>{tg.email}</p>
        <div className="card-actions justify-end">
          {tg?.languages?.map((item, index) => {
            return (
              <div key={index} className="badge badge-secondary">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TgDetails;
