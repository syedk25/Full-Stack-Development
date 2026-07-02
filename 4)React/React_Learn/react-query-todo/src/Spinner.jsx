export default function Spinner() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid lightgray',
          borderTop: '4px solid blue',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: 'auto',
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
