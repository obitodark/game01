export const styles = {
  background: "white",
  borderRadius: "10px",
  border: "none",
  padding: "10px",
  width: "130px",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Score = () => {
  return (
    <div style={styles}>
      <h2 style={{ padding: 0, margin: 0, fontWeight: 500 }}> score</h2>
      <h1
        style={{
          fontSize: "60px",
          padding: 0,
          margin: 0,
          fontWeight: 900,
          color: "#565365",
        }}
      >
        12
      </h1>
    </div>
  );
};
export default Score;
