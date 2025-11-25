import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 space-y-4">
      <h2 className="text-xl font-semibold">Send me a message</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <div>
          <label className="text-sm text-slate-300">Message</label>
          <textarea
            className="w-full mt-1 p-2 rounded bg-slate-900 border border-white/20"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function Input({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="text-sm text-slate-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full mt-1 p-2 rounded bg-slate-900 border border-white/20"
      />
    </div>
  );
}
