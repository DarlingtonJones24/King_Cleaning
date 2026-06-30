"use client";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#edf5f3",
        color: "#10272c",
        fontFamily: "Segoe UI, system-ui, sans-serif"
      }}
    >
      <div style={{ maxWidth: "520px", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 12px" }}>Er ging iets mis</h1>
        <p style={{ margin: "0 0 24px" }}>De pagina kon niet worden geladen.</p>
        <button
          type="button"
          onClick={reset}
          style={{
            minHeight: "44px",
            padding: "0 20px",
            border: 0,
            borderRadius: "999px",
            background: "#0c5660",
            color: "#ffffff",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Opnieuw proberen
        </button>
      </div>
    </main>
  );
}
