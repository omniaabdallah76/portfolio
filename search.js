

const pages = [
  {
    title: "Contact",
    url: "contact.html",
    content: "contact us Omnia Abdallah phone email Habiba Ayman Kamelia Mohamed Abdulrahman Ismael Yusuf El-badry Menna Magdy Manar Hanay Asmaa Ali"
  },
  {
    title: "Photo",
    url: "photo.html",
    content: "photo صور الري بالغمر شجر الموز محاصيل شتوية كرمب طرق الري مشتل ترعة الزمر ترعه غمر"
  },
  {
    title: "Home",
    url: "HOME.html",
    content: "home"
  },
  {
    title: "Learn More",
    url: "learnmore.html",
    content: "learn more"
  },
  {
    title: "Location",
    url: "location.html",
    content: "location"
  },
  {
    title: "Maps",
    url: "maps.html",
    content: "maps"
  }
];

const params = new URLSearchParams(window.location.search);
const query = params.get("q");

document.getElementById("search-title").textContent = `نتائج البحث عن: "${query}"`;

const results = pages.filter(page =>
  page.title.toLowerCase().includes(query.toLowerCase()) ||
  page.content.toLowerCase().includes(query.toLowerCase())
);

const resultsList = document.getElementById("results-list");

if (results.length === 0) {
  resultsList.innerHTML = `<p>مفيش نتائج لـ "${query}"</p>`;
} else {
  results.forEach(page => {
    resultsList.innerHTML += `
      <div class="result-item">
        <h3><a href="${page.url}">${page.title}</a></h3>
        <p>اضغط على الرابط للذهاب للصفحة</p>
      </div>
    `;
  });
}






