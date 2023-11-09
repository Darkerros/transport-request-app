import {FC} from "react";
import PlusIcon from "./plus-icon.tsx";

type IconName = 'plus';

interface IconsProps {
  iconName: IconName;
}

const Icons: FC<IconsProps> = ({ iconName }) => {

  switch (iconName) {
    case 'plus':
      return <PlusIcon/>

    default:
      return null
  }
};

export default Icons;
