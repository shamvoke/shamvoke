export default function Shamaze3D() {
  return (
    <div className="fixed inset-0 bg-black">
      <iframe
        src="/shamaze3d/index.html"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}