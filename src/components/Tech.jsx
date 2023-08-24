import { BallCanvas } from "./canvas";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-1">
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} material={technology.material} />
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
