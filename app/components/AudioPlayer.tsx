"use client";

import { useRef, useState } from "react";
import type { BirdAudio } from "../birds/audioData";

// Stops whichever audio is currently playing when a new one starts.
let globalAudio: HTMLAudioElement | null = null;

export default function AudioPlayer({ file, recordist, license, xcUrl }: BirdAudio) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      if (globalAudio && globalAudio !== audio) globalAudio.pause();
      globalAudio = audio;
      audio.play().catch(() => {});
    }
  };

  return (
    <div
      style={{
        borderTop: "1px solid rgba(14,107,107,0.1)",
        paddingTop: "0.75rem",
        marginTop: "0.875rem",
      }}
    >
      <audio
        ref={audioRef}
        src={file}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          if (globalAudio === audioRef.current) globalAudio = null;
        }}
      />

      <button
        onClick={toggle}
        aria-label={playing ? "Pause recording" : "Play bird call recording"}
        className="rounded-full text-xs font-medium px-3 py-1 transition-colors"
        style={
          playing
            ? { background: "#0E6B6B", color: "#EFE3CE", border: "1px solid #0E6B6B" }
            : {
                background: "transparent",
                color: "#0E6B6B",
                border: "1px solid rgba(14,107,107,0.35)",
              }
        }
      >
        {playing ? "▐▐  Playing…" : "▶  Play call"}
      </button>

      <p
        className="mt-1.5 text-xs"
        style={{ color: "#8A8680", lineHeight: 1.4 }}
      >
        Rec.{" "}
        <a
          href={xcUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-75 transition-opacity"
          style={{ color: "#6E6B66" }}
        >
          {recordist}
        </a>
        {" · "}
        {license}
      </p>
    </div>
  );
}
