import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });
  const [status, setStatus] = useState({ class: "", msg: "" });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      setStatus({ class: "error", msg: "Нужно согласиться с условиями!" });
      alert("Нужно согласиться с условиями!");
      return;
    }

    // Симуляция отправки
    console.log("Форма отправлена:", form);
    setStatus({ class: "successfully", msg: "Data was sent" });

    // Блокировка повторной отправки
    setSubmitted(true);

    // Очистка полей
    setForm({
      name: "",
      email: "",
      message: "",
      agree: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4"
    >
      <p className={status.class}>{status.msg}</p>
      <div>
        <label className="block mb-1 font-medium">Имя</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
          disabled={submitted}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
          disabled={submitted}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Сообщение</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 h-24 resize-none"
          required
          disabled={submitted}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="w-4 h-4"
          disabled={submitted}
        />
        <label htmlFor="agree" className="text-sm">
          Я согласен с условиями
        </label>
      </div>

      <button
        type="submit"
        disabled={submitted}
        className={`w-full py-2 px-4 rounded-lg text-white transition ${
          submitted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {submitted ? "Форма отправлена" : "Отправить"}
      </button>
    </form>
  );
}

export default Form;
