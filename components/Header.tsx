import Image from "next/image";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-40 flex h-[72px] w-full items-center justify-between border-b border-white/[.05] bg-[#050505]/65 px-6 backdrop-blur-[20px]">
      <Image src="/logo.png" alt="Prashaant Biz" width={350} height={68} priority className="h-auto w-32" />
    </header>
  );
}
