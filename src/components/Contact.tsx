import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, User } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-surface pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="construction-border w-24 h-2 mx-auto mb-8" />
        
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          СВЯЗАТЬСЯ С НАМИ
        </h1>
        <p className="text-gray-400 text-center mb-16 text-xl">
          Оставьте заявку, и мы свяжемся с вами в ближайшее время
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="construction-border rounded-2xl h-fit">
            <div className="glass-bg rounded-2xl p-8">
              <div className="flex gap-4 mb-8">
                {[Phone, Mail, MapPin].map((Icon, index) => (
                  <div key={index} className="construction-icon animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon size={24} className="text-yellow-400" />
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 glass-bg rounded-xl border border-yellow-400/20">
                  <Phone className="text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white">Телефон</p>
                    <p className="text-gray-400">+7 (777) 777-77-77</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass-bg rounded-xl border border-yellow-400/20">
                  <Mail className="text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400">info@has-ilyas.kz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 glass-bg rounded-xl border border-yellow-400/20">
                  <MapPin className="text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white">Адрес</p>
                    <p className="text-gray-400">
                      368000, Республика Дагестан,<br />
                      г. Хасавюрт, ул. Тотурбиева, 67
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="construction-border rounded-2xl">
            <div className="glass-bg rounded-2xl p-8">
              <div className="flex gap-4 mb-8">
                {[MessageSquare, User, Send].map((Icon, index) => (
                  <div key={index} className="construction-icon animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon size={24} className="text-yellow-400" />
                  </div>
                ))}
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                             focus:border-yellow-400 focus:shadow-neon transition-all"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                             focus:border-yellow-400 focus:shadow-neon transition-all"
                    placeholder="Введите ваш телефон"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Сообщение</label>
                  <textarea
                    className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                             focus:border-yellow-400 focus:shadow-neon transition-all h-32 resize-none"
                    placeholder="Введите ваше сообщение"
                  ></textarea>
                </div>
                
                <div className="animated-border p-[3px] rounded-lg">
                  <button type="submit" className="btn-primary group w-full">
                    <span className="relative z-10 flex items-center justify-center">
                      Отправить сообщение
                      <Send size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};