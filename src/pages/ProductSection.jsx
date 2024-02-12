import React, { useState } from "react";
import { motion } from "framer-motion";

const Product = ({ name, description, imageUrl, price, onClick }) => (
  <motion.div
    className="border p-4 mb-4 flex flex-col items-center cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <img
      src={imageUrl}
      alt={name}
      className="w-32 h-32 object-cover mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-500 font-bold">{`Price: ${price}`}</p>
    </div>
  </motion.div>
);

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      name: "Antibiotics",
      description:
        "Antibiotics inhibit the growth of or kill bacteria. Examples include penicillin, amoxicillin, ciprofloxacin, and azithromycin.",
      imageUrl: "https://example.com/antibiotics.jpg",
      price: "Varies widely depending on the specific antibiotic and formulation.",
    },
    {
      name: "Corticosteroids",
      description:
        "Corticosteroids mimic the effects of hormones your body naturally produces in your adrenal glands. Examples include prednisone, dexamethasone, and hydrocortisone.",
      imageUrl: "https://example.com/corticosteroids.jpg",
      price: "Can range from moderate to expensive, depending on the formulation and brand.",
    },
    {
      name: "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)",
      description:
        "NSAIDs work by blocking enzymes that help produce chemicals involved in inflammation. Examples include ibuprofen, aspirin, and naproxen.",
      imageUrl: "https://example.com/nsaids.jpg",
      price: "Usually affordable, available over-the-counter and by prescription.",
    },
    {
      name: "Immunosuppressants",
      description:
        "Immunosuppressants weaken the body's immune response, often by suppressing the activity of certain types of white blood cells. Examples include cyclosporine, methotrexate, and mycophenolate.",
      imageUrl: "https://example.com/immunosuppressants.jpg",
      price: "Generally expensive.",
    },
    {
      name: "Colony-Stimulating Factors (CSFs)",
      description:
        "CSFs stimulate the bone marrow to produce more white blood cells, boosting the body's ability to fight infections. Examples include filgrastim and pegfilgrastim.",
      imageUrl: "https://example.com/csfs.jpg",
      price: "Typically expensive.",
    },
    {
      name: "Monoclonal Antibodies",
      description:
        "Monoclonal antibodies are laboratory-made proteins that mimic the immune system's ability to fight off harmful pathogens or abnormal cells. Examples include infliximab, adalimumab, and rituximab.",
      imageUrl: "https://example.com/monoclonal-antibodies.jpg",
      price: "Often very expensive.",
    },
  ];
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="mt-8 container mx-auto mb-8">
      <h2 className="text-3xl font-bold mb-4">Neutrophil Medicines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            price={product.price}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-8 max-w-2xl rounded-lg shadow-md"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {selectedProduct.name}
            </h2>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-green-500 font-bold">{`Price: ${selectedProduct.price}`}</p>
            <button
              className="bg-green-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-600 transition duration-300"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductSection;