    import { useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";

    function Chat() {
      const [open, setOpen] = useState(false);
      const [messages, setMessages] = useState([
        {
          sender: "bot",
          text: "Hi! 👋 Welcome to Sora Dental Clinic. How can we assist you today?",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      const [input, setInput] = useState("");
      const [typing, setTyping] = useState(false);
      const [awaitingInfo, setAwaitingInfo] = useState(null);
      const [appointmentData, setAppointmentData] = useState({});

      const services = [
        { name: "Painless Root Canal", price: "₹4,500" },
        { name: "Teeth Whitening", price: "₹3,000" },
        { name: "Braces (Metal)", price: "₹30,000" },
        { name: "Braces (Ceramic)", price: "₹45,000" },
        { name: "Dental Implants", price: "₹25,000" },
      ];

      const quickReplies = [
        "Book an Appointment",
        "Treatments & Prices",
        "Emergency Dental Care",
        "Clinic Location",
        "Dental Checkup Info",
        "Contact Number",
      ];

      const extendedReplies = {
        hi: "Hey! 😊 Excited to help with your dental needs at Sora Dental! What's up?",
  hello: "Hi there! Welcome to Sora Dental Clinic. How can I make your day brighter?",
  "book appointment": "Awesome! Let's book an appointment. Please provide your name, phone number",
  "sora dental":"Sora Dental is a trusted dental clinic in Gachibowli, Hyderabad, offering expert dental care.",
  "who is sora dental": "Sora Dental is a trusted dental clinic in Gachibowli, Hyderabad, offering expert dental care.",
  "what is sora dental": "Sora Dental provides a wide range of dental treatments including checkups, cosmetic dentistry, and preventive care.",
  "rating of soradental": "Currently, no public ratings are available. Please contact Sora Dental directly for more info.",
  "how to book sora dental appointment": "You can book an appointment by calling Sora Dental at 9398720680.",
  "where is sora dental located": "Sora Dental is located in Gachibowli, Hyderabad.",
  "how are you": "I'm as chipper as a polished tooth! 😁 What's on your mind?",
  "i am fine": "Awesome to hear! 😄 Ready to keep that smile perfect? What's next?",
  "who are you": "I'm SmileBot, your go-to assistant for all things Sora Dental! 🦷",
  thanks: "No problem! 😊 Happy to help with your smile. Anything else?",
  "thank you": "You're welcome! 😁 Let me know how else I can assist.",
  "thankyou": "You're welcome! 😁 Let me know how else I can assist.",
  okay: "Okay! 😊 Happy to help further if needed.",
  bye: "See ya! Keep that smile shining bright! 😊",
  "good morning": "Morning! 🌞 Ready to make your smile sparkle today?",
  "good night": "Night! 🪥 Brush and floss before bed for a dazzling smile!",
  "your name": "I'm SmileBot, here to simplify your dental queries at Sora Dental! 🦷",
  "dental checkup": "Our checkup includes cleaning, X-rays, and oral health review—every 6 months keeps smiles healthy! Book now?",
  "how to brush": "Brush twice daily with fluoride toothpaste. Gentle circles, include tongue and gums! Want brushing tips?",
  "flossing tips": "Floss daily with 18” of floss, gently slide between teeth. Need a step-by-step guide?",
  emergency: "Please call our 24/7 helpline: +91 98765 43210. Or type your issue here, and we'll guide you as fast as possible.",
  swelling: "Facial swelling can be serious. Apply a cold compress and seek urgent care. Call our emergency line: +91 98765 43210.",
  bleedinggums: "Bleeding gums may indicate infection. Rinse gently with saltwater and schedule an urgent checkup.",
  toothache: "A toothache could be caused by decay, infection, or injury. Rinse with warm saltwater, avoid very hot or cold foods, and take an over-the-counter pain reliever if needed. Please call our 24/7 emergency helpline: +91 98765 43210 to book an urgent checkup.",
  "knocked out tooth": "Keep the tooth moist in milk or saliva and call our emergency helpline immediately.",
  "severe toothache": "Take an over-the-counter pain reliever and avoid very hot/cold foods. Contact us right away.",
  "jaw pain": "Jaw pain could indicate TMJ or injury. Avoid chewing hard foods and call for evaluation.",
  "broken braces": "Cover sharp ends with orthodontic wax and book a quick repair appointment.",
  "bleeding": "Continuous bleeding in the mouth can indicate infection or injury. Rinse gently with saltwater, apply light pressure with a clean gauze, and avoid spitting. Please call our 24/7 emergency helpline: +91 98765 43210 for urgent assistance.",
  "loose crown": "Try to keep the crown in place with dental cement or toothpaste. Contact us ASAP.",
  pain: "Persistent or severe tooth pain may indicate infection or nerve issues. Take an over-the-counter pain reliever, avoid very hot or cold foods, and book an urgent appointment with us. If the pain is unbearable, please call our 24/7 emergency line: +91 98765 43210.",
  abscess: "Dental abscess is an emergency. Rinse with warm salt water and seek urgent treatment.",
  chipped: "Save any broken tooth pieces, rinse your mouth with warm water, and schedule an emergency appointment.",
  "knocked out": "Keep the tooth moist in milk or saliva and call our emergency helpline immediately.",
  severe: "This could be serious. Contact our 24/7 emergency line: +91 98765 43210 right away.",
  jaw: "Jaw pain or injury may indicate a fracture or TMJ issue. Keep your jaw stabilized and call for emergency evaluation.",
  broken: "Broken teeth, braces, or crowns need quick repair. Contact our emergency support line immediately.",
  abscess: "Dental abscess is a serious infection. Rinse with warm salt water and call +91 98765 43210 immediately.",
  "lost filling": "Avoid chewing on that side, use temporary dental wax if needed, and schedule an emergency repair.",
  gum: "Gum swelling or bleeding could signal infection. Rinse with warm salt water and contact us urgently.",
  extraction: "Heavy bleeding or severe pain after extraction? Apply pressure with gauze and call +91 98765 43210 immediately.",
  burning: "Burning sensations may indicate irritation or infection. Avoid spicy foods and seek prompt care if it persists.",
  ulcers: "Painful ulcers lasting more than 10 days need evaluation. Rinse with saltwater and book an urgent checkup.",
  cracked: "Cracked teeth or dentures require quick repair to prevent further damage. Contact us ASAP.",
  wisdom: "Wisdom tooth pain can escalate quickly. Use warm saltwater rinse and call for an urgent evaluation.",
  stuck: "If an object is stuck between your teeth, gently floss. If it doesn’t come out, call us for emergency care.",
  orthodontic: "Broken braces or severe orthodontic pain? Use orthodontic wax for relief and schedule an urgent visit.",
  facial: "Facial injuries or swelling need immediate assessment. Apply cold compresses and visit our clinic right away.",
  sensitivity: "Severe sensitivity may indicate deep decay or nerve issues. Use desensitizing toothpaste and seek prompt care.",
  retainer: "Stop using a broken retainer to avoid injury and book a repair appointment as soon as possible.",
  tongue: "Rinse with cold water and apply ice. If bleeding doesn’t stop, call +91 98765 43210 immediately.",
  lip: "Clean the area, apply pressure to stop bleeding, and seek stitches if required. Call for urgent help.",
  "cheek": "Rinse with warm water and apply a cold compress to reduce swelling. Book an urgent checkup if pain persists.",
  grinding: "Severe teeth grinding can damage teeth. Use a mouthguard and book a consultation for long-term care.",
  "dry socket": "Severe pain after extraction? Avoid straws, rinse gently, and call +91 98765 43210 immediately.",
  implant: "Loose or painful dental implants require urgent evaluation. Avoid chewing on the affected side and call us.",
  bridge: "A fractured bridge needs prompt repair. Stop using it and schedule an emergency visit.",
  issue: "Please describe your issue in detail. For emergencies, call our 24/7 helpline: +91 98765 43210.",
  issues: "Could you share more details about your issues? If urgent, please call +91 98765 43210.",
  problem: "Tell me your dental problem, and I'll guide you. For emergencies, call +91 98765 43210 immediately.",
  problems: "Describe your dental problems for assistance. For urgent care, contact +91 98765 43210.",
  "can't eat": "Difficulty eating can signal a serious issue. Avoid hard foods and call +91 98765 43210.",
  "face swollen": "Severe facial swelling is an emergency. Apply cold compresses and call our 24/7 helpline right away: +91 98765 43210.",
  "teeth whitening safe": "Our whitening is safe, using pro-grade gels. Slight sensitivity possible. Ready to book?",
  "braces duration": "Braces take 1–3 years. Metal’s budget-friendly, ceramic’s discreet. Want a consultation?",
  "cost of implants": "Implants cost ₹25,000/tooth—durable, natural-looking, long-lasting. Interested?",
  "root canal pain": "Our root canals are comfortable with anesthesia. Mild soreness fades fast. Book one?",
  "dental insurance": "We accept most insurance plans. Bring details to your visit or we’ll verify for you.",
        
        location: (
          <span>
            Third Floor, Plot no 8-1 & 8-2, Khajaguda - Nanakramguda Rd, Prashant Hills, Rai Durg, Hyderabad, Telangana 500032.{" "}
            <a
              href="https://maps.app.goo.gl/235j3sVGXmCtV7y27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              View on Google Maps
            </a>.
          </span>
        ),
        "where is clinic located": (
          <span>
          Third Floor, Plot no 8-1 & 8-2, Khajaguda - Nanakramguda Rd, Prashant Hills, Rai Durg, Hyderabad, Telangana 500032{" "}
            <a
              href="https://maps.app.goo.gl/235j3sVGXmCtV7y27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Get Directions
            </a>.
          </span>
        ),
         "contact number": "Call us at +91 98765 43210 — 24/7 emergency support available!",
  "phone number": "Reach us at +91 98765 43210 anytime. Want to book an appointment?",
  "opening hours": "Open Mon–Sat, 9 AM–6 PM; Sundays only for emergencies.",
  "appointment cancellation": "Cancel by calling +91 98765 43210 or reply here. Want to reschedule?",
  "dental cleaning": "Cleaning includes scaling and polishing, 30–45 min, painless. Book a session?",
  "gum disease": "Gum issues? We treat swelling or bleeding with cleaning. Book a checkup?",
  "kids dental": "Kid-friendly checkups with sealants and fluoride. Want to book for your child?",
  "tooth extraction": "Extractions use anesthesia for comfort and quick recovery. Need one?",
  "cavity prevention": "Brush, floss, avoid sugar, and see us every 6 months. Want to book a preventive checkup?",
  "whitening duration": "In-clinic whitening takes ~1 hour; results last 6–12 months. Interested?",
  "first visit": "First time? Don’t worry, we’ll do a friendly consult, X-ray, and cleaning if needed.",
  "is whitening permanent": "Teeth whitening isn’t permanent; results usually last 6–12 months with proper care.",
  "same-day appointment": "We offer same-day slots for urgent cases. Would you like me to check availability?",
  "do you treat kids": "Yes! We’re a kid-friendly clinic with special care for children. Want to book a pediatric consult?",
  "braces care tips": "Brush after every meal, avoid sticky foods, and use wax for irritation. Want a full guide?",
  "payment methods": "We accept cash, UPI, cards, and major insurance plans. Need EMI details?",
  "follow-up after treatment": "Most treatments require a quick follow-up in 1–2 weeks. Should I set a reminder?",
  "pain after extraction": "Mild pain is normal for 2–3 days. Use prescribed meds and cold packs. Severe pain? Call us!",
  "implant healing time": "Implants take 3–6 months to fully integrate. We’ll guide you through every step.",
  "pregnancy dental care": "Routine cleanings and urgent care are safe during pregnancy. Want to schedule a gentle checkup?",
  "teeth sensitivity after whitening": "Some sensitivity is normal and fades in 24–48 hours. Avoid hot/cold drinks briefly.",
  "retainer care": "Clean retainers daily with mild soap, not toothpaste. Want a full care guide?",
  "do you do night guards": "Yes, we provide custom night guards for grinding. Interested?",
  "do you do cosmetic dentistry": "Absolutely! We offer veneers, bonding, and smile makeovers. Want a consult?",
  "bad taste in mouth": "Could be gum infection or dry mouth. Schedule a checkup to be sure?",
  "loose tooth adult": "A loose adult tooth needs urgent care to prevent loss. Book an emergency visit?",
  "broken filling": "Broken filling? Avoid chewing on that side and book an appointment ASAP.",
  "do you treat seniors": "Yes, we offer senior-friendly care including dentures and implants. Want more info?",
  "scaling frequency": "Scaling is recommended every 6–8 months for healthy gums. Shall I book you in?",
  "orthodontic consult": "Our orthodontist can guide you on braces or aligners. Book a free consultation?",
  "aligners vs braces": "Aligners are invisible and removable; braces are fixed but effective. Want a cost comparison?",
  "do you do x-rays": "Yes, we have in-clinic digital X-rays — quick and low-radiation. Need one booked?",
  issue: "Can you describe the issue in detail? If it's urgent, please call +91 98765 43210 now.",
  issues: "Could you share more about the issues you're facing? I'm here to help.",
  problem: "Let me know your dental problem and I’ll suggest the next steps.",
  problems: "Tell me your concerns and I’ll suggest the next steps.",
      };

      const sendEmail = async (data) => {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "", // Replace with your Web3Forms Access Key
              subject: "New Dental Appointment",
              from_name: "SmileCare Chatbot",
              name: data.name,
              phone: data.phone,
              service: data.service,
              time: data.time,
            }),
          });

          const result = await response.json();
          if (result.success) {
            console.log("Email sent successfully");
          } else {
            console.error("Failed to send email:", result);
          }
        } catch (error) {
          console.error("Error sending email:", error);
        }
      };

      const botReply = (userText) => {
        const lower = userText.toLowerCase();

        // Handle booking flow
        if (awaitingInfo === "service") {
          setAppointmentData({ ...appointmentData, service: userText });
          setAwaitingInfo("name");
          return [`Got it! You selected "${userText}". What's your full name?`];
        }
        if (awaitingInfo === "name") {
          setAppointmentData({ ...appointmentData, name: userText });
          setAwaitingInfo("phone");
          return [`Thanks, ${userText}! What's your phone number?`];
        }
        if (awaitingInfo === "phone") {
          const finalData = {
            ...appointmentData,
            phone: userText,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          };
          setAppointmentData(finalData);
          setAwaitingInfo(null);
          sendEmail(finalData);
          return [
            { summary: true, data: finalData },
            "We'll call you soon to confirm your appointment!",
            "Thank you for choosing SmileCare! 😊",
          ];
        }

        // Enhanced emergency detection
      // Enhanced emergency detection
const emergencyKeywords = [
   "hi", "hello", "how are you", "i am fine", "who are you", "thanks", "thank you", "thankyou", "okay", "bye",
  "good morning", "good night", "your name", "dental checkup", "how to brush", "flossing tips",
  "emergency", "swelling", "bleedinggums", "toothache", "knocked out tooth", "severe toothache",
  "jaw pain", "broken braces", "bleeding", "loose crown", "pain", "abscess", "chipped", "knocked out",
  "severe", "jaw", "broken", "lost filling", "gum", "extraction", "burning", "ulcers", "cracked", "wisdom",
  "stuck", "orthodontic", "facial", "sensitivity", "retainer", "tongue", "lip", "cheek", "grinding",
  "dry socket", "implant", "bridge", "issue", "issues", "problem", "problems", "can't eat", "face swollen",
  "teeth whitening safe", "braces duration", "cost of implants", "root canal pain", "dental insurance"
];

// Check for specific emergency-related replies first
for (const key in extendedReplies) {
  if (lower.includes(key) && emergencyKeywords.some(word => lower.includes(word.split(" ")[0]))) {
    return [extendedReplies[key]];
  }
}

// Check for general emergency keywords
if (emergencyKeywords.some((word) => lower.includes(word))) {
  return [
    "This sounds urgent! Please call our 24/7 emergency line: +91 98765 43210.",
    "Or describe your issue in detail, and I'll guide you right away.",
  ];
}


        // Non-emergency extended replies
        for (const key in extendedReplies) {
          if (lower.includes(key)) {
            return [extendedReplies[key]];
          }
        }

        // Quick reply keywords
        if (userText.includes("Appointment")) {
          setAwaitingInfo("service");
          return ["Which service would you like? (e.g., Painless Root Canal, Teeth Whitening)"];
        }
        if (userText.includes("Treatments") || userText.includes("Prices")) {
          const list = services.map((s) => `• ${s.name} — ${s.price}`).join("\n");
          return [
            "Our treatments and prices:",
            list,
            "Ready to book an appointment?",
          ];
        }
        if (userText.includes("Clinic Location") || userText.includes("where is clinic located") || userText.includes("location")) {
          return [extendedReplies["location"]];
        }
        if (userText.includes("Contact Number") || userText.includes("phone number")) {
          return ["Reach us at +91 98765 43210—24/7 support! Need more help?"];
        }
        if (userText.includes("Dental Checkup")) {
          return [extendedReplies["dental checkup"]];
        }

        // Default fallback
        return ["Not sure what you meant. Try: Book an Appointment, Treatments & Prices, Clinic Location, Contact Number, or Dental Checkup Info."];
      };

      const sendMessage = (text = input) => {
        if (!text.trim()) return;
        const userMsg = {
          sender: "user",
          text,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([...messages, userMsg]);
        setInput("");
        setTyping(true);

        setTimeout(() => {
          setTyping(false);
          const replies = botReply(text);
          const botMessages = replies.map((r) => {
            if (typeof r === "object" && r.summary) {
              return {
                sender: "bot",
                summary: true,
                data: r.data,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              };
            }
            return {
              sender: "bot",
              text: r,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
          });
          setMessages((prev) => [...prev, ...botMessages]);
        }, 1000);
      };

      return (
        <>
          <motion.div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {!open && (
                <motion.div
                  className="mb-2 px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 text-gray-700 text-xs rounded-lg shadow-lg flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8, rotate: -5 }}
                  transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    🦷
                  </motion.span>
                  <span>Hey, can I help you? 😊</span>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              onClick={() => setOpen(!open)}
              className="relative w-14 h-14 rounded-full bg-gradient-to-r from-red-400 to-teal-500 text-white text-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              title="Hey! I'm SmileBot for SmileCare Dental Clinic!"
            >
              <motion.span
                className="absolute top-0 right-0 w-3 h-3 bg-green-300 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              💬
            </motion.button>
          </motion.div>

          <AnimatePresence>
            {open && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="fixed bottom-[120px] left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col text-sm overflow-hidden z-50 sm:bottom-24 sm:right-6 sm:left-auto sm:translate-x-0 sm:w-96"
                  style={{ marginRight: '-8px' }}
                >
               <div className="bg-gradient-to-r from-[#800000] to-[#a52a2a] text-white p-4 font-bold flex justify-between items-center">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    SoraDental Support
                  </span>
                  <motion.button
                    onClick={() => setOpen(false)}
                    className="text-xs hover:bg-white/20 rounded-full p-1"
                    whileHover={{ scale: 1.2 }}
                  >
                    ✕
                  </motion.button>
                </div>
                <div className="flex-1 p-4 space-y-3 max-h-96 overflow-y-auto bg-gray-50">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      {msg.summary ? (
                        <div className="bg-green-50 border border-green-200 p-3 rounded-xl w-64 shadow-sm">
                          <p className="font-bold text-green-700 mb-2">Appointment Confirmed</p>
                          <p className="text-sm">
                            <strong>Name:</strong> {msg.data.name}
                          </p>
                          <p className="text-sm">
                            <strong>Phone:</strong> {msg.data.phone}
                          </p>
                          <p className="text-sm">
                            <strong>Service:</strong> {msg.data.service}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">{msg.data.time}</p>
                        </div>
                      ) : (
                        <div
                          className={`px-4 py-2 rounded-2xl whitespace-pre-line max-w-[80%] shadow-sm ${
                            msg.sender === "user"
                              ? "bg-gradient-to-r from-green-100 to-teal-100 text-gray-800"
                              : "bg-white border border-gray-200 text-gray-700"
                          }`}
                        >
                          {msg.text}
                        </div>
                      )}
                      <span className="text-[10px] text-gray-400 mt-1">{msg.time}</span>
                    </motion.div>
                  ))}
                  {typing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-2xl inline-block text-gray-400 text-sm"
                    >
                      <span className="flex items-center">
                        <span className="animate-bounce inline-block mr-1">•</span>
                        <span className="animate-bounce inline-block mr-1 delay-100">•</span>
                        <span className="animate-bounce inline-block delay-200">•</span>
                      </span>
                    </motion.div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 p-3 bg-gray-100">
                  {quickReplies.map((q, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => sendMessage(q)}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full border border-gray-200 text-xs hover:bg-green-50 hover:border-green-300 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
                <div className="flex border-t bg-white">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 p-3 outline-none text-sm text-gray-700 placeholder-gray-400"
                  />
                  <motion.button
                    onClick={() => sendMessage()}
                    className="bg-gradient-to-r from-[#800000] to-[#a52a2a] text-white px-4 text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ➤
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      );
    }
export default Chat;