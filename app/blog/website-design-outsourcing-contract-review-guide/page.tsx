import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('blog', 'website-design-outsourcing-contract-review-guide');
export default function Page(){return renderAug20Article('blog', 'website-design-outsourcing-contract-review-guide')}
