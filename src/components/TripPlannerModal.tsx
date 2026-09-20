import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Calendar, Users, Compass } from 'lucide-react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'plan' | 'experts';
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'plan',
}) => {
  const [mode, setMode] = useState<'plan' | 'experts'>(defaultMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tripDuration, setTripDuration] = useState('3-5 days');
  const [travelStyle, setTravelStyle] = useState('Romantic & Scenic');
  const [submitted, setSubmitted] = useState(false);

  // Sync mode when defaultMode changes or opened
  React.useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && name.trim()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      id="trip-planner-modal-overlay"
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
    >
      <div
        id="trip-planner-modal-content"
        className="relative w-full max-w-lg bg-neutral-950 border border-white/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
      >
        <button
          id="close-trip-planner-button"
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 text-white/90">
                {mode === 'plan' ? 'Custom Itinerary' : 'Direct Advisory'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-2">
              {mode === 'plan' ? 'Plan Your Paris Journey' : 'Talk to Our Paris Experts'}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed mb-6">
              {mode === 'plan'
                ? 'Tell us about your ideal trip and our Parisian specialists will curate your tailored experience.'
                : 'Connect with a certified local guide to answer any questions about tours, reservations, and hidden gems.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="traveler-name" className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="traveler-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Amélie Poulain"
                    className="w-full px-4 py-2.5 rounded-full border border-white/25 text-white placeholder:text-white/40 focus:border-white focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="traveler-email" className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="traveler-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amelie@example.com"
                    className="w-full px-4 py-2.5 rounded-full border border-white/25 text-white placeholder:text-white/40 focus:border-white focus:outline-none text-sm"
                  />
                </div>
              </div>

              {mode === 'plan' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Duration
                      </label>
                      <select
                        value={tripDuration}
                        onChange={(e) => setTripDuration(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-full bg-neutral-900 border border-white/25 text-white focus:border-white focus:outline-none text-sm cursor-pointer"
                      >
                        <option value="1 Day">1 Day (Highlights)</option>
                        <option value="2-3 Days">2–3 Days (Weekend)</option>
                        <option value="3-5 Days">3–5 Days (Recommended)</option>
                        <option value="1 Week+">1 Week or More</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> Travel Style
                      </label>
                      <select
                        value={travelStyle}
                        onChange={(e) => setTravelStyle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-full bg-neutral-900 border border-white/25 text-white focus:border-white focus:outline-none text-sm cursor-pointer"
                      >
                        <option value="Romantic & Scenic">Romantic & Scenic</option>
                        <option value="Art & History">Art & History</option>
                        <option value="Culinary & Wine">Culinary & Wine</option>
                        <option value="Hidden Local Spots">Hidden Local Spots</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>{mode === 'plan' ? 'Create My Paris Itinerary' : 'Connect with Specialist'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 flex flex-col items-center">
            <CheckCircle className="w-14 h-14 text-white mb-4" strokeWidth={1.5} />
            <h3 className="text-2xl sm:text-3xl font-normal text-white mb-2">Merci, {name}!</h3>
            <p className="text-xs sm:text-sm text-white/70 mb-6 max-w-sm">
              Your personalized Paris inquiry has been received. Our concierge team is preparing your custom schedule for{' '}
              <span className="text-white font-medium">{email}</span>.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
