import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    answer: number;
  }[];
  onComplete: () => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
  };

  const handleCheck = () => {
    if (selected === null) return;
    setIsAnswered(true);
    if (selected === questions[currentStep].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelected(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelected(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100">
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Hoàn thành bài tập!</h3>
        <p className="text-slate-600 mb-6">
          Bạn đã trả lời đúng <span className="font-bold text-indigo-600">{score}/{questions.length}</span> câu hỏi.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <RotateCcw size={18} />
            Làm lại
          </button>
          <button
            onClick={onComplete}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Quay lại bài học
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentStep];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Câu hỏi {currentStep + 1} / {questions.length}
        </span>
        <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-6">{q.question}</h3>

      <div className="space-y-3 mb-8">
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.answer;
          const isSelected = idx === selected;
          
          let stateStyles = "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30";
          if (isAnswered) {
            if (isCorrect) stateStyles = "border-emerald-500 bg-emerald-50 text-emerald-700";
            else if (isSelected) stateStyles = "border-rose-500 bg-rose-50 text-rose-700";
            else stateStyles = "border-slate-100 opacity-50";
          } else if (isSelected) {
            stateStyles = "border-indigo-600 bg-indigo-50 text-indigo-700";
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group",
                stateStyles
              )}
            >
              <span>{opt}</span>
              {isAnswered && isCorrect && <CheckCircle2 size={18} className="text-emerald-500" />}
              {isAnswered && isSelected && !isCorrect && <XCircle size={18} className="text-rose-500" />}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="px-8 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors font-medium"
          >
            Kiểm tra
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
          >
            {currentStep < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
