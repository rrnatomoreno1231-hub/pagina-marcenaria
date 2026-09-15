import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagamento Confirmado | Apostila de Marcenaria',
  description: 'Seu acesso aos +1.000 projetos de marcenaria foi liberado com sucesso.',
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
