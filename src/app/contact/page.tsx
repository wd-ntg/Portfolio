"use client";

import { useState } from "react";
import { ContainerPage } from "@/components/ContainerPage";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useMode } from "@/lib/context/modeContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!captchaValue) {
      alert("Vui lòng xác thực CAPTCHA trước khi gửi.");
      return;
    }
    e.preventDefault();

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, captcha: captchaValue }),
    });

    const data = await res.json();
    if (res.status === 200) {
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setCaptchaValue(null);
    } else {
      alert(`Failed to send email: ${data.message}`);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const {mode} = useMode()

  return (
    <ContainerPage key="contact-page">
      <main className={`sm:col-span-4 sm:col-start-3 sm:row-start-1 min-h-screen sm:my-28 my-16 mx-4 ${mode ? "text-white" : "text-black"}`}>
        <div className="text-3xl font-semibold">Liên hệ</div>
        <div className="text-sm mt-1 text-white/60">
          Mọi người liên hệ công việc với tớ qua form này nhé.
        </div>
        <div className="text-white/60 mb-2 sm:w-[732px] w-[464px] sm:overflow-auto overflow-hidden">
          ..................................................................................................................................................................................................................
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="text-2xl font-semibold" htmlFor="name">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Họ và tên của bạn"
              className={`w-[98%] mx-2 block border-none p-4 mb-4 rounded-md mt-4 outline-none  ${mode ? "bg-white" : "bg-[#141414]"}`}
              required
            />
          </div>
          <div>
            <label className="text-2xl font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập địa chỉ email của bạn"
              className={`w-[98%] mx-2 block border-none p-4 mb-4 rounded-md mt-4 outline-none bg-[#141414] ${mode ? "bg-white" : ""}`}
              required
            />
          </div>
          <div>
            <label className="text-2xl font-semibold" htmlFor="subject">
              Chủ đề
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Nhập tên chủ đề"
              className={`w-[98%] mx-2 block border-none p-4 mb-4 rounded-md mt-4 outline-none bg-[#141414] ${mode ? "bg-white" : ""}`}
            />
          </div>
          <div>
            <label className="text-2xl font-semibold" htmlFor="message">
              Nội dung
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội dung email của bạn"
              className={`w-[98%] mx-2 block border-none p-4 mb-4 rounded-md mt-4 outline-none bg-[#141414] ${mode ? "bg-white" : ""}`}
              required
            ></textarea>
          </div>

          <div className="flex justify-center flex-col mx-4">
            <div className="text-sm text-white/60 mb-2">Lưu ý: Điền captcha trước khi gửi nhé! </div>
            <HCaptcha
              sitekey="e4dac2c8-459e-4c3e-bb4a-f67645ce4144" 
              onVerify={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md px-4 py-2 my-6 bg-white text-black"
          >
            Gửi Thông Điệp
          </button>
        </form>
      </main>
    </ContainerPage>
  );
}
