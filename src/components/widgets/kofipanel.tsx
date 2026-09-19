export default function KofiPanel() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-[#f9f9f9] shadow-sm">
      <iframe
        id="kofiframe"
        src="https://ko-fi.com/shamvoke/?hidefeed=true&widget=true&embed=true&preview=true"
        style={{
          border: "none",
          width: "100%",
          padding: "4px",
          background: "#f9f9f9",
        }}
        height="650"
        title="shamvoke"
        loading="lazy"
      />
    </div>
  )
}
