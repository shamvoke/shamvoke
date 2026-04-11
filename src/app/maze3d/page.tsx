export const metadata = {
  title: "Shamaze3D",
  description:
    "A maze game for the curious. Find your way out, or get lost in the fun!",
}

export default function Shamaze3D() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <iframe
        src="/shamaze3d/index.html"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}