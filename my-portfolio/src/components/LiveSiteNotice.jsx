import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

export default function LiveSiteNotice() {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  return (
    <div className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700 rounded-lg px-4 py-3 flex mb-2 mt-2 items-start justify-between shadow">
      <div className="flex gap-3">
        <AlertTriangle className="w-4 h-4 mt-0.5" />
        <div>
          <p className="text-sm">
            The live site may take a few moments to load due to backend hosting. If it doesn’t load right away, please try refreshing after a few seconds.
          </p>
        </div>
      </div>
      <button
        onClick={() => setShowAlert(false)}
        className="ml-4 mt-0.5 text-yellow-800 dark:text-yellow-200 hover:text-red-500"
        aria-label="Dismiss alert"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}