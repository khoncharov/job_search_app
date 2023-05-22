import './spinner.css';

export const SpinnerComponent: React.FC = () => {
  return (
    <div className="spinner">
      <div className="spinner-mark"></div>
      <div className="spinner-mark"></div>
      <div className="spinner-mark"></div>
    </div>
  );
};

export default SpinnerComponent;
