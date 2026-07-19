function WhatsAppButton() {
  const phoneNumber = "917042038422"; // Replace with your mom's WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-3xl">💬</span>
    </a>
  );
}

export default WhatsAppButton;