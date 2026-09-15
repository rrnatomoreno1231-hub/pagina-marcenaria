import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oferta Exclusiva | Como Lucrar com Projetos de Marcenaria',
  description: 'Oportunidade única para aprender a transformar projetos de marcenaria em produtos lucrativos.',
};

export default function Up1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
