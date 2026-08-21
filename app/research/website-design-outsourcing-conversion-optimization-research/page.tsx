import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('research', 'website-design-outsourcing-conversion-optimization-research');
export default function Page(){return renderAug20Article('research', 'website-design-outsourcing-conversion-optimization-research')}
