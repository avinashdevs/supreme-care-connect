import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
