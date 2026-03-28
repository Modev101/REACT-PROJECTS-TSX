import { useState } from "react";
import { MainCard } from "./components/MainCard";
import { ThankYou } from "./components/ThankYou";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!email ? (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <MainCard onSubmitEmail={setEmail} />
          </motion.div>
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <ThankYou email={email} onDismiss={() => setEmail(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
