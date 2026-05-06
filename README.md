# naturenani-public
# Nature Nani 🌿

**Ancient Wisdom. Artificial Intelligence.**

NatureNani merges thousands of years of Ayurvedic wisdom with cutting-edge Generative AI to provide personalized, evidence-based natural health guidance. Acting as a "Virtual Nani" (wise grandmother), the platform offers real-time consultations, custom yoga protocols, and diet plans —all grounded in verified traditional scriptures using RAG architecture.

## ✨ Key Features
- **🤖 Intelligent Consultation**: Powered by **Google Gemini 3 Flash**, offering empathetic and medically-grounded advice.
- **🧘‍♀️ Restorative Motion**: AI-generated therapeutic yoga sequences tailored to specific ailments (e.g., "Yoga for Back Pain").
- **🥗 Nutri-Heal Engine**: Generates custom meal plans focused on healing and vitality.
- **🗣️ Voice Mode**: Hands-free interaction for guided sessions.
- **📚 Verified Knowledge Base**: Uses RAG (Retrieval-Augmented Generation) to ground answers in authentic Ayurvedic texts.

## 🛠️ Technology Stack
- **Frontend**: React (v18), Vite, Tailwind CSS, Lucide React
- **AI Core**: Google Gemini Models (Multimodal embeddings & generation)
- **Backend**: Supabase (PostgreSQL + **pgvector** for semantic search)
- **Search**: Google Custom Search API (Contextual image retrieval)
- **Payments**: Stripe Integration (Subscriptions & Trials)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Supabase Account
- Google API Key

### Installation
1. Clone the repository:
   ```bash
   git clone your-fork-url
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env.local`):
   ```env
   VITE_GEMINI_API_KEY=your_gemini_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## 🔒 Security & Privacy
- **Anonymous Usage**: Core informational features are available without mandatory registration.

- **Data Protection**: User data is stored securely using Supabase Row Level Security (RLS) policies.

- **Medical Disclaimer**: NatureNani is an AI-powered educational tool and not a substitute for professional medical advice, diagnosis, or treatment. Always consult a healthcare provider for serious conditions.

---
© 2026 NatureNani | A product of Gourmet Canopy LLC

*Disclaimer: Nature Nani is an AI-powered educational tool and not a substitute for professional medical advice. Always consult a healthcare provider for serious conditions.*
