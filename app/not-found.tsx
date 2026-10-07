import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF7F2] px-4 text-center">
      <h1 className="text-4xl font-bold text-[#2C241E]">404 - Página não encontrada</h1>
      <p className="mt-4 text-[#7A6B5D]">A página que você procura não existe ou foi movida.</p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-[#C15C3D] px-6 py-3 font-semibold text-white transition hover:bg-[#A84B2F]"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
