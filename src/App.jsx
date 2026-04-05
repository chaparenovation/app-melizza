import { useState, useEffect } from "react";
import { THEMES, PIEGE_QUESTIONS, PLAN_30_DAYS, ANXIETY_TIPS } from "./data";
import { Volume2, VolumeX, ArrowLeft, RefreshCw, Trophy, BookOpen, AlertCircle, Clock, BookMarked, CheckCircle2, XCircle } from "lucide-react";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(text, lang = "fr-FR") {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.85;
  u.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const frVoice = voices.find(v => v.lang.startsWith("fr")) || null;
  if (frVoice) u.voice = frVoice;
  window.speechSynthesis.speak(u);
}

const VoiceBtn = ({ text, lang, small, onPlay }) => (
  <button onClick={(e) => { e.stopPropagation(); speak(text, lang); if(onPlay) onPlay(); }} style={{
    background: "rgba(233,196,106,0.2)", border: "1px solid rgba(233,196,106,0.3)", borderRadius: "50%",
    width: small ? "32px" : "40px", height: small ? "32px" : "40px", display: "flex", alignItems: "center",
    justifyContent: "center", cursor: "pointer", color: "#E9C46A", flexShrink: 0, transition: "all 0.2s"
  }} title="Écouter en français"><Volume2 size={small ? 16 : 20} /></button>
);

const PROFILES = [
  { id: "peluche", name: "PELUCHE", color: "#F4A261" },
  { id: "jhonattan", name: "JHONATTAN", color: "#2A9D8F" }
];

