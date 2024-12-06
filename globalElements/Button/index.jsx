import { MotionButton } from "../motion";

const ButtonComponent = ({
  className,
  title,
  children,
  whileHover,
  whileTap,
  onClick,
  ...props
}) => {
  return (
    <MotionButton
      whileHover={{
        scale: 1.01,

        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.05)",
        transition: { duration: 0.2 }, // animasyonun kaç saniyede tamamlanacağı
        ...whileHover,
      }}
      transition={{
        duration: 0.2, //  animasyon sonrası buttonun kaç saniyede eski haline döneceği
      }}
      whileTap={{ opacity: 0.8, ...whileTap }}
      onClick={onClick}
      {...props}
      //round ve color className prop'larda verilmeli
      className={`
        flex items-center justify-center py-3 px-5 rounded-md text-xl w-fit     ${className}
      `}
    >
      {title ? title : children}
    </MotionButton>
  );
};

export default ButtonComponent;
