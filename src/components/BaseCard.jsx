// Base CardComponent with glass morphism styling
export const BaseCard = ({ children, className = '', ...props }) => {
    return (
      <div
        className={`
          relative
          rounded-xl
          bg-black/20
          backdrop-blur-md
          shadow-lg
          border
          border-white/10
          transition-all
          duration-300
          hover:shadow-xl
          hover:border-white/20
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  };

  // Add a default export for BaseCard
  export default BaseCard;