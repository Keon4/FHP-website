import React from "react";

export default function Apply() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Application</h1>
      <iframe
        src="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfWPXHVql-SywX0tDZzc3Vmnxh87b0mn2VsWALL155WA_2lRw/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="FHP Application"
      >
        Loading…
      </iframe>
    </div>
  );
}