export default function App() {
  const [activeProfile, setActiveProfile] = useState(null); // Local user profile
  
  const [screen, setScreen] = useState("profile_selection");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  // Persistence initialized depending on profile
  const [completedThemes, setCompletedThemes] = useState({});
  const [errorBank, setErrorBank] = useState([]);
  
  const [showPlan, setShowPlan] = useState(false);
  const [planWeek, setPlanWeek] = useState(1);
  const [piegeCategory, setPiegeCategory] = useState(null);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [tab, setTab] = useState("temas");

  // Timer logic
  const [timeLeft, setTimeLeft] = useState(20);
  const [isSimulation, setIsSimulation] = useState(false);

  // Load profile data when a profile is selected
  useEffect(() => {
    if (activeProfile) {
      const themesStr = localStorage.getItem(`${activeProfile}_themes`);
      const errStr = localStorage.getItem(`${activeProfile}_errors`);
      setCompletedThemes(themesStr ? JSON.parse(themesStr) : {});
      setErrorBank(errStr ? JSON.parse(errStr) : []);
      setScreen("home");
    }
  }, [activeProfile]);

  // Save profile data changes
  useEffect(() => {
    if (activeProfile) {
      localStorage.setItem(`${activeProfile}_themes`, JSON.stringify(completedThemes));
      localStorage.setItem(`${activeProfile}_errors`, JSON.stringify(errorBank));
    }
  }, [completedThemes, errorBank, activeProfile]);

  useEffect(() => {
    if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  }, []);

  // Timer Effect
  useEffect(() => {
    if (screen === 'quiz' && isSimulation && !quizDone && quizSelected === null) {
      if (timeLeft > 0) {
        const t = setTimeout(() => setTimeLeft(l => l - 1), 1000);
        return () => clearTimeout(t);
      } else {
        handleQuizAnswer(-1); // Timeout -> Wrong
      }
    }
  }, [timeLeft, screen, isSimulation, quizDone, quizSelected]);

  const selectProfile = (profileId) => {
    setActiveProfile(profileId);
  };

  const logout = () => {
    setActiveProfile(null);
    setScreen("profile_selection");
  };

  const startFlashcards = (theme) => {
    setSelectedTheme(theme);
    setCardIndex(0);
    setShowAnswer(false);
    setScreen("flashcards");
    if (voiceEnabled) setTimeout(() => speak(theme.cards[0].q), 300);
  };

  const startQuiz = (theme) => {
    setSelectedTheme(theme);
    const qs = shuffleArray(theme.quiz);
    setQuizQuestions(qs);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setIsSimulation(false);
    setScreen("quiz");
    if (voiceEnabled) setTimeout(() => speak(qs[0].q), 300);
  };

  const startPiegeQuiz = (cat) => {
    setPiegeCategory(cat);
    setQuizQuestions(cat.questions);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setIsSimulation(false);
    setSelectedTheme({ name: cat.category, icon: "🎯", color: "#E63946" });
    setScreen("piege-quiz");
    if (voiceEnabled) setTimeout(() => speak(cat.questions[0].q), 300);
  };

  const startSimulation = () => {
    const allQ = THEMES.flatMap(t => t.quiz.map(q => ({ ...q, theme: t.name })));
    const shuffled = shuffleArray(allQ).slice(0, 40);
    setQuizQuestions(shuffled);
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setIsSimulation(true);
    setTimeLeft(20);
    setSelectedTheme({ name: "Examen Simulado", icon: "📝", color: "#E63946" });
    setScreen("quiz");
    if (voiceEnabled) setTimeout(() => speak(shuffled[0].q), 300);
  };

  const startErrorQuiz = () => {
    if(errorBank.length === 0) return;
    setQuizQuestions(shuffleArray(errorBank).slice(0, 20)); 
    setQuizIndex(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setIsSimulation(false);
    setSelectedTheme({ name: "Banco de Errores", icon: "⚠️", color: "#E9C46A" });
    setScreen("quiz");
  };

  const handleQuizAnswer = (idx) => {
    if (quizSelected !== null) return;
    setQuizSelected(idx);
    
    const currentQ = quizQuestions[quizIndex];
    const correct = currentQ.correct === idx;
    
    if (correct) {
      setQuizScore(s => s + 1);
      if(selectedTheme?.name === "Banco de Errores") {
        setErrorBank(prev => prev.filter(q => q.q !== currentQ.q));
      }
    } else {
      if (!errorBank.find(q => q.q === currentQ.q)) {
        setErrorBank(prev => [...prev, currentQ]);
      }
    }

    setTimeout(() => {
      if (quizIndex + 1 < quizQuestions.length) {
        setQuizIndex(quizIndex + 1);
        setQuizSelected(null);
        if (isSimulation) setTimeLeft(20);
        if (voiceEnabled) speak(quizQuestions[quizIndex + 1].q);
      } else {
        setQuizDone(true);
        if (selectedTheme?.id) {
          setCompletedThemes(prev => ({
            ...prev,
            [selectedTheme.id]: Math.max(prev[selectedTheme.id] || 0,
              ((quizScore + (correct ? 1 : 0)) / quizQuestions.length) * 100)
          }));
        }
      }
    }, correct ? 1400 : 2500); 
  };

  const progress = Object.keys(completedThemes).length;
  const weekDays = PLAN_30_DAYS.filter(d => d.day > (planWeek - 1) * 6 && d.day <= planWeek * 6);

  const renderBack = () => (
    <button onClick={() => { setScreen("home"); window.speechSynthesis?.cancel(); }} style={{
      background: "none", border: "none", color: "#E9C46A", fontSize: "14px", cursor: "pointer",
      fontFamily: "inherit", fontWeight: 700, padding: "8px 0", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px"
    }}>
      <ArrowLeft size={16} /> Volver
    </button>
  );

  // Profile Selection Screen
  if (screen === "profile_selection") {
    return (
      <div style={{ position: "relative", zIndex: 1, maxWidth: "480px", margin: "0 auto", padding: "30px 12px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 900,
            background: "linear-gradient(90deg, #E9C46A, #E63946)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, lineHeight: 1.2
          }}>PELUCHE RUTE 🐻</h1>
          <p style={{ fontSize: "14px", color: "#888", marginTop: "8px" }}>¿Quién está estudiando o jugando hoy?</p>
        </div>
        
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {PROFILES.map(profile => (
            <div key={profile.id} onClick={() => selectProfile(profile.id)} style={{
              background: "rgba(255,255,255,0.05)", border: `2px solid ${profile.color}55`, borderRadius: "20px", 
              padding: "30px 20px", cursor: "pointer", textAlign: "center", width: "140px",
              boxShadow: `0 4px 15px ${profile.color}22`, transition: "transform 0.2s"
            }}>
              <UserCircle2 size={60} color={profile.color} style={{ margin: "0 auto 10px" }} />
              <div style={{ fontWeight: 800, fontSize: "15px", color: "#fff", letterSpacing: "1px" }}>{profile.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", zIndex: 1, maxWidth: "480px", margin: "0 auto", padding: "12px", paddingBottom: "90px" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "10px 0 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
           <button onClick={logout} style={{
              background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "10px", padding: "6px 12px", 
              color: "#aaa", fontSize: "11px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "4px"
           }}><UserCircle2 size={14} /> Cambiar Perfil</button>
           
           <span style={{ fontSize: "11px", fontWeight: 800, color: PROFILES.find(p => p.id === activeProfile)?.color || "#fff", background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "10px" }}>
              HOLA {activeProfile?.toUpperCase()}
           </span>
        </div>
      
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 900,
          background: "linear-gradient(90deg, #E9C46A, #E63946)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, lineHeight: 1.2
        }}>PELUCHE RUTE 🚀</h1>
        <p style={{ fontSize: "11px", color: "#aaa", margin: "4px 0 0", letterSpacing: "1px", textTransform: "uppercase" }}>
          Objertivo: Code de la Route
        </p>
        <button onClick={() => setVoiceEnabled(!voiceEnabled)} style={{
          marginTop: "12px", background: voiceEnabled ? "rgba(42,157,143,0.25)" : "rgba(255,255,255,0.08)",
          border: `1px solid ${voiceEnabled ? "#2A9D8F" : "rgba(255,255,255,0.15)"}`,
          borderRadius: "20px", padding: "6px 14px", color: voiceEnabled ? "#2A9D8F" : "#888",
          fontSize: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
          display: "inline-flex", alignItems: "center", gap: "6px"
        }}>
          {voiceEnabled ? <><Volume2 size={16} /> Voz activa</> : <><VolumeX size={16} /> Voz desactivada</>}
        </button>
      </div>

      {screen === "home" && (
        <div>
          {/* Progress */}
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "14px", padding: "12px 14px", marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
              <span style={{ fontWeight: 700, color: "#E9C46A" }}>Progreso de Temas</span>
              <span style={{ color: "#888", fontWeight: 700 }}>{progress}/{THEMES.length} temas</span>
            </div>
            <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px" }}>
              <div style={{ height: "100%", width: `${(progress / THEMES.length) * 100}%`, background: "linear-gradient(90deg, #2A9D8F, #E9C46A)", borderRadius: "3px", transition: "width 0.5s" }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
            <button onClick={() => setShowPlan(!showPlan)} style={{
              background: "linear-gradient(135deg, #457B9D, #2A9D8F)", border: "none", borderRadius: "12px",
              padding: "12px 8px", color: "#fff", fontWeight: 700, fontSize: "13px", cursor: "pointer"
            }}>📅 Plan 30 días</button>
            <button onClick={startSimulation} style={{
              background: "linear-gradient(135deg, #E63946, #BC4749)", border: "none", borderRadius: "12px",
              padding: "12px 8px", color: "#fff", fontWeight: 700, fontSize: "13px", cursor: "pointer"
            }}>⏱️ Simulacro (40Q)</button>
          </div>

          {showPlan && (
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "14px", padding: "14px", marginBottom: "12px" }}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                {[1, 2, 3, 4, 5].map(w => (
                  <button key={w} onClick={() => setPlanWeek(w)} style={{
                    background: planWeek === w ? "#E9C46A" : "rgba(255,255,255,0.08)",
                    color: planWeek === w ? "#1a1a2e" : "#aaa", border: "none", borderRadius: "8px", 
                    padding: "6px 12px", fontSize: "12px", fontWeight: 700, cursor: "pointer"
                  }}>Semana {w}</button>
                ))}
              </div>
              {weekDays.map(d => (
                <div key={d.day} style={{
                  display: "flex", gap: "8px", alignItems: "center",
                  background: d.day === 30 ? "rgba(230,57,70,0.12)" : "rgba(255,255,255,0.03)",
                  borderRadius: "8px", padding: "8px 10px", marginBottom: "4px",
                  borderLeft: `3px solid ${d.theme === "REPASO" || d.theme === "ERRORES" ? "#457B9D" : d.theme.includes("SIMULACRO") ? "#E63946" : d.theme === "PIÈGES" ? "#F4A261" : "#2A9D8F"}`
                }}>
                  <div style={{
                    minWidth: "28px", height: "28px", borderRadius: "50%", background: d.day === 30 ? "#E63946" : "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800
                  }}>{d.day}</div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#E9C46A" }}>{d.theme}</span>
                    <span style={{ fontSize: "11px", color: "#bbb", marginLeft: "6px" }}>{d.task}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: "flex", gap: "4px", marginBottom: "12px", flexWrap: "wrap" }}>
            {[["temas", "📚 Temas"], ["pieges", "🎯 Pièges"], ["errores", `⚠️ Errores (${errorBank.length})`], ["tips", "🧘 Relax"]].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)} style={{
                flex: "1 1 40%", background: tab === key ? "rgba(233,196,106,0.15)" : "rgba(255,255,255,0.05)",
                border: tab === key ? "1px solid rgba(233,196,106,0.3)" : "1px solid transparent",
                borderRadius: "10px", padding: "10px 4px", color: tab === key ? "#E9C46A" : "#888",
                fontSize: "12px", fontWeight: 700, cursor: "pointer"
              }}>{label}</button>
            ))}
          </div>

          {tab === "temas" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {THEMES.map(t => (
                <div key={t.id} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "12px", borderLeft: `4px solid ${t.color}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                      <span style={{ fontSize: "24px" }}>{t.icon}</span>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "14px" }}>{t.name}</div>
                        <div style={{ fontSize: "11px", color: "#888" }}>{t.desc}</div>
                      </div>
                    </div>
                    {completedThemes[t.id] && (
                      <span style={{
                        fontSize: "11px", fontWeight: 800, padding: "4px 8px", borderRadius: "6px",
                        background: completedThemes[t.id] >= 80 ? "rgba(42,157,143,0.2)" : "rgba(244,162,97,0.2)",
                        color: completedThemes[t.id] >= 80 ? "#2A9D8F" : "#F4A261"
                      }}>{Math.round(completedThemes[t.id])}%</span>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                    <button onClick={() => startFlashcards(t)} style={{
                      flex: 1, background: `${t.color}18`, border: `1px solid ${t.color}33`, borderRadius: "8px",
                      padding: "8px", color: "#ddd", fontWeight: 700, fontSize: "12px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "4px"
                    }}><BookOpen size={14} /> Tarjetas</button>
                    <button onClick={() => startQuiz(t)} style={{
                      flex: 1, background: `${t.color}33`, border: "none", borderRadius: "8px",
                      padding: "8px", color: "#fff", fontWeight: 700, fontSize: "12px", cursor: "pointer",  display: "flex", justifyContent: "center", alignItems: "center", gap: "4px"
                    }}><CheckCircle2 size={14} /> Quiz</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "errores" && (
             <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
               <AlertCircle size={40} color="#E9C46A" style={{ margin: "0 auto 10px" }} />
               <h3 style={{ margin: "0 0 8px", fontSize: "16px", color: "#E9C46A" }}>Banco de Errores</h3>
               <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "16px" }}>
                 Tienes {errorBank.length} preguntas acumuladas para repasar. ¡Estudia de tus errores!
               </p>
               <button onClick={startErrorQuiz} disabled={errorBank.length === 0} style={{
                  padding: "12px", borderRadius: "10px", width: "100%", opacity: errorBank.length === 0 ? 0.5 : 1,
                  background: "linear-gradient(135deg, #E9C46A, #F4A261)", border: "none", color: "#1a1a2e", 
                  fontWeight: 800, fontSize: "14px", cursor: errorBank.length === 0 ? "default" : "pointer"
                }}>Repasar Errores Ahora</button>
             </div>
          )}

          {tab === "pieges" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {PIEGE_QUESTIONS.map((cat, i) => (
                <button key={i} onClick={() => startPiegeQuiz(cat)} style={{
                  background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "14px",
                  border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: "4px"
                }}>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: "#E9C46A" }}>{cat.category}</span>
                  <span style={{ fontSize: "11px", color: "#aaa" }}>{cat.desc}</span>
                  <span style={{ fontSize: "11px", color: "#E63946", fontWeight: 700 }}>{cat.questions.length} questions</span>
                </button>
              ))}
            </div>
          )}

          {tab === "tips" && (
            <div>
              {ANXIETY_TIPS.map((tip, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "12px", marginBottom: "6px", borderLeft: "3px solid #6D6875" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "20px" }}>{tip.icon}</span>
                    <span style={{ fontWeight: 800, fontSize: "13px" }}>{tip.title}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "12px", color: "#bbb", lineHeight: 1.5 }}>{tip.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {screen === "flashcards" && selectedTheme && (
        <div className="flashcard-container">
          {renderBack()}
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <span style={{ fontSize: "30px" }}>{selectedTheme.icon}</span>
            <h2 style={{ margin: "4px 0", fontSize: "18px", fontWeight: 800 }}>{selectedTheme.name}</h2>
            <p style={{ color: "#888", fontSize: "12px", margin: 0 }}>Tarjeta {cardIndex + 1} / {selectedTheme.cards.length}</p>
          </div>

          <div onClick={() => setShowAnswer(!showAnswer)} className={`flashcard-inner ${showAnswer ? 'is-flipped' : ''}`} style={{
            background: showAnswer ? `linear-gradient(135deg, ${selectedTheme.color}22, ${selectedTheme.color}08)` : "rgba(255,255,255,0.05)",
            borderRadius: "18px", minHeight: "340px", cursor: "pointer", border: `1px solid ${selectedTheme.color}33`,
          }}>
            <div className="flashcard-front" style={{ padding: "24px 18px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "340px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <VoiceBtn text={selectedTheme.cards[cardIndex].q} lang="fr-FR" small />
              </div>
              {selectedTheme.cards[cardIndex].imageUrl && (
                 <img src={selectedTheme.cards[cardIndex].imageUrl} alt="Flashcard visual" className="question-image" />
              )}
              <p style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>{selectedTheme.cards[cardIndex].q}</p>
              <p style={{ fontSize: "12px", color: "#666", marginTop: "20px" }}><BookMarked size={12} /> Toca para girar</p>
            </div>
            
            <div className="flashcard-back" style={{ padding: "24px 18px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "340px" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <VoiceBtn text={selectedTheme.cards[cardIndex].a} lang="fr-FR" small />
              </div>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#eee", margin: 0 }}>{selectedTheme.cards[cardIndex].a}</p>
              <div style={{ marginTop: "20px", padding: "12px", borderRadius: "10px", background: "rgba(233,196,106,0.12)", fontSize: "13px", color: "#E9C46A", fontWeight: 600 }}>
                💡 {selectedTheme.cards[cardIndex].tip}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "5px", margin: "16px 0" }}>
            {selectedTheme.cards.map((_, i) => (
              <div key={i} style={{
                width: i === cardIndex ? "24px" : "8px", height: "8px", borderRadius: "4px",
                background: i === cardIndex ? selectedTheme.color : "rgba(255,255,255,0.15)", transition: "all 0.3s"
              }} />
            ))}
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
             <button onClick={() => { setCardIndex(Math.max(0, cardIndex - 1)); setShowAnswer(false); if (voiceEnabled && cardIndex > 0) speak(selectedTheme.cards[Math.max(0, cardIndex - 1)].q); }}
                disabled={cardIndex === 0} style={{
                  flex: 1, padding: "14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)",
                  color: cardIndex === 0 ? "#444" : "#fff", fontWeight: 700, fontSize: "14px", cursor: cardIndex === 0 ? "default" : "pointer"
                }}>← Anterior</button>
             {cardIndex < selectedTheme.cards.length - 1 ? (
                <button onClick={() => { setCardIndex(cardIndex + 1); setShowAnswer(false); if (voiceEnabled) speak(selectedTheme.cards[cardIndex + 1].q); }}
                  style={{
                    flex: 1, padding: "14px", borderRadius: "10px", border: "none", background: selectedTheme.color,
                    color: "#fff", fontWeight: 700, fontSize: "14px", cursor: "pointer"
                  }}>Siguiente →</button>
              ) : (
                <button onClick={() => startQuiz(selectedTheme)} style={{
                    flex: 1, padding: "14px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, #E9C46A, #F4A261)",
                    color: "#1a1a2e", fontWeight: 800, fontSize: "14px", cursor: "pointer"
                  }}>🧠 Hacer Quiz</button>
              )}
          </div>
        </div>
      )}

      {(screen === "quiz" || screen === "piege-quiz") && selectedTheme && (
        <div>
          {renderBack()}
          {!quizDone ? (
            <>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <h2 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: 800 }}>{selectedTheme.name}</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontSize: "13px", color: "#888", fontWeight: 600 }}>
                  <span style={{background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: "10px"}}>Q {quizIndex + 1}/{quizQuestions.length}</span>
                  <span style={{background: "rgba(42,157,143,0.2)", padding: "4px 10px", borderRadius: "10px", color: "#2A9D8F"}}>✓ {quizScore}</span>
                  {isSimulation && (
                     <span className={timeLeft <= 5 ? "pulsate" : ""} style={{background: timeLeft <= 5 ? "rgba(230,57,70,0.2)" : "rgba(233,196,106,0.2)", padding: "4px 10px", borderRadius: "10px", color: timeLeft <= 5 ? "#E63946" : "#E9C46A", display: "flex", alignItems: "center", gap: "4px"}}>
                        <Clock size={14} /> {timeLeft}s
                     </span>
                  )}
                </div>
              </div>

              {isSimulation && (
                 <div className="timer-bar-container">
                    <div className={`timer-bar ${timeLeft <= 5 ? 'warning' : ''}`} style={{ width: `${(timeLeft / 20) * 100}%` }} />
                 </div>
              )}

              <div style={{
                background: "rgba(255,255,255,0.05)", borderRadius: "14px", padding: "16px", marginBottom: "12px", textAlign: "center"
              }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                  <VoiceBtn text={quizQuestions[quizIndex].q} lang="fr-FR" small />
                </div>
                {quizQuestions[quizIndex].imageUrl && (
                   <img src={quizQuestions[quizIndex].imageUrl} alt="Question visual" className="question-image" />
                )}
                <p style={{ fontSize: "16px", fontWeight: 700, margin: 0 }}>{quizQuestions[quizIndex].q}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {quizQuestions[quizIndex].opts.map((opt, i) => {
                  let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.08)", icon = null;
                  if (quizSelected !== null) {
                    if (i === quizQuestions[quizIndex].correct) { bg = "rgba(42,157,143,0.2)"; border = "1px solid #2A9D8F"; icon = <CheckCircle2 size={16} color="#2A9D8F" />; }
                    else if (i === quizSelected || (quizSelected === -1 && i === quizQuestions[quizIndex].correct)) { bg = "rgba(230,57,70,0.2)"; border = "1px solid #E63946"; icon = <XCircle size={16} color="#E63946" />; }
                  }
                  return (
                    <button key={i} onClick={() => handleQuizAnswer(i)} style={{
                      background: bg, border, borderRadius: "12px", padding: "14px", color: "#eee", fontSize: "14px", fontWeight: 600, 
                      cursor: quizSelected !== null ? "default" : "pointer", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.2s"
                    }}>
                      <span><span style={{ color: "#888", marginRight: "8px", fontWeight: 800 }}>{String.fromCharCode(65 + i)}.</span>{opt}</span>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {quizSelected !== null && quizQuestions[quizIndex].explain && (
                <div style={{ marginTop: "12px", background: "rgba(233,196,106,0.1)", borderRadius: "10px", padding: "12px", fontSize: "13px", color: "#E9C46A", border: "1px solid rgba(233,196,106,0.15)" }}>
                  💡 {quizQuestions[quizIndex].explain}
                </div>
              )}
              {quizSelected === -1 && (
                 <div style={{ marginTop: "12px", background: "rgba(230,57,70,0.1)", borderRadius: "10px", padding: "12px", fontSize: "13px", color: "#E63946", border: "1px solid rgba(230,57,70,0.15)", textAlign: "center" }}>
                    ⏰ Temps écoulé!
                 </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <Trophy size={60} color={quizScore / quizQuestions.length >= 0.875 ? "#E9C46A" : "#888"} style={{ marginBottom: "16px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 8px" }}>{quizScore}/{quizQuestions.length}</h2>
              <p style={{ color: "#aaa", fontSize: "15px", margin: "0 0 16px" }}>
                {quizScore / quizQuestions.length >= 0.875 ? "¡Excelente, estás list@! 🎉" : quizScore / quizQuestions.length >= 0.7 ? "¡Buen trabajo! Sigue así" : "Hay que repasar un poco más 💪"}
              </p>
              
              {isSimulation && (
                <div style={{ margin: "16px auto", padding: "12px 20px", borderRadius: "12px", display: "inline-block", background: quizScore >= 35 ? "rgba(42,157,143,0.2)" : "rgba(230,57,70,0.15)" }}>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: quizScore >= 35 ? "#2A9D8F" : "#E63946" }}>
                    {quizScore >= 35 ? "✅ SIMULACRO APROBADO (≥35/40)" : `❌ NO APROBADO (Necesitas 35, tienes ${quizScore})`}
                  </span>
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
                <button onClick={() => setScreen("home")} style={{ flex: 1, padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
                   Inicio
                </button>
                <button onClick={() => {
                  if (isSimulation) startSimulation();
                  else if (screen === "piege-quiz" && piegeCategory) startPiegeQuiz(piegeCategory);
                  else if (selectedTheme?.name === "Banco de Errores") startErrorQuiz();
                  else if (selectedTheme?.quiz) startQuiz(selectedTheme);
                  else setScreen("home");
                }} style={{ flex: 1, padding: "14px", borderRadius: "12px", background: "linear-gradient(135deg, #E9C46A, #F4A261)", border: "none", color: "#1a1a2e", fontWeight: 800, fontSize: "14px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                   <RefreshCw size={16} /> Repetir
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
