import {FC, memo} from "react";

import PlusIcon from "./plus-icon.tsx";
import CheckIcon from "./check-icon.tsx";

type IconName = 'plus' | 'check';

interface IconsProps {
  iconName: IconName;
}

const Icons: FC<IconsProps> = memo(({ iconName }) => {

  switch (iconName) {
    case 'plus':
      return <PlusIcon/>

    case 'check':
      return <CheckIcon/>

    default:
      return null
  }
});

export default Icons;
