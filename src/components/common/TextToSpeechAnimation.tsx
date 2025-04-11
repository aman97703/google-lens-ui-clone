export default function TextToSpeechAnimation() {
  return (
    <div className="flex space-x-3 items-center">
      {/* Blue dot */}
      <div
        className={`w-4 h-4 rounded-full bg-blue-500  animate-bounce `}
        style={{
          animationDelay: "0ms",
          animationDuration: "1s",
        }}
      />

      {/* Red dot */}
      <div
        className={`w-4 h-4 rounded-full bg-red-500  animate-bounce `}
        style={{
          animationDelay: "250ms",
          animationDuration: "1s",
        }}
      />

      {/* Yellow/Amber dot */}
      <div
        className={`w-4 h-4 rounded-full bg-yellow-500  animate-bounce `}
        style={{
          animationDelay: "500ms",
          animationDuration: "1s",
        }}
      />

      {/* Green dot */}
      <div
        className={`w-4 h-4 rounded-full bg-green-500  animate-bounce `}
        style={{
          animationDelay: "750ms",
          animationDuration: "1s",
        }}
      />
    </div>
  );
}
