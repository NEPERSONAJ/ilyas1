import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-600">+7 (777) 777-77-77</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@has-ilyas.kz</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-600">г. Алматы, ул. Примерная, 123</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Ваше имя</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Введите ваше имя"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Телефон</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
                placeholder="Введите ваш телефон"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Сообщение</label>
              <textarea
                className="w-full p-3 border rounded-lg h-32"
                placeholder="Введите ваше сообщение"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};