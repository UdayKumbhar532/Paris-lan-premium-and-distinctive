import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div
      id="early-access-modal-overlay"
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
    >
      <div
        id="early-access-modal-content"
        className="relative w-full max-w-md bg-neutral-950 border border-white/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
      >
        <button
          id="close-modal-button"
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-2">
              Get Early Access
            </h3>
            <p className="text-sm text-white/70 font-normal leading-relaxed mb-6">
              Be the first to discover secluded retreats and unearth peaceful hideaways worldwide.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="early-access-email" className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                  Email Address
                </label>
                <input
                  id="early-access-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-full border border-white/30 text-white placeholder:text-white/40 focus:border-white focus:outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Join Priority List</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl font-normal text-white mb-2">You’re on the list!</h3>
            <p className="text-sm text-white/70 mb-6">
              We’ve reserved your priority invitation for <span className="text-white font-medium">{email}</span>.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
