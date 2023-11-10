import { FC } from "react";
import { clsx } from "clsx";

import InfoGroupLine from "../info-group-line/info-group-line.tsx";

import styles from './info-group.module.scss';

interface InfoLine {
  label: string | number;
  value: string | number;
  type: 'default' | 'accent';
}

interface InfoGroupProps {
  infoLines: InfoLine[];
  borderPosition: 'bottom' | 'top' | 'none';
}

const InfoGroup: FC<InfoGroupProps> = ({ infoLines, borderPosition }) => {
  const infoGroupStyles = clsx({
    [styles.infoGroup]: true,
    [styles.infoGroup_border_top]: borderPosition === "top",
    [styles.infoGroup_border_bottom]: borderPosition === "bottom",
  })

  return (
    <div className={infoGroupStyles}>
      { infoLines.map(infoLine => (<InfoGroupLine infoLine={infoLine}/>) ) }
    </div>
  );
};

export default InfoGroup;
