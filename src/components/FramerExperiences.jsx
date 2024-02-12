import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChatMessage = ({ isUser, message, name, imageUrl, lastSeen }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, x: isUser ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`flex mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {!isUser && (
        <img
          src={imageUrl || "https://example.com/framer-profile-image.jpg"}
          alt={name}
          className="w-10 h-10 object-cover rounded-full mr-2"
        />
      )}
      <div
        className={`max-w-md rounded-lg p-4 ${
          isUser ? "bg-green-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="flex justify-between mb-2">
          {!isUser && <p className="text-sm font-semibold">{name}</p>}
          <p className="text-xs text-gray-500">{lastSeen}</p>
        </div>
        <p className="text-base">{message}</p>
      </div>
      {isUser && (
        <img
          src={imageUrl || "https://example.com/user-profile-image.jpg"}
          alt={name}
          className="w-10 h-10 object-cover rounded-full ml-2"
        />
      )}
    </motion.div>
  );
};

const FramerExperiencesChat = () => {
  const framerExperiences = [
    {
      name: "John Doe",
      imageUrl:
        "https://png.pngtree.com/background/20230613/original/pngtree-an-indian-farmer-smiling-among-fields-picture-image_3430467.jpg",
      message:
        "Green Grove has transformed my farming practices. I've seen increased yields and better sustainability.",
      lastSeen: "Last seen 3 minutes ago",
    },
    {
      name: "Jane Smith",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/05/26/12/36/indian-1417068_1280.jpg",
      message:
        "The support from Green Grove's experts has been invaluable. I'm grateful for their assistance in every step.",
      lastSeen: "Last seen 10 minutes ago",
    },
    {
      name: "John Doe",
      imageUrl:
        "https://png.pngtree.com/background/20230613/original/pngtree-an-indian-farmer-smiling-among-fields-picture-image_3430467.jpg",
      message:
        "Green Grove has transformed my farming practices. I've seen increased yields and better sustainability.",
      lastSeen: "Last seen 3 minutes ago",
    },
    // Add more framer experiences as needed
  ];

  return (
    <div className="mt-8">
      <div className="relative">
        <img
          src="https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg"
          alt="Chat background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        <div className="bg-opacity-75 bg-slate-50 py-8 px-4 rounded-lg relative z-10">
          <h2 className="text-3xl font-bold mb-4">Farmers' Experiences (Chat)</h2>
          <div>
            {framerExperiences.map((experience, index) => (
              <ChatMessage key={index} isUser={index % 2 === 0} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramerExperiencesChat;
