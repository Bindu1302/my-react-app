function App() {
  return (
    <div style={{ padding: "40px", fontSize: "28px", fontFamily: "Arial" }}>
      <div>Hello AIMaster.live 🌍</div>
      <br/>
    <input
        type="text"
        placeholder="Enter your name"
        value={name}
        
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "260px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      />

      <br />
    <button
        
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "#fff"
        }}
      >
        Click Me
      </button>
      </div>
  )
}

export default App
