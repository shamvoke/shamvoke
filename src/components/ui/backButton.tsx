import Link from "next/link";

interface BackButtonProps {
  href?: string;
  text?: string;
}

export default function BackButton({ href = "/", text = "Back to Homepage" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="block w-fit mx-auto px-6 py-2 rounded-md text-white font-bold hover:bg-voke transition bg-linear-to-r from-sham to-voke"
    >
      {text}
    </Link>
  );
}