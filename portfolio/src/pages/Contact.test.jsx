// src/__tests__/Contact.test.jsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

// Mock EmailJS
jest.mock("@emailjs/browser", () => ({
  send: jest.fn(() => Promise.resolve({ status: 200, text: "OK" })),
}));

const fillField = async (value) => {
  const terminalInput = screen.getByRole("textbox");
  fireEvent.change(terminalInput, { target: { value } });
  fireEvent.keyDown(terminalInput, { key: "Enter", code: "Enter" });
};

describe("Contact Form", () => {
  const renderContact = () =>
    render(
      <I18nextProvider i18n={i18n}>
        <Contact />
      </I18nextProvider>
    );

  it("should submit successfully with valid input", async () => {
    renderContact();
    await fillField("John Doe");
    await fillField("OpenAI");
    await fillField("john@example.com");
    await fillField("This is a message");

    expect(await screen.findByText(/message received/i)).toBeInTheDocument();
  });

  it("should block submission with invalid email", async () => {
    renderContact();
    await fillField("Jane Doe");
    await fillField("OpenAI");
    await fillField("notanemail");
    await fillField("Test message");

    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
  });

  it("should require all fields", async () => {
    renderContact();
    await fillField(""); // Name
    await fillField(""); // Company
    await fillField(""); // Email
    await fillField(""); // Message

    await waitFor(() => {
      expect(
        screen.getByText(/please fill in all fields/i)
      ).toBeInTheDocument();
    });
  });
});
