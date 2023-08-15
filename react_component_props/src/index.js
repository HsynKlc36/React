import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();


//Not:index.js React uygulamasının başlangıç noktasıdır. index.js bütün React uygulamasının nerede render edileceğini belirler. Bu dosyaya gidip incelediğimizde root id ile belirtilmiş bir HTML etiketine bütün uygulamanın render edileceğini görebiliriz.public klasörü altında index.html’e gittiğimizde ise bu bahsettiğimiz root id’li <div> etiketini görebiliriz.

// public/: Bu klasör React uygulamamızın static asset’lerini içeriyor. (index.html gibi)

// src/: Bu klasör React uygulamamızın JavaScript dosyalarını içeriyor. Burada bütün uygulamanın başlangıç noktası olan index.js ve App adlı bileşeni (component) içeriyor.

// node_modules/: Bu klasör içerisinde projenin bütün bağımlılıkları (Node.js Paket Yöneticisi — npm kullanılarak indirilen paketler) yer alıyor.

//package.json: Bu dosya bir tür manifest dosyasıdır. Projenin ismini, versiyonunu, manuel scriptleri ve projeye dahil edilen bütün paketlerin listesini (versiyonlarıyla birlikte) içerir. package-lock.json dosyası ise her paketin birebir sürümlendirilmiş bağımlılık ağacını tutar. Böylece diğer geliştiriciler ve proje sürümleri için garanti edilmiş versiyonlar saklanır.

//.gitignore: Bu dosya sayesinde istenmeyen uzantıdaki ve dizindeki dosyaların takip edilmesini engellemiş oluruz. Böylece git sunucularına göndermek istemediğimiz dosyalar takip edilmez. create-react-app ile node_modules klasörü altındaki paketler ve build klasörü .gitignore içerisinde belirtilmiş olarak gelir.

//React modüler bir yapı sunuyor ve birçok bileşenden oluşan uygulamalar ortaya çıkıyor. Build scripti oluşturulan bütün ayrı bileşenleri birleştirilip küçültülüyor ve optimize hale getiriyor. Bu sayede canlı ortama (production) alınabilecek bir uygulamaya sahip oluyoruz.

//Real Dom
// Hiyerarşik HTML etiketlerinin bütününe Real Dom denir.
// Virtual Dom
// Real Dom’un aynısı fakat bir Javascript objesi olarak tutuluyor. Bizim ekranımızda bir güncelleme olacağı zaman React gidiyor ve Real Dom ile Virtual Dom’u karşılaştırıyor. Eğer bunların arasında bir fark varsa sadece farklı olan kısmı Real Dom’a yazılıyor. Bunu yapma sebebiyse gereksiz yere renderın önüne geçebilmek, sadece güncellenmesi gereken alanların güncellenmesini sağlayabilmektir.