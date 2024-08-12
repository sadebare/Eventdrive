const Modal = ({ children, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 overflow-hidden z-10 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[350px] h-fit md:max-w-7xl bg-base-100 p-7 rounded-xl shadow-md z-50"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
