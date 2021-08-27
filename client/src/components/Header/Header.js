import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <motion.h2 className="logo" initial={{ x: -1000 }} animate={0}>
          GlueGuy
        </motion.h2>
      </Link>
    </header>
  );
}
