import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Контакты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Свяжитесь с нами</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Телефон</p>
                  <p className="text-slate-400">+7 (777) 777-77-77</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400">info@has-ilyas.kz</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Адрес</p>
                  <p className="text-slate-400">г. Алматы, ул. Примерная, 123</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-2">Ваше имя</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 transition-colors"
                placeholder="Введите ваше имя"
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Телефон</label>
              <input
                type="tel"
                className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 transition-colors"
                placeholder="Введите ваш телефон"
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Сообщение</label>
              <textarea
                className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 transition-colors h-32"
                placeholder="Введите ваше сообщение"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-3 rounded-lg transition-all hover:scale-[1.02]"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};