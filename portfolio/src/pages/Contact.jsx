import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const commands = [
    { prompt: t("contact.prompts.name"), field: "name", type: "text" },
    { prompt: t("contact.prompts.company"), field: "company", type: "text" },
    { prompt: t("contact.prompts.email"), field: "email", type: "email" },
    {
      prompt: t("contact.prompts.message"),
      field: "message",
      type: "textarea",
    },
  ];

  const handleInputSubmit = (value) => {
    if (!value.trim()) return;

    const newHistory = [
      ...commandHistory,
      {
        prompt: commands[currentStep].prompt,
        input: value,
        step: currentStep,
      },
    ];
    setCommandHistory(newHistory);
    setFormData((prev) => ({ ...prev, [commands[currentStep].field]: value }));

    if (currentStep < commands.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsProcessing(true);

      emailjs
        .send(serviceId, templateId, formData, publicKey)
        .then((response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          setCommandHistory([
            ...newHistory,
            {
              prompt: "System:",
              input: t("contact.success"),
              step: "success",
              isSystem: true,
            },
          ]);
        })
        .catch((err) => {
          console.error("Email send failed...", err);
          setCommandHistory([
            ...newHistory,
            {
              prompt: "System:",
              input: t("contact.error"),
              step: "fail",
              isSystem: true,
            },
          ]);
        })
        .finally(() => {
          setIsProcessing(false);
          setTimeout(() => {
            setCommandHistory([]);
            setCurrentStep(0);
            setFormData({ name: "", company: "", email: "", message: "" });
          }, 10000);
        });
    }
  };

  const PixelComputer = ({ children }) => (
    <div className="pixel-computer">
      <div className="computer-body">
        <div className="computer-bezel">
          <div className="computer-screen">
            <div className="screen-content">{children}</div>
          </div>
        </div>
        <div className="computer-base">
          <div className="power-button"></div>
          <div className="speaker-left"></div>
          <div className="speaker-right"></div>
        </div>
      </div>
    </div>
  );

  const CommandLine = () => {
    const [currentInput, setCurrentInput] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (currentInput.trim()) {
        handleInputSubmit(currentInput);
        setCurrentInput("");
      }
    };

    return (
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-title">CONTACT_PROTOCOL.EXE</div>
          <div className="terminal-buttons">
            <div className="term-btn minimize"></div>
            <div className="term-btn maximize"></div>
            <div className="term-btn close"></div>
          </div>
        </div>

        <div className="terminal-body">
          <div className="boot-sequence-contact">
            <div className="boot-line">C:\&gt; {t("contact.boot.init")}</div>
            <div className="boot-line">C:\&gt; {t("contact.boot.module")}</div>
            <div className="boot-line">C:\&gt; {t("contact.boot.secure")}</div>
            <div className="boot-line">C:\&gt; {t("contact.boot.ready")}</div>
            <div className="boot-line">
              ═══════════════════════════════════════
            </div>
          </div>

          <div className="command-history">
            {commandHistory.map((cmd, index) => (
              <div
                key={index}
                className={`history-item ${cmd.isSystem ? "system" : ""}`}
              >
                <div className="prompt-line">
                  {cmd.isSystem ? "> " : "C:\\> "}
                  {cmd.prompt}
                </div>
                <div className={`input-line ${cmd.isSystem ? "success" : ""}`}>
                  {cmd.isSystem ? "> " : "  "}
                  {cmd.input}
                </div>
              </div>
            ))}
          </div>

          {isProcessing && (
            <div className="processing">
              <div className="prompt-line">
                C:\&gt; {t("contact.processing")}
              </div>
              <div className="loading-bar">
                <div className="loading-fill"></div>
              </div>
            </div>
          )}

          {!isProcessing && currentStep < commands.length && (
            <div className="current-command">
              <div className="prompt-line">
                C:\&gt; {commands[currentStep].prompt}
              </div>
              <div className="input-container">
                <span className="input-prompt">&gt; </span>
                <input
                  type={
                    commands[currentStep].type === "textarea"
                      ? "text"
                      : commands[currentStep].type
                  }
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit(e);
                  }}
                  className="terminal-input"
                  autoFocus
                />
                <span className="cursor">█</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="contact-container">
      <PixelComputer>
        <CommandLine />
      </PixelComputer>
    </div>
  );
};

export default Contact;
