import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','website-design-weekly-decision-brief');
export default function Page(){return renderAug19Article('blog','website-design-weekly-decision-brief')}
