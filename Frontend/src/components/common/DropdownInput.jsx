import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const itemVariants = {
  open: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 24 } },
  closed: { opacity: 0, scale: 0.3, filter: "blur(20px)", transition: { duration: 0.2 } },
};

const DropdownInput = ({
  label,
  selectedValue,
  setSelectedValue,
  isOpen,
  setIsOpen,
  options = [],
}) => {
  return (
    <div className="relative">
      <label className="text-lg md:text-xl text-white font-semibold">
        {label}
      </label>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-white border-b border-white/50 py-3 w-full flex items-center justify-between mt-2"
      >
        {selectedValue || `Select ${label.toLowerCase()}`}
        <motion.div
          variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <BsChevronDown />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="dropdown"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.4,
                  delayChildren: 0.2,
                  staggerChildren: 0.08,
                },
              },
              closed: { opacity: 0, transition: { duration: 0.2 } },
            }}
            className="absolute top-full left-0 z-50 w-full bg-white rounded-md mt-2 p-2 shadow-lg"
          >
            {options.map((option, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                onClick={() => {
                  setSelectedValue(option);
                  setIsOpen(false);
                }}
                className="text-black text-sm py-2 px-3 rounded-md cursor-pointer hover:bg-gray-100"
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownInput;
