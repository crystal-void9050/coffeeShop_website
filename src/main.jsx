import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/privacy"
          element={
            <div className="min-h-screen bg-background p-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Privacy Policy
              </h2>
              <p className="text-muted leading-relaxed max-w-2xl">
                Placeholder — add your privacy policy here.
              </p>
            </div>
          }
        />
        <Route
          path="/terms"
          element={
            <div className="min-h-screen bg-background p-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-4">
                Terms & Conditions
              </h2>
              <p className="text-muted leading-relaxed max-w-2xl">
                Placeholder — add your terms here.
              </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
