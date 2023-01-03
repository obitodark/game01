import "./score.styled.css";

const Score = ({ store }) => {
  return (
    <div className="score">
      <h2 style={{ padding: 0, margin: 0, fontWeight: 500 }}> score</h2>
      <h1>{store}</h1>
    </div>
  );
};
export default Score;
