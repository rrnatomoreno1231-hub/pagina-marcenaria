'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF7F2] px-4 text-center">
      <h2 className="text-2xl font-bold text-[#2C241E]">Algo deu errado!</h2>
      <p className="mt-2 text-[#7A6B5D]">Ocorreu um erro inesperado ao carregar esta página.</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-xl bg-[#C15C3D] px-6 py-3 font-semibold text-white transition hover:bg-[#A84B2F]"
      >
        Tentar novamente
      </button>
    </div>
  );
}
