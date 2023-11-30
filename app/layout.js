// import { Inter } from "next/font/google";

import "./reset.css";
// const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "./store/provider";
export const metadata = {
  title: "Top couvreur",
  description: "site de construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
