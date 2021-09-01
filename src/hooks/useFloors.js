import { useEffect, useState } from "react";
import { getFloors } from "./../api/callFloors";

const useFloors = () => {
  const [floors, setFloors] = useState([]);

  const readAllFloors = async () => {
    getFloors().then((floors) => setFloors(floors));
  };

  const readFloor = (floorId) => {
    return floors.find((floor) => floor.id === floorId);
  };

  useEffect(() => {
    readAllFloors();
  }, []);

  return { floors, readAllFloors, readFloor };
};

export default useFloors;
