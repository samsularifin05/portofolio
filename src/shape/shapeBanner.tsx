import { motion } from "framer-motion";

const ShapeBanner = () => {
  return (
    <div>
      {/* Kotak */}
      <motion.div
        style={{
          width: 20,
          height: 20,
          boxShadow: "inset 0 0 0 2px #FFB400",
        }}
        className="absolute right-44"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 20, 0],
          transition: { duration: 1, repeat: Infinity },
        }}
      />
      <motion.div
        style={{
          width: 20,
          height: 20,
          boxShadow: "inset 0 0 0 2px #0047FF",
        }}
        className="absolute right-[40rem] top-[40rem]"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 20, 0],
          transition: { duration: 1, repeat: Infinity },
        }}
      />

      {/* //Bulat */}
      <motion.div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 2px #05FF00",
        }}
        className="absolute right-[40rem]"
        animate={{
          x: [30, -10, 30], // Mengubah pergerakan menjadi horizontal
          transition: { duration: 1, repeat: Infinity },
        }}
      />

      <motion.div
        style={{
          width: 0,
          height: 0,
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          borderRight: "20px solid red",
          clipPath: "polygon(0 0, 100px 14px, 0 20px)", // Mendefinisikan segitiga dengan clipPath
        }}
        className="absolute right-[10rem] top-[17rem]"
        animate={{
          x: [30, -10, 30], // Mengubah pergerakan menjadi horizontal
          transition: { duration: 1, repeat: Infinity },
        }}
      />

      <motion.div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 2px #05FF00",
        }}
        className="absolute right-[50rem] top-[18rem]"
        animate={{
          x: [30, -10, 30], // Mengubah pergerakan menjadi horizontal
          transition: { duration: 1, repeat: Infinity },
        }}
      />
      <motion.div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%", // Membuat bentuk bulat
          boxShadow: "inset 0 0 0 2px #FFB400",
        }}
        className="absolute top-10"
        animate={{
          y: [-20, 20, -20], // Mengubah pergerakan menjadi vertikal dengan jarak yang lebih besar
          rotate: [0, 50, 0],
          transition: { duration: 1, repeat: Infinity },
        }}
      />
    </div>
  );
};

export default ShapeBanner;
