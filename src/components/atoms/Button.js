export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition"
      >
        {children}
      </button>
    );
}
  

