import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('research','website-design-handoff-reliability-research');
export default function Page(){return renderAug19Article('research','website-design-handoff-reliability-research')}
