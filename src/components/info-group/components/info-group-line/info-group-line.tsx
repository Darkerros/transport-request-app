import { clsx } from "clsx";
import type { FC } from "react";

import styles from './info-group-line.module.scss';

export interface InfoLine {
  label: string | number;
  value: string | number;
  type: 'default' | 'accent';
}

interface InfoGroupLineProps {
  infoLine: InfoLine;
}

const InfoGroupLine: FC<InfoGroupLineProps> = ({ infoLine }) => {
  const infoGroupLineStyle = clsx({
    [styles.infoGroupLine]: true,
    [styles.infoGroupLine_color_accent]: infoLine.type === 'accent',
  })

  return (
    <p className={infoGroupLineStyle}>
      { infoLine.label } <span className={styles.infoGroupLine__lineSubstring}>{infoLine.value}</span>
    </p>
  )
};

export default InfoGroupLine;
