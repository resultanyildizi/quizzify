const examData = {
  title: "Quiz 2: Bilimsel Araştırma Yöntemleri Hafta 1",
  questions: [
    {
      question:
        "Bilim, yüzyıllar süren bilimsel bilgi üretme sürecinde kendi niteliğini, gerekçelerini ve standartlarını koymuştur. Bu süreçte, çağdaş bilimin dört önemli niteliği oluşmuştur. Aşağıdaki seçeneklerden hangisinde doğru olarak verilmiştir?",
      choices: {
        a: "Çeşitlilik, Süreklilik, Yenilik, Ayıklanma",
        b: "Sürdürülebilirlik, Süreklilik, Yenilik, Destekleme",
        c: "Ar-Ge, Süreklilik, Yenilik, İnovasyon",
        d: "Çeşitlilik, İnovasyon, Yenilik, Deneme",
        e: "Çağdaşlık, Süreklilik, Güncelleme, Teknolojik",
      },
      answer: "a",
    },
    {
      question: "Aşağıdakilerden hangisi birincil kaynaklardandır?",
      choices: {
        a: "İnternet Kaynakları",
        b: "El Kitapları",
        c: "Tezler",
        d: "Kütüphane Katalogları",
        e: "Güncel Duyuru Kaynakları",
      },
      answer: "c",
    },
    {
      question:
        "İki grubun ortalamalarını karşılaştırarak, aradaki farkın rastlantısal mı yoksa istatistiksel mi anlamlı olduğuna karar veren yöntem aşağıdakilerden hangisidir?",
      choices: {
        a: "Ki-Kare Testi",
        b: "Kappa Testi",
        c: "T-Testi",
        d: "Korelasyon Testi",
        e: "Regresyon Testi",
      },
      answer: "c",
    },
    {
      question: "Form-24 hangi konu ile ilgilidir?",
      choices: {
        a: "Doktora Tez Konusu Önerisi",
        b: "Kayıt Dondurma",
        c: "Yüksek Lisans Tez Konusu Önerisi",
        d: "Yeterlik Sınavı",
        e: "Seminer Değerlendirme Tutanağı",
      },
      answer: "e",
    },
    {
      question:
        "Yüksek lisans ve doktora tezlerinde aşağıdakilerden hangisinin özgeçmiş sayfasına eklenmesi zorunludur?",
      choices: {
        a: "H-İndeksi",
        b: "RG Skoru",
        c: "ORCID No",
        d: "Publons Puanı",
        e: "Toplam Yayın Sayısı",
      },
      answer: "c",
    },
    {
      question:
        "Yeterlik sınavını başarmış bir doktora öğrencisi, Tez İzleme Komitesi üyeleri ile ilgili dilekçeyi ne zaman Anabilim Dalı Kurulu kararı ile Enstitüye göndermelidir?",
      choices: {
        a: "Yeterlik sınavından sonra 3 gün içerisinde",
        b: "Yeterlik sınavından sonra 15 gün içerisinde",
        c: "Yeterlik sınavından sonra 1 ay içerisinde",
        d: "Yeterlik sınavından sonra 3 ay içerisinde",
        e: "Yeterlik sınavından sonra 6 ay içerisinde",
      },
      answer: "a",
    },
    {
      question:
        "Aşağıdakilerden hangisi araştırmaya katılan katılımcılara açık uçlu sorular sorularak ve konuşma yöntemlerini kullanarak veri toplayan bir araştırma yöntemidir?",
      choices: {
        a: "Tarihsel Araştırma",
        b: "Nitel Araştırma",
        c: "Nicel Araştırma",
        d: "Betimsel Araştırma",
        e: "Fenomenolojik Araştırma",
      },
      answer: "b",
    },
    {
      question:
        "Bir öğrencinin istatistik dersinden I. ara sınav notu 65, II. ara sınav notu 55 ve final notu ise 70’tir. Dersin geçme notu için vizelerin %20’si, finalin ise %60’ı alınacaktır. Buna göre bu öğrencinin başarı notu kaçtır?",
      choices: {
        a: "65",
        b: "66",
        c: "67",
        d: "68",
        e: "69",
      },
      answer: "b",
    },
    {
      question:
        "Fırat Üniversitesi Fen Bilimleri Enstitüsü’ne kayıtlı bir doktora öğrencisi, doktora tez savunma sınav tarihi almak için aşağıdaki formlardan hangisini Anabilim Dalı aracılığıyla Anabilim Dalı Kurulu kararı ile enstitüye teslim etmek zorunda değildir?",
      choices: {
        a: "Form-40",
        b: "Form-41",
        c: "Form-42",
        d: "Form-43",
        e: "Form-44",
      },
      answer: "e",
    },
    {
      question:
        "Standart sapmaya ilişkin aşağıda verilen bilgilerden hangisi yanlıştır?",
      choices: {
        a: "Ölçümlerin kendi aralarında ne kadar farklı olduğunu gösterir.",
        b: "Ölçümlerin grup ile farklarının ortalaması alınarak hesaplanır.",
        c: "Ölçümlerin grup ortalamasından olan ortalama farkıdır.",
        d: "Varyansın karekökü alınarak hesaplanabilir.",
        e: "Değişim katsayısının bir yüzdesidir.",
      },
      answer: "b",
    },
    {
      question:
        "Aşağıdaki birimlerden hangisi TÜBİTAK'a bağlı bir birim değildir?",
      choices: {
        a: "ARDEB",
        b: "TEYDEB",
        c: "BİDEB",
        d: "KOSGEB",
        e: "ULAKBİM",
      },
      answer: "d",
    },
    {
      question:
        "Tezli yüksek lisans programından mezun olmak için en az kaç Ulusal Kredi ve AKTS kredisi gereklidir?",
      choices: {
        a: "24 Ulusal Kredi, 124 AKTS",
        b: "21 Ulusal Kredi, 240 AKTS",
        c: "24 Ulusal Kredi, 120 AKTS",
        d: "21 Ulusal Kredi, 120 AKTS",
        e: "120 Ulusal Kredi, 24 AKTS",
      },
      answer: "d",
    },
    {
      question:
        "Benzin fiyatları 10 yıl içinde, bir önceki yıla göre, her yıl 1.5, 1.7, 1.9, 2.0, 2.3, 2.7, 2.9, 3.1, 3.4 ve 3.5 katı artmıştır. Benzinin 10 yıl içindeki ortalama artış hızını bulmak için hangi istatistik yöntemini kullanmak gerekir?",
      choices: {
        a: "Standart sapma",
        b: "Aritmetik ortalama",
        c: "Geometrik ortalama",
        d: "Ağırlıklı ortalama",
        e: "Hiçbiri",
      },
      answer: "c",
    },
    {
      question:
        "Bilimsel bir araştırmanın istatistiki çalışmasında elde edilen bir ölçütün orta noktasına ne denir?",
      choices: {
        a: "Frekans",
        b: "Mod",
        c: "Medyan",
        d: "Standart Sapma",
        e: "Range",
      },
      answer: "c",
    },
    {
      question: "Literatür taramasında hangisinin yapılması zorunlu değildir?",
      choices: {
        a: "Mevcut araştırmaların incelenmesi",
        b: "Belirlenen araştırma problemine bağışıklık kalmaması",
        c: "Özgün bulguların ortaya konulması",
        d: "Var olan sonuçların sentezlenmesi",
        e: "Yeni araştırma gereksinimlerinin belirginleştirilmesi",
      },
      answer: "c",
    },
    {
      question:
        "Kaynak ve belgeleri inceleyerek veri toplama hangisinin tanımıdır?",
      choices: {
        a: "Literatür tarama",
        b: "Veri toplama",
        c: "Hipotezin ortaya konulması",
        d: "Bilgi kaynağına erişim",
        e: "Kaynakların öğrenilmesi",
      },
      answer: "a",
    },
    {
      question:
        "Aşağıdaki seçeneklerden hangisi bilimsel yöntemi en iyi özetlemektedir?",
      choices: {
        a: "Teknolojik düşüncelerde değişim ve bir olgunlaşma sürecidir.",
        b: "Sürdürülebilir düşüncelerde destekleme ve bir olgunlaşma sürecidir.",
        c: "Yönetim düşüncelerde deneme-yanılma ve bir olgunlaşma sürecidir.",
        d: "İnovatif, değişim, yenileşme, atılım ve bir olgunlaşma sürecidir.",
        e: "Zihinsel bir gelişme, yenileşme ve bir olgunlaşma sürecidir.",
      },
      answer: "e",
    },
    {
      question:
        "Bir derginin etki faktörü (impact factor) hangisine dayanılarak belirlenir?",
      choices: {
        a: "Dergide yayımlanan makalenin aldığı atıf sayısına göre",
        b: "Derginin bir yılda yayımladığı makale sayısına göre",
        c: "Derginin türüne göre",
        d: "Derginin tarandığı alan indekslerine göre",
        e: "Derginin bilimsel popüleritesine göre",
      },
      answer: "a",
    },
    {
      question:
        "Değişik veriler elde edebilmek için araştırma araç gereçlerinde, işlemlerinde veya kayıtlarında değişiklik yapmak ya da sonuçları değiştirmek hangi etik ihlaline girmektedir?",
      choices: {
        a: "Uydurma",
        b: "Çarpıtma",
        c: "Aşırma",
        d: "Tekrar Yayımlama",
        e: "Dilimleme",
      },
      answer: "b",
    },
    {
      question:
        "Bilim bazı temel niteliklere sahip olmalıdır. Aşağıdaki seçeneklerden hangisi bu temel niteliklere en uzak niteliktir?",
      choices: {
        a: "Evrenseldir",
        b: "Mantıksaldır",
        c: "Deneyseldir",
        d: "İnovatiftir",
        e: "Gözlemseldir",
      },
      answer: "d",
    },
    {
      question:
        "Verilerin sınıflandırılması sonucunda elde edilen her bir sıklığın tekrarlanma sayısı aşağıdakilerden hangisidir?",
      choices: {
        a: "Grup",
        b: "Ölçek",
        c: "Periyot",
        d: "Frekans",
        e: "Ortalama",
      },
      answer: "d",
    },
    {
      question:
        "iThenticate programında benzerlik incelemesi aşağıdakilerden hangisi için yapılabilir? (Emin degilim)",
      choices: {
        a: "Makale",
        b: "Tez",
        c: "Ödev",
        d: "Proje",
        e: "Hepsi",
      },
      answer: "e",
    },
    {
      question:
        "Doktora tez konusu önerisi Enstitüye gönderilmeden önce aşağıdaki süreçlerden hangisinin tamamlanması gerekli değildir?",
      choices: {
        a: "Doktora Yeterlik Sınavına girilmesi ve başarılı olunması",
        b: "Tez İzleme Komitesinin belirlenmesi",
        c: "Tez İzleme Komitesine doktora tez konusunun sunulması",
        d: "Öğrencinin tüm derslerini ve seminer dersini başarmış olması",
        e: "Doktora Tez İlerleme Raporunun hazırlanması",
      },
      answer: "a",
    },
    {
      question:
        "Bir konu üzerine dinleyicilere bilgi sağlamak için düzenlenen, tartışma ve soru sormaya imkân veren oturum ya da toplantıya ne denilir?",
      choices: {
        a: "Konferans",
        b: "Sempozyum",
        c: "Tez",
        d: "Panel",
        e: "Seminer",
      },
      answer: "d",
    },
    {
      question:
        "Araştırma çevresini temsil eden küçük bir model oluşturması yöntemi aşağıdakilerden hangisidir?",
      choices: {
        a: "Gözlem",
        b: "Değişken",
        c: "Gruplama",
        d: "Örneklem",
        e: "Anket",
      },
      answer: "d",
    },
    {
      question:
        "Literatür taraması hakkında aşağıda verilen yargılardan hangisi yanlıştır? (Emin degilim)",
      choices: {
        a: "Çok çalışılmış sahalar araştırmacıya zengin bir kaynak sağlar.",
        b: "Kaynakçanın kabarık olması kaliteli bir çalışmanın göstergesi değildir.",
        c: "Taramaya en son yapılmış çalışmalardan başlamak avantajdır.",
        d: "Nitelikli-niteliksiz tüm kaynaklar değerlendirilmelidir.",
        e: "Fazla inceleme yapmak araştırmanın kalitesinin göstergesi değildir.",
      },
      answer: "d",
    },
    {
      question:
        '"Bilgisayar destekli eğitimin öğrencilerin akademik başarılarına etkileri" konulu araştırmanın bağımsız değişkeni hangisidir?',
      choices: {
        a: "Bilgisayar destekli eğitim",
        b: "Akademik başarı",
        c: "Çevresel faktörler",
        d: "Ders başarısı",
        e: "Ders materyalleri",
      },
      answer: "a",
    },
    {
      question:
        "Korelasyon katsayısı r = +0.50 olan değişkenler arasındaki ilişki düzeyi aşağıdakilerden hangisinde doğru ifade edilmiştir?",
      choices: {
        a: "Zayıf düzeyde",
        b: "Orta düzeyde",
        c: "Kuvvetli düzeyde",
        d: "Çok kuvvetli düzeyde",
        e: "İlişki yoktur",
      },
      answer: "b",
    },
    {
      question:
        "Aşağıda verilen araştırmalardan hangisi amaca göre araştırmalar grubunda yer almaz? (Emin degilim)",
      choices: {
        a: "Saha Araştırmaları",
        b: "Temel Araştırmalar",
        c: "Değerlendirme Araştırmaları",
        d: "Uygulamalı Araştırmalar",
        e: "Aksiyon (Eylem) Araştırmaları",
      },
      answer: "a",
    },
    {
      question: "Doktora programı en az kaç AKTS kredisinden oluşur?",
      choices: {
        a: "60",
        b: "90",
        c: "120",
        d: "240",
        e: "180",
      },
      answer: "d",
    },
    {
      question:
        "Yüksek lisanstan mezun olmak isteyen bir öğrenci en az kaç dersten başarılı olmalıdır?",
      choices: {
        a: "9 + 1",
        b: "8 + 1",
        c: "7 + 1",
        d: "6 + 1",
      },
      answer: "c",
    },
    {
      question:
        "Fen Bilimleri Enstitüsünün yüksek lisans ve doktora tez benzerliği incelemelerinde kabul ettiği Turnitin benzerlik oranı kaç olmalıdır?",
      choices: {
        a: "< %25",
        b: "< %20",
        c: "< %15",
        d: "< %10",
        e: "< %5",
      },
      answer: "b",
    },
    {
      question:
        "Tezli yüksek lisans programı en az ve en çok kaç yarıyılda tamamlanabilir?",
      choices: {
        a: "2-4",
        b: "4-6",
        c: "4-8",
        d: "6-8",
        e: "8-12",
      },
      answer: "b",
    },
    {
      question:
        "Web of Science içerisinde yapılan dergi sınıflandırmalarına göre bir derginin aşağıdaki sınıflandırmalardan hangisinde olması en kaliteli dergi sınıfında olduğunu gösterir?",
      choices: {
        a: "QS",
        b: "Q4",
        c: "Q3",
        d: "Q2",
        e: "Q1",
      },
      answer: "e",
    },
    {
      question:
        "Türkiye'de yayımlanan akademik dergilere merkezi bir sistemle ulaşılmasına imkân veren TÜBİTAK bilgi ağı hangisidir?",
      choices: {
        a: "Science Direct",
        b: "ULAKBİM",
        c: "Scopus",
        d: "Web of Science",
        e: "Ulusal Tez Arşivi",
      },
      answer: "b",
    },
    {
      question:
        "Doktora yeterlik sınavına giren bir öğrencinin yeterlik sınavından başarılı olabilmesi için yazılı ve sözlü sınav ortalamalarının en az kaç olması gerekmektedir?",
      choices: {
        a: "50",
        b: "55",
        c: "60",
        d: "65",
        e: "70",
      },
      answer: "e",
    },
    {
      question:
        "Doktora mezun olma koşulları arasında yer alan doktora seminerini öğrenci kaç dönem içerisinde sunmak ve başarmak zorundadır?",
      choices: {
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        e: "6",
      },
      answer: "c",
    },
    {
      question:
        "Bir doktora öğrencisinin tez savunmasına girebilmesi için en az kaç olumlu tez izleme raporu Enstitüye göndermelidir?",
      choices: {
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        e: "6",
      },
      answer: "b",
    },
    {
      question:
        "Seminer çalışması tamamlandıktan sonra danışman tarafından Anabilim Dalı Başkanlığına önerilen jüri kaç kişiden oluşur?",
      choices: {
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        e: "6",
      },
      answer: "5",
    },
    {
      question:
        "Bir yüksek lisans öğrencisi eğitimi boyunca YÖK Tez Veri Giriş Formunu kaç defa doldurmak zorundadır?",
      choices: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5",
      },
      answer: "a",
    },
  ],
};
