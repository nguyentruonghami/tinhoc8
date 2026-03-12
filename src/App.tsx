import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, ChevronLeft, PlayCircle, CheckCircle, ArrowRight, Clock, Star } from 'lucide-react';
import Markdown from 'react-markdown';
import Header from './components/Header';
import AIAssistant from './components/AIAssistant';
import Quiz from './components/Quiz';
import { lessons, Lesson } from './data/lessons';
import { cn } from './lib/utils';

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {!selectedLesson ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <div className="relative rounded-3xl overflow-hidden bg-indigo-600 text-white p-8 md:p-12 shadow-2xl shadow-indigo-200">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Khám phá thế giới số cùng Tin học 8</h2>
                  <p className="text-indigo-100 text-lg mb-8">
                    Học tập tương tác, làm chủ công nghệ và rèn luyện tư duy thuật toán với bộ sách Kết nối tri thức.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                      <Clock size={16} />
                      <span>4 Chủ đề lớn</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                      <Star size={16} />
                      <span>Học liệu chuẩn</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                  <Book size={300} className="transform translate-x-20 -translate-y-20 rotate-12" />
                </div>
              </div>

              {/* Topics Grid */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <PlayCircle className="text-indigo-600" />
                  Danh sách bài học
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lessons.map((lesson) => (
                    <motion.button
                      key={lesson.id}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedLesson(lesson)}
                      className="text-left bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                    >
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">
                        {lesson.chapter}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {lesson.title}
                      </h4>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                        {lesson.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle size={14} />
                          <span>{lesson.quiz.length} câu hỏi</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="lesson-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => { setSelectedLesson(null); setShowQuiz(false); }}
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-6 transition-colors font-medium"
              >
                <ChevronLeft size={20} />
                Quay lại danh sách
              </button>

              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">
                    {selectedLesson.chapter}
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900">{selectedLesson.title}</h2>
                </div>

                <div className="p-8">
                  {!showQuiz ? (
                    <div className="space-y-8">
                      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-h3:text-xl prose-h3:font-bold prose-p:text-slate-600 prose-li:text-slate-600">
                        <Markdown>{selectedLesson.content}</Markdown>
                      </div>
                      <div className="pt-8 border-t border-slate-100 flex justify-center">
                        <button
                          onClick={() => setShowQuiz(true)}
                          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-2"
                        >
                          <CheckCircle size={20} />
                          Làm bài tập ôn tập
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Quiz 
                      questions={selectedLesson.quiz} 
                      onComplete={() => setShowQuiz(false)} 
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AIAssistant />

      <footer className="mt-20 border-t border-slate-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Tin học 8 Explorer. Thiết kế cho giáo dục Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
}
