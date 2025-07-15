```markdown
# 🧼 VP's Cleaning Services Website with AI Agent

A professional, responsive cleaning services website integrated with an AI chatbot powered by [Voiceflow](https://www.voiceflow.com/). This project is built using **Flask** (Python), **HTML/CSS/JS**, and demonstrates how conversational AI can enhance customer engagement and automate lead generation, instant quotes, and phone/chat support.

---

## 🎯 Purpose

This AI Customer Support & Lead Generation Agent is designed to:

- 💬 Interact with users via **chat** on the website and **voice** via phone (Twilio)
- 💡 Answer FAQs using a connected **Knowledge Base**
- 📊 Provide **instant cleaning quotes** based on property type and size (via Relevance AI)
- 📞 Accept phone calls, respond via AI, and gather information
- 📥 Automatically **store leads in Google Sheets** using Make.com
- 🔁 Integrate seamlessly with webhook-based tools for automation

> Built using **Voiceflow**, this agent ensures smart, scalable, and always-available customer support.

---

## 🧠 Platform Overview

### Voiceflow
[Voiceflow](https://voiceflow.com) enables teams to design, develop, and launch AI-powered conversational agents for both voice and chat. This agent was built to work across channels — embedded on the website as a chatbot and accessible via a Twilio phone number.

### Webhook Integration
Webhooks enable the Voiceflow agent to:
- Trigger workflows in **Make.com**
- Call APIs (like Relevance AI) for real-time quote calculation
- Store data (e.g., name, phone, property size/type) in **Google Sheets**
---

## 📂 Project Structure

```

VP'S\_CLEANING\_SERVICES/
│
├── app.py                        # Flask backend
├── requirements.txt             # Dependencies
│
├── static/                      # Static assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│
├── templates/                   # HTML pages rendered by Flask
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   └── contact.html
│
├── voiceflow-exported-vp's-cleaning-agent-workflow\.pdf   # AI agent workflow
└── working\_demo.mp4             # Demo screen recording of AI agent working


````

---

## 🚀 Features

## 🚀 Features

- ✅ Professional Website UI for VP’s Cleaning Services
- ✅ Flask Backend Routing and Jinja2 integration
- ✅ AI Agent with dual-channel support:
  - Chat via website
  - Voice via Twilio number
- ✅ Instant quote generation based on user input (property type & sq ft)
- ✅ Lead capture: name, phone, interest
- ✅ Lead storage in Google Sheets (via Make.com)
- ✅ Real-time integration with RelevanceAI via webhook


---

## 🧠 AI Agent (Voiceflow)

The AI chatbot is built using Voiceflow and embedded with the following script:

```html
<script type="text/javascript">
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '687631904b8ae82932e4213e' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>
````

It handles:

* Welcome greeting
* Intent classification
* Instant quote generation
* Name + phone number extraction
* Webhook triggers for lead submission

📄 *See `voiceflow-exported-vp's-cleaning-agent-workflow.pdf` for full logic.*

---

## 🛠️ How to Run Locally

### 1. Clone the project

```bash
git clone https://github.com/your-username/vps-cleaning-site.git
cd vps-cleaning-site
```

### 2. Install Flask

```bash
pip install -r requirements.txt
```

> `requirements.txt` includes:
>
> ```
> Flask==2.3.3
> ```

### 3. Run the App

```bash
python app.py
```

Visit: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 📸 Screens & Demo

* Demo recording of the full website and chatbot: `working_demo.mp4`
* AI agent flow logic: `voiceflow-exported-vp's-cleaning-agent-workflow.pdf`

---

## 🔧 Todo / Enhancements

* [ ] Backend processing of the contact form
* [ ] Store leads to MongoDB or Google Sheets
* [ ] Add SEO meta tags
* [ ] Deploy to Render / Railway / PythonAnywhere

---

## 🙌 Acknowledgements

* Voiceflow.com – for building the agent workflow and deploying the conversational chatbot
* Make.com – for connecting the agent to Google Sheets and automating backend data handling
* RelevanceAI.com – for training and deploying the tool used to calculate property cleaning price based on type and size
* Font Awesome – for icons used in the UI
* Flask – for building the Python web backend

---

## 📜 License

This project is for educational/demo purposes only. Feel free to reuse the code or chatbot flow with attribution.

```

