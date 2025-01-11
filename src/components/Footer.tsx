import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                HAS ILYAS
              </div>
              <div className="text-slate-400 font-medium">СТРОЙ</div>
            </div>
            <p className="text-slate-400">
              Строительство зданий из металлоконструкций с 2014 года
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/calculator" className="text-slate-400 hover:text-white transition-colors">Калькулятор</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Связаться с нами</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <span className="text-slate-400">+7 (777) 777-77-77</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-slate-400">info@has-ilyas.kz</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Адрес</h3>
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-400 flex-shrink-0" size={20} />
              <span className="text-slate-400">
                368000, Республика Дагестан,<br />
                г. Хасавюрт, ул. Тотурбиева, 67
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          © {new Date().getFullYear()} HAS ILYAS СТРОЙ. Все права защищены.
        </div>
      </div>
    </footer>
  );
}