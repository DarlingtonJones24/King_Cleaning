import Link from "next/link";

export default function NotFound() {
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
        <h1 style={{ margin: "0 0 12px" }}>Pagina niet gevonden</h1>
        <p style={{ margin: "0 0 24px" }}>Deze pagina bestaat niet.</p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "44px",
            padding: "0 20px",
            borderRadius: "999px",
            background: "#0c5660",
            color: "#ffffff",
            fontWeight: 700,
            textDecoration: "none"
          }}
        >
          Terug naar home
        </Link>
      </div>
    </main>
  );
}
