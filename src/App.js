import { useEffect } from "react";
import "./App.css";

const urls = [];
urls[0] = "https://wa.me/+6287715003178";
urls[1] = "https://wa.me/+6287715003184";

const random = Math.floor(Math.random() * urls.length);

export default function Redirection() {
  useEffect(() => {
    window.location.href = urls[random];
  }, []);

  return null;
}
