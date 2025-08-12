import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProductGrid } from './ProductGrid';
import { BranchInfo } from './BranchInfo';
import { Footer } from './Footer';
import { BRANCHES, DEFAULT_BRANCH } from '../config/branches';
import { useProducts } from '../hooks/useProducts';
import { Branch } from '../types';

export const HomePage: React.FC = () => {
  const [currentBranch, setCurrentBranch] = useState<Branch>(DEFAULT_BRANCH);
  const { products, isLoading, error } = useProducts(currentBranch);

  const handleBranchChange = (branch: Branch) => {
    setCurrentBranch(branch);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        currentBranch={currentBranch}
        onBranchChange={handleBranchChange}
        branches={BRANCHES}
      />

      {/* Hero Section */}
      <Hero />

      {/* Productos */}
      <section id="productos" className="py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBranch.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductGrid
              products={products}
              isLoading={isLoading}
              error={error}
              branchName={currentBranch.name}
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Información de la Sucursal */}
      <section id="sucursales" className="py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBranch.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BranchInfo branch={currentBranch} />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
